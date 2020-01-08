import React from 'react';
import { Row, Col } from 'react-grid-system';

import './process-item.css';
import updateIcon from './update.png';
import timeIcon from './time.png';
import activeTimeIcon from './active-time.png';
import employeesIcon from './employees.png';
import scenarioIcon from './scenario.png';

const ProcessItem = () => {

    return (
        <div className="block">
            <div className="block-header">
                <div>
                    Рассмотрение кредитной заявки
                </div>
                <div className="small-text">
                    На карту процесса >
                </div>
            </div>
            <Row className="block-content">
                <Col sm={3} className="text-1 dflex">
                    <div>
                        <img src={updateIcon} alt="" />
                    </div>
                    <div>
                        340 487
                        <div className="small-text">
                            выполнено раз
                        </div>
                    </div>
                </Col>
                <Col sm={3} className="text-2">
                    <div className="dflex">
                        <div>
                            <img src={timeIcon} alt="" />
                        </div>
                        <div>
                            10ч 36 мин
                            <div className="small-text">
                                среднее время выполнения
                            </div>
                        </div>
                    </div>
                    <div className="dflex">
                        <div>
                            <img src={activeTimeIcon} alt="" />
                        </div>
                        <div>
                            1ч 7 мин (10,5%)
                            <div className="small-text">
                                среднее активное время
                            </div>
                        </div>
                    </div>
                </Col>
                <Col sm={3} className="text-2">
                    <div className="dflex">
                        <div>
                            <img src={employeesIcon} alt="" />
                        </div>
                        <div>
                            120 сотрудников
                            <div className="small-text">
                                участвует в процессе
                            </div>
                        </div>
                    </div>
                    <div className="dflex">
                        <div>
                            <img src={scenarioIcon} alt="" />
                        </div>
                        <div>
                            129 сценариев
                            <div className="small-text">
                                в процессе
                            </div>
                        </div>
                    </div>
                </Col>
                <Col sm={3}>
                    <div className="dflex">
                        <div className="text-3 small-text">
                            <div>
                                Начало
                            </div>
                            <div>
                                Окончание
                            </div>
                            <div>
                                Загрузка
                            </div>
                        </div>
                        <div className="text-3 date">
                            <div>
                                11 ноября 2017
                            </div>
                            <div>
                                6 января 2018
                            </div>
                            <div>
                                10 января 2018
                            </div>
                        </div>
                    </div>
                </Col>
            </Row>
        </div>                            
    );
};

export default ProcessItem;