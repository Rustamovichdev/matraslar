import { useContext, useState } from "react";
import { Icons } from "../../constants/icons";
import "./style.css";
import { AuthContext } from "../../context/authContext";

const LoginPage = () => {
    const [login, setLogin] = useState<string>("");
    const [password, setPassword] = useState<string>("");

    const loginCheck = useContext(AuthContext);

    async function onFinish() {
        try {
            const res = await fetch("https://dummyjson.com/auth/login", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    username: login,
                    password: password,
                }),
            });

            if (res.ok && res.status == 200) {
                const data = await res.json();

                localStorage.setItem("accessToken", data.accessToken);
                localStorage.setItem("refreshToken", data.refreshToken);

                loginCheck(data.accessToken, data.refreshToken);
            } else {
                alert("login yoki password xato....");
            }
        } catch (e) {
            console.log(e);
        }
    }

    return (
        <section className='login'>
            <div className='login__main'>
                <h1 className='title'>Kirish</h1>

                <form className='forms'>
                    <div className='item'>
                        <Icons.personIcon />
                        <input
                            type='text'
                            placeholder='Login'
                            required={true}
                            onChange={(e) => setLogin(e.target.value)}
                        />
                    </div>
                    <div className='item'>
                        <Icons.passwordIcon />
                        <input
                            type='password'
                            placeholder='Parol'
                            required={true}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>
                </form>

                <button onClick={onFinish}>Kirish</button>
            </div>
        </section>
    );
};
export default LoginPage;
