import { GlobalStyle } from './GlobalStyle';
import 'modern-normalize';

import { Layout } from './Layout.js'
import profiles from '../user.json'
import { ProfileList } from './ProfileList/ProfileList';

import statistics from '../data.json'
import {Statistic} from './Statistics/Statistics'

import friends from '../friends.json'
import { FriendList } from './FriendList/FriendList'

import transactions from '../transactions.json'
import {TransactionHistory} from './TransactionHistory/TransactionHistory'


export const App = () => {
  return (
    <Layout>
      < ProfileList profiles={profiles} />
      <Statistic stat={statistics} />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
      
      <GlobalStyle />
    </Layout>
  );
};