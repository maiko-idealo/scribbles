import { v4 } from "uuid";
import { arrayPlayground } from "./examples/array_stuff";
import { consumeOffers } from "./examples/rabbitmq";

arrayPlayground();
// consumeOffers("amqp://localhost", (data: any) => {
//     console.log(data);
// });
