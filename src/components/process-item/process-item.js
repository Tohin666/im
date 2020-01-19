import React from 'react';
import { Row, Col } from 'react-grid-system';
import Moment from 'react-moment';
import moment from 'moment/min/moment-with-locales';

import './process-item.css';
import updateIcon from './update.png';
import timeIcon from './time.png';
import activeTimeIcon from './active-time.png';
import employeesIcon from './employees.png';
import scenarioIcon from './scenario.png';

moment.locale('ru');

const ProcessItem = ({ process }) => {

    return (
        <div className="block">            
            <div className="block-header">
                <div>
                    {process.name}
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
                        {process.numberOfExecutions}
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
                            <Moment format='HHч mmмин'>
                                {moment.utc(Number(process.averageLeadTime))}
                            </Moment>
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
                            <Moment format='HHч mmмин '>
                                {moment.utc(Number(process.averageActiveTime))}
                            </Moment>
                            ({Math.round((process.averageActiveTime / process.averageLeadTime * 100) * 10) / 10}%)
                            <br />
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
                            {process.employeesInvolvedProcess} сотрудников
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
                            {process.numberOfScenarios} сценариев
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
                                <Moment format='D MMMM YYYY'>
                                    {moment.utc(Number(process.start) * 1000)}
                                </Moment>
                            </div>
                            <div>
                                <Moment format='D MMMM YYYY'>
                                    {moment.utc(Number(process.end) * 1000)}
                                </Moment>
                            </div>
                            <div>
                                <Moment format='D MMMM YYYY'>
                                    {moment.utc(Number(process.loading) * 1000)}
                                </Moment>
                            </div>
                        </div>
                    </div>
                </Col>
            </Row>
        </div>
    );
};

export default ProcessItem;