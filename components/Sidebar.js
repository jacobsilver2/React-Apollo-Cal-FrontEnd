import React from 'react';
import Link from 'next/link';
import styled from 'styled-components';
import User from './User';
import Router from 'next/router';
import NProgress from 'nprogress';
import SidebarStyles from './styles/SideBarStyles';
import Signout from './Signout';
import CalIcon from 'react-svg-loader!../assets/calendar.svg';
import CalAddIcon from 'react-svg-loader!../assets/calendar-add.svg';
import ActIcon from 'react-svg-loader!../assets/music.svg';
import ActAdd from 'react-svg-loader!../assets/music-add.svg';


Router.onRouteChangeStart = () => {
  NProgress.start();
} 
Router.onRouteChangeComplete = () => {
  NProgress.done();
}
Router.onRouteChangeError = () => {
  NProgress.done();
}


const Sidebar = () => (
  <User>
    { ({data: { me } }) => (
        <SidebarStyles>
          {me && (
          <>
          <div className="events">
            <ul>
              <li>
                <Link href="/">
                  <a><CalIcon width={50} height={50} filter={'invert(100%)'}/><div className="hovertext">All Events</div></a>
                </Link>
              </li>
              <li>
                <Link href="/newCalEvent">
                  <a><CalAddIcon width={50} height={50} filter={'invert(100%)'}/><span className="hovertext">Add Event</span></a>
                </Link>
              </li>
            </ul>
          </div>          
          <div className="Acts">
            <ul>
              <li>
                <Link href="/acts">
                  <a><ActIcon width={50} height={50} filter={{invert:'100%'}}/><span className="hovertext">All Acts</span></a>
                </Link>
              </li>
              <li>
                <Link href="/newAct">
                  <a><ActAdd width={50} height={50} filter={{grayscale:'100%'}}/><span className="hovertext">Add Act</span></a>
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
