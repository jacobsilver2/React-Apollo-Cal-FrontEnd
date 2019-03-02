import React from 'react';
import Link from 'next/link';
import User from './User';
import Router from 'next/router';
import NProgress from 'nprogress';
import SidebarStyles from './styles/SideBarStyles';
import Signout from './Signout';
import Activity from './Activity/Activity';

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
                      <a>All Events</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/newCalEvent">
                      <a>Add Event</a>
                    </Link>
                  </li>
                </ul>
              </div>          
              <div className="acts">
                <ul>
                  <li>
                    <Link href="/acts">
                      <a>All Acts</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/newAct">
                      <a>Add Act</a>
                    </Link>
                  </li>
                </ul>
            </div>
              <div className="automations">
                <ul>
                  <li>
                    <Link href="/automations">
                      <a>Automations</a>
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="analytics">
                <ul>
                  <li>
                    <Link href="/analytics">
                      <a>Analytics</a>
                    </Link>
                  </li>
                </ul>
              </div>
            </div> {/* end of top */}
            <div className="middle">
              <Activity />
            </div>
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
