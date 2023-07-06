export default () => {
    interface Box<Type> {
        color: Type;
    }
    const b1: Box<string> = { color: "red" };
    const b2: Box<number> = { color: 255 };
    const s1: string = "hello";

    console.log(b1, b2, s1);

    function bar<T>(arg: T): T {
        return arg;
    }

    const r = bar<string>("hello");
    console.log(r);

    const r2 = bar<number>(15);
    console.log(r2);

    function foo<T, S>(arg: T[], num: S): T[] {
        console.log(arg.length);
        return arg;
    }

    const r3 = foo<string, number>(["hello", "world"], 5);
};
