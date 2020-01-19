import React, { Component, Fragment } from 'react';
import { Redirect, Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { Container, Row, Col, setConfiguration } from 'react-grid-system';
import { graphql } from 'react-apollo';
import gql from "graphql-tag";

import { withGraphqlService } from '../hoc';
import { fetchProcessList } from '../../actions';
import { compose } from '../../utils';
import ProcessItem from '../process-item';

import './process-list.css';
import menuIcon from '../../img/menu-icon.png';
import processListIcon from './process-list-Icon.png';
import searchIcon from './search.png';
import menuWhiteIcon from './menu-white.png';
import usernameIcon from './username-icon.png';
import commonDataIcon from './common-data-icon.png';

setConfiguration({ containerWidths: [540, 750, 960, 1366] });


const Processes = ({ data: { loading, error, processList } }) => {
    if (loading) {
        return <p>Loading ...</p>;
    }
    if (error) {
        return <p>{error.message}</p>;
    }

    return (
        <Fragment>
            {processList.map((process) => <ProcessItem key={process.id} process={process} />)}
        </Fragment>
    );
};

const processListQuery = gql`
query processListQuery {
                processList {
                id
      name
            numberOfExecutions
            averageLeadTime
            averageActiveTime
            employeesInvolvedProcess
            numberOfScenarios
            start
            end
            loading
          }
        }
      `;

const ProcessesWithData = graphql(processListQuery)(Processes);

class ProcessList extends Component {

    componentDidMount() {
        this.props.fetchProcessList();
    }

    render() {
        const props = this.props;

        if (!props.userList.isLogged) {
            return <Redirect to="/login" />;
        }

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

                                <ProcessesWithData />

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
                        <Link to="/user-profile">
                            <img src={usernameIcon} alt="" />
                            Username
                        </Link>
                    </div>
                    <div>
                        <Link to="/process-list">
                            <img src={commonDataIcon} alt="" />
                            Общие данные
                        </Link>
                    </div>
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
        fetchProcessList: fetchProcessList(graphqlService, dispatch)
    };
};

export default compose(
    withGraphqlService(),
    connect(mapStateToProps, mapDispatchToProps)
)(ProcessList);
