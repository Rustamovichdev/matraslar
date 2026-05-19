export interface ICustomer {
    id: number;
    fullname: string;
    date: string;
    phone: string;
    isCallphone: boolean;
}
export const customer: ICustomer[] = [
    {
        id: 1,
        fullname: "Abdullayev Otabek",
        date: "12:13-12.05.2021",
        phone: "+998 90 123 45 67",
        isCallphone: true,
    },
    {
        id: 2,
        fullname: "Matyakubov Dadaxon",
        date: "12:13-12.05.2021",
        phone: "+998 90 123 45 67",
        isCallphone: false,
    },
    {
        id: 3,
        fullname: "Bekpolotov Lazizbek",
        date: "12:13-12.05.2021",
        phone: "+998 90 123 45 67",
        isCallphone: true,
    },
    {
        id: 4,
        fullname: "Sattorberganov Qalandat",
        date: "12:13-12.05.2021",
        phone: "+998 90 123 45 67",
        isCallphone: false,
    },
    {
        id: 5,
        fullname: "Abdullayev Otabek",
        date: "12:13-12.05.2021",
        phone: "+998 90 123 45 67",
        isCallphone: true,
    },
    {
        id: 6,
        fullname: "Baxtiyorov Baxtiyor",
        date: "12:13-12.05.2021",
        phone: "+998 90 123 45 67",
        isCallphone: false,
    },
];
