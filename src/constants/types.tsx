// types/menu.types.ts

import type { FC } from "react";

export interface MenuItemType {
    key: string;
    icon: FC;
    label: string;
    path: string;
    children?: MenuItemType[];
}
