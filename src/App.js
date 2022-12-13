import Profile from "components/profile/Profile"
import Statistics from "components/statistics/Statistics"
import user from "components/profile/user.json"
import stat from "components/statistics/data.json"
import friends from "components/friends/friends.json"
import Friends from "components/friends/Friends"






const App = () => (
    <>
        <Profile
            username={user.username}
            tag={user.tag}
            location={user.location}
            avatar={user.avatar}
            stats={user.stats}>

        </Profile>
        <Statistics title="Upload stats" stats={stat} />
        <Friends friendList={friends} />

    </>
)
export default App