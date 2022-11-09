import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'components/App';
import './index.css';

import user from './components/social-profile/user.json';
<<<<<<< HEAD
import data from './components/statistics/data.json';

import { Profile } from './components/social-profile/Profile';
import { Statistics } from './components/statistics/Statistics';
<<<<<<< HEAD
import { FriendList } from './components/friend-list/FriendList';
import { TransactionHistory } from './components/transaction-history/TransactionHistory';
=======

import { Profile } from './components/social-profile/Profile';
>>>>>>> parent of 9272c35 (update)
=======
>>>>>>> parent of 8a0fea7 (fourCase)

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
<<<<<<< HEAD
<<<<<<< HEAD
      <Statistics title="Upload stats" stats={data} />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
=======
>>>>>>> parent of 9272c35 (update)
=======
      <Statistics title="Upload stats" stats={data} />;
      <Statistics stats={data} />;
>>>>>>> parent of 8a0fea7 (fourCase)
    </App>
  </React.StrictMode>
);
