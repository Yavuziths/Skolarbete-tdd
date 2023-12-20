export async function getUsers(): Promise<{ name: string; group: number }[]> {
    return [
        { "name": "Erik", "group": 1 },
        { "name": "Lisa", "group": 2 },
        { "name": "Hampus", "group": 2 }
    ];
}
