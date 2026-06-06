// constants/menuData.tsx
import {
    UserOutlined,
    VideoCameraOutlined,
    UploadOutlined,
    DashboardOutlined,
    SettingOutlined,
    AppstoreOutlined,
    CloudSyncOutlined,
} from "@ant-design/icons";
import type { MenuItemType } from "./types";

export const menuData: MenuItemType[] = [
    {
        key: "1",
        icon: DashboardOutlined,
        label: "Dashboard",
        path: "/dashboard",
    },
    {
        key: "2",
        icon: UserOutlined,
        label: "Buyurtmalar",
        path: "/orders",
    },
    {
        key: "3",
        icon: VideoCameraOutlined,
        label: "Сustomers",
        path: "/customers",
    },
    {
        key: "4",
        icon: UploadOutlined,
        label: "Toifalar",
        path: "/categories",
    },
    {
        key: "5",
        icon: AppstoreOutlined,
        label: "Mahsulotlar",
        path: "/products",
    },
    {
        key: "6",
        icon: CloudSyncOutlined,
        label: "Texnologiyalar",
        path: "/technology",
    },
    {
        key: "7",
        icon: SettingOutlined,
        label: "Manzil",
        path: "/addresse",
    },
];
