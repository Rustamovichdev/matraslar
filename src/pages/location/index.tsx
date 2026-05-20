import { Button, Table, type TableColumnsType } from "antd";
import type { FC } from "react";
import { Location, type Ilocation } from "./data";
import { Icons } from "../../constants/icons";
import { EnvironmentOutlined } from "@ant-design/icons";
import { useState } from "react";
import LocationModal from "./locationModal";

const LocationPage: FC = () => {
    const [openModal, setOpenModal] = useState(false);
    const columns: TableColumnsType<Ilocation> = [
        {
            title: "Manzil",
            dataIndex: "manzil",
        },
        {
            title: "Matn",
            dataIndex: "matn",
        },
        {
            title: "Location",
            dataIndex: "location",
            render: () => (
                <Button type='primary' icon={<EnvironmentOutlined />} ghost>
                    Location
                </Button>
            ),
        },
        {
            title: "Action",
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
                <Button type='primary' onClick={() => setOpenModal(true)}>
                    Qo'shish
                </Button>
            </div>
            <Table columns={columns} dataSource={Location} rowKey='manzil' />
            <LocationModal open={openModal} setOpen={setOpenModal} />
        </section>
    );
};
export default LocationPage;
