import { Switch, Table, type TableColumnsType } from "antd";
import type { FC } from "react";
import { customer, type ICustomer } from "./features/data";

const CustomersPage: FC = () => {
    const columns: TableColumnsType<ICustomer> = [
        {
            title: "ID",
            dataIndex: "id",
        },
        {
            title: "To'liq ismi",
            dataIndex: "fullname",
        },
        {
            title: "Telefon raqami",
            dataIndex: "phone",
        },
        {
            title: "Sana",
            dataIndex: "date",
        },
        {
            title: "Qayta qo'ng'iroq",
            dataIndex: "isCallphone",
            render: (isContacted: boolean) => <Switch checked={isContacted} />,
        },
    ];

    return (
        <section>
            <Table columns={columns} dataSource={customer} />
        </section>
    );
};

export default CustomersPage;
