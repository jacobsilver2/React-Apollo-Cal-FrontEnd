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

Router.events.on('routeChangeStart', handleRouteStart);
Router.events.on('routeChangeComplete', handleRouteComplete);
Router.events.on('routeChangeError', handleRouteError);

function handleRouteStart() {
  NProgress.start();
}

function handleRouteComplete() {
  NProgress.done()
}

function handleRouteError() {
  NProgress.done()
}

const Sidebar = () => (
  <User>
    { ({data: { me } }) => (
      <SidebarStyles>
        {me && (
          <>
            <div className="top">
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
              <div className="acts">
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
              <div className="automations">
                <ul>
                  <li>
                    <Link href="/automations">
                      <a><span>Automations</span></a>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
              <div className="analytics">
                <ul>
                  <li>
                    <Link href="/analytics">
                      <a><span>Analytics</span></a>
                    </Link>
                  </li>
                </ul>
              </div>

            <div className="middle"></div>
          </>
          )}
          {me && (
            <div className="bottom">
              <Signout />
            </div>
          )}
          {!me && (
            <div className="bottom">
              <Link href="/signup">
                <a>Sign In</a>
              </Link>
            </div>
          )}
      </SidebarStyles>
    )}
  </User>
);

export default Sidebar;
