import Profile from 'Components/Profile/Profile';
import Statistics from 'Components/Statistics/Statistics';
import user from 'data/user.json';
import stat from 'data/data.json';
import friends from 'data/friends.json';
import Friends from 'Components/Friends/Friends';
import transactions from 'data/transactions.json';
import TransactionHistory from 'Components/TransactionHistory/TransactionHistory';

const App = () => (
  <>
    <Profile
      username={user.username}
      tag={user.tag}
      location={user.location}
      avatar={user.avatar}
      stats={user.stats}
    />
    <Statistics title="Upload stats" stats={stat} />
    <Friends friendList={friends} />
    <TransactionHistory transactionData={transactions} />;
  </>
);
export default App;
