import * as ConsumeOffers from "./rabbitmq";
import * as amqplib from "amqplib";

jest.mock("amqplib");

describe("consumeOffers", () => {
    const sut = ConsumeOffers;

    it("should consume offers from RabbitMQ", async () => {
        const mockConsoleLog = jest.spyOn(console, "log");
        const mockChannel: any = {
            consume: jest
                .fn()
                .mockImplementation(
                    (queueName: string, onMessage: (msg: any) => void) => {
                        const mockData: any = {
                            content: Buffer.from(
                                JSON.stringify({ id: 1, title: "Offer 1" })
                            ),
                        };
                        onMessage(mockData);
                    }
                ),
        };

        const mockConnection: any = {
            createChannel: jest.fn(() => Promise.resolve(mockChannel)),
        };

        (amqplib.connect as jest.Mock).mockResolvedValue(mockConnection);

        await sut.consumeOffers("testserver");

        expect(amqplib.connect).toHaveBeenCalledWith("testserver");
        expect(mockConnection.createChannel).toHaveBeenCalled();
        expect(mockChannel.consume).toHaveBeenCalledWith(
            "offers",
            expect.any(Function)
        );
        expect(mockConsoleLog).toHaveBeenCalledWith({
            id: 1,
            title: "Offer 1",
        });

        mockConsoleLog.mockRestore();
    });
});
