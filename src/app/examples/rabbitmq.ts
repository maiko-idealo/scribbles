import amqp, { Connection, Channel, Message, ConsumeMessage } from "amqplib";

export const consumeOffers = async (serverUrl: string) => {
    const connection: Connection = await amqp.connect(serverUrl);

    const channel: Channel = await connection.createChannel();
    channel.consume("offers", (data: ConsumeMessage | null) => {
        if (data && data.content) {
            console.log(JSON.parse(data?.content.toString()));
        }
    });
};
