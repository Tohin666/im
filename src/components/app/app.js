import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';

import { ApolloClient } from 'apollo-client';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { HttpLink } from 'apollo-link-http';
import { ApolloProvider } from "@apollo/react-hooks";

import ProcessList from '../process-list';
import UserProfile from '../user-profile';
import Login from '../login';
import { withGraphqlService } from '../hoc';
import { fetchUsers } from '../../actions';
import { compose } from '../../utils';

import './app.css';

class App extends Component {

    cache = new InMemoryCache();
    link = new HttpLink({
        uri: 'http://localhost:4000/api',
        headers: {
            "Authorization": `Bearer ${this.props.userList.token}`
        }
    });
    client = new ApolloClient({
        cache: this.cache,
        link: this.link
    });

    render() {
        return (
            <ApolloProvider client={this.client}>
                <div>
                    <Switch>
                        <Route path="/" component={ProcessList} exact />
                        <Route path="/login" component={Login} />
                        <Route path="/process-list" component={ProcessList} />
                        <Route path="/user-profile" component={UserProfile} />
                    </Switch>
                </div>
            </ApolloProvider>
        );
    }
}

const mapStateToProps = ({ userList }) => {
    return { userList };
};

const mapDispatchToProps = (dispatch, { graphqlService }) => {
    return {
        fetchUsers: fetchUsers(graphqlService, dispatch),
    };
};

export default compose(
    withGraphqlService(),
    connect(mapStateToProps, mapDispatchToProps)
)(App);
