
import { onError } from "@apollo/client/link/error";
import { ApolloClient, HttpLink, InMemoryCache, from } from '@apollo/client';
import { RequestMiddleware, ResponseMiddleware } from "./Interceptor";

const httpLink = new HttpLink({ uri: 'http://localhost:6969/graphql' });

const errorLink = onError(({ graphqlErrors, networkError }) => {
    if (graphqlErrors) {
        graphqlErrors.map(({ message, location, path }) => {
            alert(`Graphql error ${message}`);
        });
    }
    if (networkError) {
        console.log(`[Network error]: ${networkError}`);
    }
});

const client = new ApolloClient({
    cache: new InMemoryCache(),
    link: from([
        RequestMiddleware,
        ResponseMiddleware,
        httpLink,
        errorLink
    ]),
});

export default client;