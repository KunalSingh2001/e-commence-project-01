import React, { createContext, useState, useEffect } from "react";

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
    const [token, setToken] = useState(null);
    const [isLogin, setIsLogin] = useState(false);

    useEffect(() => {
        const savedToken = localStorage.getItem("token");
        if (savedToken) {
            setToken(savedToken);
        }
    }, []);

    function setLoginHander(data) {
        localStorage.setItem('token', data.idToken);
        localStorage.setItem('isLogin', true);
        localStorage.setItem('email', data.email)
        setToken(data.idToken);
    }

    function setLogoutHander() {
        localStorage.removeItem(token);
        localStorage.removeItem(isLogin);
        localStorage.removeItem('email');
        setToken(null);
    }

    return (
        <AuthContext.Provider value={{ token, setToken, isLogin, setLoginHander, setLogoutHander }}>
            {children}
        </AuthContext.Provider>
    );
};

export { AuthContext, AuthProvider };
