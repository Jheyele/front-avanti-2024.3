import { createContext, useState } from "react";

export const AuthContext = createContext();

const AuthProvider = ({children}) => {
    const [usuarioId, setUsuarioId] = useState(localStorage.getItem("id"));
    const [token, setToken] = useState(localStorage.getItem("token"));
    const [perfil, setPerfil] = useState(localStorage.getItem("perfil"));

    const sign = (data) => {
        setUsuarioId(data.id);
        setToken(data.token);
        setPerfil(data.perfil);
        localStorage.setItem("id", data.id);
        localStorage.setItem("token", data.token);
        localStorage.setItem("perfil", data.perfil);
    }

    const logout = () => {
        setUsuarioId(null);
        setToken(null);
        setPerfil(null);
        localStorage.removeItem("id");
        localStorage.removeItem("token");
        localStorage.removeItem("perfil");
    }

    return (
        <AuthContext.Provider value={{ usuarioId, token, perfil, sign, logout}}>
            {children}
        </AuthContext.Provider>
    )

}

export default AuthProvider;