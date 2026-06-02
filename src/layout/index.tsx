// layouts/MainLayout.tsx
import React from "react";
import { Layout, Menu, theme } from "antd";
import { Outlet, useNavigate, useLocation } from "react-router-dom";
import HeaderSide from "../components/headerSide";
import "./index.css";
import { menuData } from "../constants/menudata";

const { Content, Footer, Sider } = Layout;

const MainLayout: React.FC = () => {
    const {
        token: { colorBgContainer, borderRadiusLG },
    } = theme.useToken();

    const navigate = useNavigate();
    const location = useLocation();
    const currentYear = new Date().getFullYear();

    // Joriy path ga mos key topish
    const getSelectedKey = (): string => {
        const found = menuData.find((item) =>
            location.pathname.startsWith(item.path),
        );
        return found ? found.key : "1";
    };

    const handleMenuClick = ({ key }: { key: string }) => {
        const found = menuData.find((item) => item.key === key);
        if (found) navigate(found.path);
    };

    return (
        <Layout style={{ height: "100vh" }}>
            <Sider
                breakpoint='lg'
                collapsedWidth='0'
                onBreakpoint={(broken) => {
                    console.log("Breakpoint:", broken);
                }}
                onCollapse={(collapsed, type) => {
                    console.log("Collapse:", collapsed, type);
                }}
            >
                {/* Logo */}
                <div className='logo' style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    backgroundColor:"#01384D",
                    
                }}>
                    <img src="/public/logo.png" alt="" />
                </div>

                {/* Menu */}
                <Menu
                    style={{
                        backgroundColor:"#01384D"
                    }}
                    theme='dark'
                    mode='inline'
                    selectedKeys={[getSelectedKey()]}
                    items={menuData.map(({ key, icon: Icon, label }) => ({
                        key,
                        icon: <Icon />,
                        label,
                    }))}
                    onClick={handleMenuClick}
                />
            </Sider>

            <Layout>
                <HeaderSide />

                <Content style={{ margin: "24px 16px 0", overflow: "auto" }}>
                    <div
                        style={{
                            padding: 24,
                            minHeight: 360,
                            background: colorBgContainer,
                            borderRadius: borderRadiusLG,
                        }}
                    >
                        <Outlet />
                    </div>
                </Content>

                <Footer style={{ textAlign: "center" }}>
                     ©{currentYear} — Barcha huquqlar himoyalangan
                </Footer>
            </Layout>
        </Layout>
    );
};

export default MainLayout;
