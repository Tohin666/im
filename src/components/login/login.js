import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';

import { withGraphqlService } from '../hoc';
import { fetchUsers, userAdded } from '../../actions';
import { compose } from '../../utils';

import './login.css';
import logo from '../../img/logo.png';

class Login extends Component {
    constructor() {
        super();
        this.state = { value: '' };
    }

    componentDidMount() {
        this.props.fetchUsers();
    }

    handleChange = (event) => {
        this.setState({ value: event.target.value });
    };

    handleSubmit = (event) => {
        alert('Отправленное имя: ' + this.state.value);
        event.preventDefault();
    };

    render() {
        const props = this.props;
        console.log('пропс: ', props);
        console.log('стейт: ', this.state);

        const renderForm = () => {
            if (props.userList.isLogged) {
                return (
                    <Fragment>
                        Задайте электронную почту и&nbsp;пароль для администратора системы
                        <form onSubmit={this.handleSubmit}>
                            <input type="text" name="role" placeholder="Администратор" value={this.state.value} onChange={this.handleChange} />
                            <input type="email" name="email" placeholder="Электронная почта" />
                            <input type="password" name="password" placeholder="Введите пароль" />
                            <input type="password" name="password-repeat" placeholder="Повторите пароль" />

                            <button type="submit">
                                Сменить пароль
                            </button>
                        </form>
                    </Fragment>
                );
            } else {
                return (
                    <Fragment>
                        <form onSubmit={this.handleSubmit}>
                            <input type="email" name="email" placeholder="Электронная почта" />
                            <input type="password" name="password" placeholder="Введите пароль" />
                            <button type="submit">
                                Войти в систему
                            </button>
                        </form>
                    </Fragment>
                );
            }
        };

        return (
            <div className="bg">
                <img src={logo} alt="proceset" className="logo" />
                <div className="login-content">
                    {renderForm()}
                </div>
            </div>
        );
    }
}

const mapStateToProps = ({ userList }) => {
    return { userList };
};

const mapDispatchToProps = (dispatch, { graphqlService }) => {
    return {
        fetchUsers: fetchUsers(graphqlService, dispatch),
        userAdded: (id) => dispatch(userAdded(id))
    };
};

export default compose(
    withGraphqlService(),
    connect(mapStateToProps, mapDispatchToProps)
)(Login);