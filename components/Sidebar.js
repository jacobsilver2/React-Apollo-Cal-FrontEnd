import React from 'react';
import Link from 'next/link';
import { CURRENT_USER_QUERY } from './User';
import User from './User';
import Router from 'next/router';
import NProgress from 'nprogress';
import { adopt } from 'react-adopt';
import { Query, Mutation } from 'react-apollo';
import gql from 'graphql-tag';
import SidebarStyles from './styles/SideBarStyles';
import Supreme from './styles/Supreme';
import CloseButton from './styles/CloseButton';
import Signout from './Signout';


Router.onRouteChangeStart = () => {
  NProgress.start();
} 
Router.onRouteChangeComplete = () => {
  NProgress.done();
}
Router.onRouteChangeError = () => {
  NProgress.done();
}


const Sidebar = (props) => (
  <User>
    { ({data: { me } }) => (
        <SidebarStyles>
          {me && (
          <>
          <div className="events">
            <h3>Events</h3>
            <ul>
              <li>
                <Link href="/newCalEvent">
                  <a>&#43;</a>
                </Link>
              </li>
              <li>
                <Link href="/">
                  <a>All</a>
                </Link>
              </li>
            </ul>
          </div>          
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
          </>
          )}
          {me && (
            <Signout />
          )}
          {!me && (
          <Link href="/signup">
            <a>Sign In</a>
          </Link>
        )}
        </SidebarStyles>
      )}
    </User>
);

// export { LOCAL_STATE_QUERY, TOGGLE_SIDEBAR_MUTATION };
export default Sidebar;
