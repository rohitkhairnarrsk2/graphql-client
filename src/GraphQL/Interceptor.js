import { ApolloClient, HttpLink, ApolloLink, InMemoryCache, from } from '@apollo/client';
let requestCount = 0;
export const RequestMiddleware = new ApolloLink((operation, forward) => {
    // add the authorization to the headers
    // operation.setContext(({ headers = {} }) => ({
    //   headers: {
    //     ...headers,
    //     authorization: localStorage.getItem('token') || null,
    //   }
    // }));
    requestCount++;
    console.log("Request", requestCount);

    return forward(operation);
})

export const ResponseMiddleware = new ApolloLink((operation, forward) => {
    return forward(operation).map(response => {
        requestCount--;
        console.log("Response", requestCount);
        return response;
    });
});
