import React from 'react';
import Link from 'next/link';
import { adopt } from 'react-adopt';
import { Query, Mutation } from 'react-apollo';
import gql from 'graphql-tag';
import SidebarStyles from './styles/SideBarStyles';
import Supreme from './styles/Supreme';
import CloseButton from './styles/CloseButton';


// const LOCAL_STATE_QUERY = gql`
//   query {
//     sidebarOpen @client
//   }
// `;

// const TOGGLE_SIDEBAR_MUTATION = gql`
//   mutation {
//     toggleSidebarOpen @client
//   }
// `;

/* eslint-disable */
// const Composed = adopt({
//   toggleSidebar: ({render}) => <Mutation mutation={TOGGLE_SIDEBAR_MUTATION}>{render}</Mutation>,
//   localState: ({render}) => <Query query={LOCAL_STATE_QUERY}>{render}</Query>
// })
/* eslint-enable */


const Sidebar = (props) => (
          <SidebarStyles >
            <div className="Acts">
              <h3>Acts</h3>
              <ul>
                <li>
                  <Link href="/newAct">
                    <a>&#43;</a>
                  </Link>
                </li>
                <li>
                  <Link href="/acts">
                    <a>All</a>
                  </Link>
                </li>
              </ul>
            </div>
          </SidebarStyles>
);

// export { LOCAL_STATE_QUERY, TOGGLE_SIDEBAR_MUTATION };
export default Sidebar;
