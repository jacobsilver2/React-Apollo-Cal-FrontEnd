import withApollo from 'next-with-apollo';
import ApolloClient from 'apollo-boost';
import { endpoint } from '../config';
import { LOCAL_STATE_QUERY } from '../components/Sidebar';

function createClient({ headers }) {
  return new ApolloClient({
    uri: process.env.NODE_ENV === 'development' ? endpoint : endpoint,
    request: operation => {
      operation.setContext({
        fetchOptions: {
          credentials: 'include',
        },
        headers,
      });
    },
    // local data
    clientState: {
      resolvers: {
        Mutation: {
          toggleSidebarOpen(_, variables, { cache }) {
            // read the toggleSidebarOpen value from the cache
            const { sidebarOpen } = cache.readQuery({
              query: LOCAL_STATE_QUERY,
            });
            // write the sidebar state to the opposite
            const data = {
              data: { sidebarOpen: !sidebarOpen },
            };
            cache.writeData(data);
            return data;
          },
        },
      },
      defaults: {
        sidebarOpen: false,
      }
    }
  });
}

export default withApollo(createClient);
