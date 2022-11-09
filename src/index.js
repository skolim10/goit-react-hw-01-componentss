import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'components/App';
import './index.css';

import user from './components/social-profile/user.json';
import data from './components/statistics/data.json';
import friends from './components/friend-list/friends.json';
import transactions from './components/transaction-history/transactions.json';

import { Profile } from './components/social-profile/Profile';
import { Statistics } from './components/statistics/Statistics';
import { FriendList } from './components/friend-list/FriendList';
import { TransactionHistory } from './components/transaction-history/TransactionHistory';

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
      <Statistics title="Upload stats" stats={data} />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
    </App>
  </React.StrictMode>
);
