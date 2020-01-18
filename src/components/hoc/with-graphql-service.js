import React from 'react';
import { GraphqlServiceConsumer } from '../graphql-service-context';

const withGraphqlService = () => (Wrapped) => {
    return (props) => {
        return (
            <GraphqlServiceConsumer>
                {
                    (graphqlService) => {
                        return (
                            <Wrapped {...props} graphqlService={graphqlService} />
                        );
                    }
                }
            </GraphqlServiceConsumer>
        );
    };
};

export default withGraphqlService;