import { createContext, useState, type ReactNode } from "react";

// type User = {
//     accessToken: string;
//     refreshToken: string;
//     firstName: string;
//     lastName: string;
//     gender: string;
// };

// type AuthContextType = {
//     login: (login: string, password: string) => void;
// };

export const AuthContext = createContext<any>(null);

const AuthProvider = ({ children }: { children: ReactNode }) => {
    const [isAuth, setIsAuth] = useState<boolean | null>(false);

    const loginCheck = (login: string, password: string) => {
        if (login && password) {
            setIsAuth(true);
        }
    };
    return (
        <AuthContext.Provider value={{ loginCheck, isAuth }}>
            {children}
        </AuthContext.Provider>
    );
};
export default AuthProvider;
