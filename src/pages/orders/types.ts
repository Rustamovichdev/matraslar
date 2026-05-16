export interface DataType {
    key: React.Key;
    name: string;
    age: number;
    address: string;
}

export interface OrderDataType {
    key: React.Key;
    id: number;
    name: string;
    phone: string;
    products: string;
    quantity: number;
    isContacted: boolean;
}
