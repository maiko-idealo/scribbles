import amqp, { Connection, Channel, Message, ConsumeMessage } from "amqplib";

export const consumeOffers = async (serverUrl: string, handler: Function) => {
    const connection: Connection = await amqp.connect(serverUrl);

    const channel: Channel = await connection.createChannel();
    channel.consume("offers", (message: ConsumeMessage | null) => {
        if (message && message.content) {
            const data = JSON.parse(message?.content.toString());
            handler(data);
        }
    });
};
