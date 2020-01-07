import React from 'react';
import { Container, Row, Col, setConfiguration } from 'react-grid-system';

import './style.css';
import menuIcon from './menu-icon.png';
import processListIcon from './process-list-Icon.png';
import searchIcon from './search.png';
import menuWhiteIcon from './menu-white.png';
import usernameIcon from './username-icon.png';
import commonDataIcon from './common-data-icon.png';

setConfiguration({ containerWidths: [540, 750, 960, 1366] });

const ProcessList = () => {

    return (
        <div className="wrapper">
            <Container className="container">
                {/* <Row> */}
                {/* <Col sm={10}> */}
                <div className="main">
                    <div className="header">
                        <Row>
                            <Col sm={2}>
                                <img src={menuIcon} alt="" />
                                Меню
                                </Col>
                            <Col sm={7}>
                                <img src={processListIcon} alt="" />
                                Список процессов
                                </Col>
                            <Col sm={3}>
                                <div className="search">
                                    <img src={searchIcon} alt="" />
                                    Поиск по разделу
                                    </div>
                            </Col>
                        </Row>
                    </div>
                    <Row>
                        <Col sm={2} className="left-sider">
                            Фильтр
                                <button type="button">Добавить фильтр</button>
                        </Col>
                        <Col sm={10}>
                            <div className="block">
                                <div className="block-header">
                                    Рассмотрение кредитной заявки
                                    </div>
                                <Row>
                                    <Col sm={3} className="text-1">
                                        <img src={processListIcon} alt="" />
                                        340 487
                                        </Col>
                                    <Col sm={3} className="text-1">
                                        <img src={processListIcon} alt="" />
                                        340 487
                                        </Col>
                                    <Col sm={3} className="text-1">
                                        <img src={processListIcon} alt="" />
                                        340 487
                                        </Col>
                                    <Col sm={3} className="text-1">
                                        <img src={processListIcon} alt="" />
                                        340 487
                                        </Col>
                                </Row>
                            </div>
                            <div className="block">
                                <div className="block-header">
                                    Рассмотрение кредитной заявки
                                    </div>
                                <Row>
                                    <Col sm={3} className="text-1">
                                        <img src={processListIcon} alt="" />
                                        340 487
                                        </Col>
                                    <Col sm={3} className="text-1">
                                        <img src={processListIcon} alt="" />
                                        340 487
                                        </Col>
                                    <Col sm={3} className="text-1">
                                        <img src={processListIcon} alt="" />
                                        340 487
                                        </Col>
                                    <Col sm={3} className="text-1">
                                        <img src={processListIcon} alt="" />
                                        340 487
                                        </Col>
                                </Row>
                            </div>
                            <div className="block">
                                <div className="block-header">
                                    Рассмотрение кредитной заявки
                                    </div>
                                <Row>
                                    <Col sm={3} className="text-1">
                                        <img src={processListIcon} alt="" />
                                        340 487
                                        </Col>
                                    <Col sm={3} className="text-1">
                                        <img src={processListIcon} alt="" />
                                        340 487
                                        </Col>
                                    <Col sm={3} className="text-1">
                                        <img src={processListIcon} alt="" />
                                        340 487
                                        </Col>
                                    <Col sm={3} className="text-1">
                                        <img src={processListIcon} alt="" />
                                        340 487
                                        </Col>
                                </Row>
                            </div>
                        </Col>
                    </Row>
                </div>

                {/* </Col> */}
                {/* <Col sm={2} className="right-sider"> */}

                {/* </Col> */}
                {/* </Row> */}
            </Container>
            <div className="right-sider">
                <div className="right-sider_header">
                    <img src={menuWhiteIcon} alt="" />
                    proceset
                    </div>
                <div>
                    <img src={usernameIcon} alt="" />
                    Username
                        </div>
                <div>
                    <img src={commonDataIcon} alt="" />
                    Общие данные
                    </div>
            </div>
        </div>
    );

};

export default ProcessList;