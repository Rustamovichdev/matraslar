import type { FC } from "react";
import { NavLink } from "react-router-dom";

const MenuBar: FC = () => {
    return (
        <>
            <nav>
                <NavLink to={"/orders"}>Buyurtmalar</NavLink>
                <NavLink to={"/customer"}>Сustomers</NavLink>
            </nav>
        </>
    );
};
export default MenuBar;
