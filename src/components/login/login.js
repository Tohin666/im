import React from 'react';

import './login.css';
import logo from '../../img/logo.png';

const Login = () => {
    return (
        <div className="bg">
            <img src={logo} alt="proceset" className="logo" />
            <div className="login-content">
                Задайте электронную почту и&nbsp;пароль для администратора системы
                <form action="">
                    <input type="text" name="role" value="Администратор" />
                    <input type="email" name="email" placeholder="Электронная почта" />
                    <input type="password" name="password" placeholder="Введите пароль" />
                    <input type="password" name="password-repeat" placeholder="Повторите пароль" />
                    <button type="submit">
                        Сменить пароль
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Login;