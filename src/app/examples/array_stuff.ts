type Person = {
    id: number;
    name: string;
};

const data = new Array<Person>();
data.push({ id: 1, name: "Peter Parker" });
data.push({ id: 2, name: "Clark Kent" });
data.push({ id: 1, name: "Bruce Wayne" });

const filterExample = () => {
    const id = 2;
    const p = data.filter((a: Person) => {
        return a.id == id;
    });
    console.log("filterExample", p, "\n");

    // or in short:
    const p2 = data.filter((a) => a.id == id);
    console.log("filterExample2", p2, "\n");
};

const findIndexExample = () => {
    const name = "Bruce Wayne";
    const position = data.findIndex((a) => (a.name = name));
    console.log("findIndexExample", position, data[position], "\n");
};

const arrayPlayground = () => {
    filterExample();
    findIndexExample();
};
export { arrayPlayground };
