import Profile from 'Components/Profile/Profile';
import Statistics from 'Components/Statistics/Statistics';
import user from 'Components/data/user.json';
import stat from 'Components/data/data.json';
import friends from 'Components/data/friends.json';
import Friends from 'Components/Friends/Friends';
import transactions from 'Components/data/transactions.json';
import TransactionHistory from 'Components/TransactionHistory/TransactionHistory';

const App = () => (
  <>
    <Profile
      username={user.username}
      tag={user.tag}
      location={user.location}
      avatar={user.avatar}
      stats={user.stats}
    ></Profile>
    <Statistics title="Upload stats" stats={stat} />
    <Friends friendList={friends} />
    <TransactionHistory items={transactions} />;
  </>
);
export default App;
