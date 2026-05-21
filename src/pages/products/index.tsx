import { useState } from "react";
import { Table, Button, Switch } from "antd";

import { products } from "./data";
import ProductModal from "./ProductModal";

const ProductsPage = () => {
    const [open, setOpen] = useState(false);

    const columns = [
        {
            title: "Mahsulot nomlari",
            dataIndex: "name",
        },
        {
            title: "Toifalar",
            dataIndex: "category",
        },
        {
            title: "Narxi",
            dataIndex: "price",
        },
        {
            title: "Yuklama",
            dataIndex: "weight",
        },
        {
            title: "Razmeri",
            dataIndex: "size",
        },
        {
            title: "Status",
            render: (_: any, record: any) => <Switch checked={record.active} />,
        },
        {
            title: "Action",
            render: (_: any, record: any) => (
                <div className='flex gap-2'>
                    <Button type='primary'>✏️</Button>

                    <Button danger>🗑️</Button>
                </div>
            ),
        },
    ];

    return (
        <div className='p-5'>
            <Table
                columns={columns}
                dataSource={products}
                rowKey='id'
                pagination={false}
            />

            <div className='flex justify-end mt-5'>
                <Button type='primary' onClick={() => setOpen(true)}>
                    Qo'shish
                </Button>
            </div>

            <ProductModal open={open} onClose={() => setOpen(false)} />
        </div>
    );
};

export default ProductsPage;
