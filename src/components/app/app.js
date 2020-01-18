import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import ProcessList from '../process-list';
import UserProfile from '../user-profile';
import Login from '../login';

import './app.css';

import { graphql } from 'react-apollo';
import { ApolloClient } from 'apollo-client';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { HttpLink } from 'apollo-link-http';
import { ApolloProvider } from "@apollo/react-hooks";
import gql from "graphql-tag";

const cache = new InMemoryCache();
const link = new HttpLink({
    uri: 'http://localhost:4000/api',
    headers: {       
        "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiZW1haWwiOiJ2YXN5YUBtYWlsLnJ1IiwiaWF0IjoxNTc5MTk4NzU5LCJleHAiOjE2MTA3NTYzNTl9.hCG6eIqKZ_djAgRe2f45rbLM4sIhGGbc6ZJafW0MGa0"
    }
});

const client = new ApolloClient({
    cache,
    link
});


const UsersList = ({ data: { loading, error, allUsers } }) => {
    if (loading) {
        return <p>Loading ...</p>;
    }
    if (error) {
        return <p>{error.message}</p>;
    }

    return <ul>
        {allUsers.map(user => <li key={user.id}>{user.firstName}</li>)}
    </ul>;
};

const allUsersQuery = gql`
query allUsersQuery {
    allUsers {
      id
      firstName
      secondName
      email
    }
  }
`;

const UsersListWithData = graphql(allUsersQuery)(UsersList);

class App extends Component {
    render() {
        return (
            <ApolloProvider client={client}>
                <div>
                    <UsersListWithData />
                    <Switch>
                        <Route path="/" component={ProcessList} exact />
                        <Route path="/login" component={Login} exact />
                        <Route path="/process-list" component={ProcessList} />
                        <Route path="/user-profile" component={UserProfile} />
                    </Switch>
                </div>
            </ApolloProvider>
        );
    }
}

export default App;