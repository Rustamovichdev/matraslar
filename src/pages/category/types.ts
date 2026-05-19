import type { Dispatch, SetStateAction } from "react";

export interface PropsCategoryMadal {
    open: boolean;
    setOpen: Dispatch<SetStateAction<boolean>>;
}
