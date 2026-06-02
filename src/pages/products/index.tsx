import { Button, Table, type TableColumnsType } from "antd";
import { useState, type FC } from "react";
import { Icons } from "../../constants/icons";
import ProductModal from "./ProductModal";

const ProductsPage: FC = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    // Mahsulotlar uchun ma'lumotlar (bo'sh holatda)
    const data: any[] = [];

    const columns: TableColumnsType<any> = [
        {
            title: "Nomi",
            dataIndex: "name",
            key: "name",
        },
        {
            title: "Narxi",
            dataIndex: "price",
            key: "price",
        },
        {
            title: "Brend",
            dataIndex: "brand",
            key: "brand",
        },
        {
            title: "Action",
            key: "action",
            render: () => (
                <div className='grBtns'>
                    <button>
                        <Icons.editBtn />
                    </button>
                    <button>
                        <Icons.deleteBtn />
                    </button>
                </div>
            ),
        },
    ];

    return (
        <section>
            <div className='section_top'>
                <Button type='primary' onClick={() => setIsModalOpen(true)}>
                    Qo'shish
                </Button>
            </div>

            <Table columns={columns} dataSource={data} rowKey='id' />

            <ProductModal
                open={isModalOpen}
                onClose={() => setIsModalOpen(false)}
            />
        </section>
    );
};

export default ProductsPage;
