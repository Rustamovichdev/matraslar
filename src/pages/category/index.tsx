import { Button, Switch, Table, type TableColumnsType } from "antd";
import { categoryData, type ICategory } from "./features/data";
import { Icons } from "../../constants/icons";
import { useState } from "react";
import CategoryMadal from "./features/categoryMadal";

const Category = () => {
    const [open, setOpen] = useState(false);
    const columns: TableColumnsType<ICategory> = [
        {
            title: "Toifasi",
            dataIndex: "title",
        },
        {
            title: "Status",
            dataIndex: "status",
            render: (isContacted: boolean) => <Switch checked={isContacted} />,
        },
        {
            title: "Action",
            dataIndex: "",
            render: () => {
                return (
                    <div className='grBtns'>
                        <button>
                            <Icons.editBtn />
                        </button>
                        <button>
                            <Icons.deleteBtn />
                        </button>
                    </div>
                );
            },
        },
    ];

    return (
        <section>
            <div className='section_top'>
                <Button
                    type='primary'
                    onClick={() => {
                        setOpen(true);
                    }}
                >
                    Qo'shish
                </Button>
            </div>
            <Table columns={columns} dataSource={categoryData} />

            <CategoryMadal open={open} setOpen={setOpen} />
        </section>
    );
};
export default Category;
