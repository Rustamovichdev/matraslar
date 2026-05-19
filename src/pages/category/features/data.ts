export interface ICategory {
    id: number;
    title: string;
    status: boolean;
}

export const categoryData: ICategory[] = [
    {
        id: 1,
        title: "Madel A",
        status: true,
    },
    {
        id: 2,
        title: "Madel B",
        status: true,
    },
    {
        id: 3,
        title: "Madel B+",
        status: false,
    },
    {
        id: 4,
        title: "Madel C",
        status: true,
    },
];
