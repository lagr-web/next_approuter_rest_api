//src/app/cardinfo/data.ts

export async function getData(id: string) {

    const res = await fetch(`http://localhost:3000/api/actors/${id}`);

    if (!res.ok) {
        throw new Error('Failed to fetch data from some data');
    }
    return res.json();

}