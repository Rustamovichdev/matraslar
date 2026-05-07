import type { FC } from "react";
import MenuBar from "../components/menuBar";
import HeaderSide from "../components/headerSide";
import { Outlet } from "react-router-dom";

const App: FC = () => {
    return (
        <>
            <section>
                <div className='menu'>
                    <div>logo</div>
                    <MenuBar />
                </div>

                <div className='main'>
                    <HeaderSide />

                    <div>
                        <Outlet />
                    </div>
                </div>
            </section>
        </>
    );
};
export default App;
