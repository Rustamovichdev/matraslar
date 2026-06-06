import { Button, Table, type TableColumnsType } from "antd";
import { useState, type FC } from "react";
import { Icons } from "../../constants/icons";
import TechnologyModal from "./TechnologyModal";
import type { ITechnology } from "./features/typee";
// import { ITechnology } from "./typee";

const TechnologyPage: FC = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    // Ma'lumotlar (Test uchun namuna)
    const data: ITechnology[] = [
        {
            id: 1,
            name: "Memory Foam",
            description:
                "Yumshoq va qulay texnologiya, tana haroratiga qarab shakl oladi.",
            videoUrl: "https://www.youtube.com/watch?v=example1",
            isActive: true,
            extra: "AQSH texnologiyasi",
        },
        {
            id: 2,
            name: "Pocket Spring",
            description:
                "Mustaqil prujinalar tizimi, har bir prujina alohida qopchada joylashgan.",
            videoUrl: "https://www.youtube.com/watch?v=example2",
            isActive: true,
        },
    ];

    const columns: TableColumnsType<ITechnology> = [
        {
            title: "Nomlari",
            dataIndex: "name",
            key: "name",
        },
        {
            title: "Matn",
            dataIndex: "description",
            key: "description",
        },
        {
            title: "Video",
            dataIndex: "videoUrl",
            key: "videoUrl",
            render: (text) =>
                text ? (
                    <a href={text} target='_blank' rel='noreferrer'>
                        Video havola
                    </a>
                ) : (
                    "-"
                ),
        },
        {
            title: "Action",
            key: "action",
            render: () => (
                <div className='grBtns'>
                    <button type='button'>
                        <Icons.editBtn />
                    </button>
                    <button type='button'>
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

            <TechnologyModal
                open={isModalOpen}
                onClose={() => setIsModalOpen(false)}
            />
        </section>
    );
};

export default TechnologyPage;
