import React from 'react';
import { Container, Row, Col, setConfiguration } from 'react-grid-system';

import './user-profile.css';
import menuIcon from '../../img/menu-icon.png';

setConfiguration({ containerWidths: [540, 750, 960, 1366] });

const UserProfile = () => {

    return (
        <div className="wrapper">
            <Container className="container">
                <div className="main">
                    <div className="header">
                        <Row>
                            <Col sm={2}>
                                <img src={menuIcon} alt="" />
                                Меню
                            </Col>
                        </Row>
                    </div>
                    <Row>
                        <Col sm={2} className="left-sider">
                            <div>
                                Общие данные
                            </div>
                        </Col>
                        <Col sm={10}>
                            <form action="">
                                <div className="profile-title">
                                    <div>
                                        Борис Годунов. Редактирование
                                    </div>
                                    <div>
                                        <button type="submit">
                                            Сохранить и вернуться
                                        </button>
                                    </div>
                                </div>
                                <div className="profile-content">
                                    <Row>
                                        <Col sm={3}>
                                            <label for="first-name">
                                                Имя
                                            </label>
                                        </Col>
                                        <Col sm={5}>
                                            <input type="text" name="first-name" value="Борис" />
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col sm={3}>
                                            <label for="last-name">
                                                Фамилия
                                            </label>
                                        </Col>
                                        <Col sm={5}>
                                            <input type="text" name="last-name" value="Годунов" />
                                        </Col>                                        
                                    </Row>
                                    <hr />
                                    <Row>
                                        <Col sm={3}>
                                            <label for="last-name">
                                                Электронная почта
                                            </label>
                                        </Col>
                                        <Col sm={5}>
                                            <input type="email" name="email" value="qwerty@yandex.ru" />
                                        </Col>                                        
                                    </Row>
                                    <Row>
                                        <Col sm={3}>
                                            <label for="last-name">
                                                Введите пароль
                                            </label>
                                        </Col>
                                        <Col sm={5}>
                                            <input type="password" name="password" value="password" />
                                        </Col>                                        
                                    </Row>
                                    <Row>
                                        <Col sm={3}>                                            
                                        </Col>
                                        <Col sm={5}>
                                            <button type="submit">
                                                Сменить пароль
                                            </button>
                                        </Col>                                        
                                    </Row>
                                </div>
                            </form>
                        </Col>
                    </Row>
                </div>
            </Container>
        </div>
    );

};

export default UserProfile;