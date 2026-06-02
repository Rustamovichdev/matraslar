import { Header } from "antd/es/layout/layout";
import type { FC } from "react";
import { Space, Typography } from "antd"; // Space va Typography komponentlarini import qilamiz

const HeaderSide: FC = () => {
    return (
        <Header
            style={{
                padding: "0 24px", // Header ichidagi kontent uchun gorizontal padding
                background: "#01384D",
                display: "flex",
                justifyContent: "flex-end", // Kontentni o'ng tomonga surish
                alignItems: "center", // Kontentni vertikal markazga joylashtirish
            }}
        >
            <Space size='middle'>
                {" "}
                {/* Icon va text orasidagi masofa uchun Space komponenti */}
                <img 
                    src='/public/icon.png' // public papkasidagi rasmga yo'l
                    alt='Profile'
                    style={{
                        background: "#3223",
                       
                        color: "white",
                        width: "32px",
                        height: "32px",
                        borderRadius: "40%",
                        objectFit: "cover",
                    }}
                />
                <Typography.Text style={{ color: "white", fontSize: "16px", paddingRight: "30px" }}>
                    John Doe
                </Typography.Text>
            </Space>
        </Header>
    );
};
export default HeaderSide;
