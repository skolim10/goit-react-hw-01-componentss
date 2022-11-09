import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'components/App';
import './index.css';

import user from './components/social-profile/user.json';
import data from './components/statistics/data.json';

import { Profile } from './components/social-profile/Profile';
import { Statistics } from './components/statistics/Statistics';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics title="Upload stats" stats={data} />;
      <Statistics stats={data} />;
    </App>
  </React.StrictMode>
);
