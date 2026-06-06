import { useEffect, useState } from "react";
import { Table, Button, Switch } from "antd";

import { products } from "./data";
import ProductModal from "./ProductModal";
import type { OrderDataType } from "../orders/types";

const ProductsPage = () => {
    const [open, setOpen] = useState(false);

     const [data, setData] = useState<OrderDataType[]>([]);
    const [loading, setLoading] = useState<boolean>(false);

    useEffect(() => {
        async function fetchData() {
            setLoading(true);
            try {
                const res = await fetch(
                    "https://matras-api-production.up.railway.app/api/v1/product",
                    {
                        headers: {
                            Authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTgsImlhdCI6MTc4MDU3NzIyMywiZXhwIjoxNzgwNTc4MTIzfQ.mk0T1En2CylkEIHo8OhkhciXxx-hOPF7Yc9gdlSiE-s",
                        },
                    },
                );
                const result = await res.json();
                // API to'g'ridan-to'g'ri array yoki { data: [] } ko'rinishida qaytishi mumkin

                console.log(result)
                setData(Array.isArray(result) ? result : result.data || []);
            } catch (error) {
                console.error("Ma'lumotlarni olishda xatolik:", error);
            } finally {
                setLoading(false);
            }
        }
        fetchData();
    }, []);

    const columns = [
        {
            title: "Mahsulot nomlari",
            dataIndex: "product_name",
        },
        {
            title: "Toifalar",
            dataIndex: "category_id",
        },
        {
            title: "Narxi",
            dataIndex: "price",
        },
        {
            title: "Yuklama",
            dataIndex: "weight_loading",
        },
        {
            title: "Razmeri",
            dataIndex: "product_size",
        },
        {
            title: "Status",
            render: (_: any, record: any) => <Switch checked={record.is_active} />,
        },
        {
            title: "Action",
            render: (_: any, record: any) => (
                <div
                    className='flex gap-2'
                    style={{ display: "flex", gap: "10px" }}
                >
                    <Button type='primary' style={{ background: "#e6ebed" }}>
                        ✏️
                    </Button>

                    <Button danger style={{ background: "#fbe9e9" }}>
                        🗑
                    </Button>
                </div>
            ),
        },
    ];

   


    return (
        <div className='p-5'>
            <Table
                columns={columns}
                dataSource={data}
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