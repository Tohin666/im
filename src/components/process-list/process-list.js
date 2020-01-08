import React from 'react';
import { Container, Row, Col, setConfiguration } from 'react-grid-system';

import ProcessItem from '../process-item';

import './process-list.css';
import menuIcon from '../../img/menu-icon.png';
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
                            <span>Фильтр</span>
                            <button type="button">Добавить фильтр</button>
                        </Col>
                        <Col sm={10}>
                            <ProcessItem />
                            <ProcessItem />
                            <ProcessItem />
                        </Col>
                    </Row>
                </div>
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