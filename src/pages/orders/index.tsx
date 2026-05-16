import { Switch, Table, type TableColumnsType } from "antd";
import type { FC } from "react";
import type { OrderDataType } from "./types";
import { ordersData } from "./features/data";
// import { createStyles } from "antd-style";

const OrdersPage: FC = () => {
    const columns: TableColumnsType<OrderDataType> = [
        {
            title: "ID",
            dataIndex: "id",
        },
        {
            title: "Ismi",
            dataIndex: "name",
        },
        {
            title: "Telefon raqami",
            dataIndex: "phone",
        },
        {
            title: "Mahsulot nomlari",
            dataIndex: "products",
        },
        {
            title: "Miqdori",
            dataIndex: "quantity",
        },
        {
            title: "Qayta aloqa",
            dataIndex: "isContacted",
            render: (isContacted: boolean) => <Switch checked={isContacted} />,
        },
    ];
    return (
        <Table
            columns={columns}
            dataSource={ordersData}
            scroll={{ y: 55 * 8 }}
        />
    );
};
export default OrdersPage;
