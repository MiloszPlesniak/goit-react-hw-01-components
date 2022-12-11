import Profile from "components/profile/Profile"
import user from "components/profile/user.json"






const App = () => (
    <>
        <Profile
            username={user.username}
            tag={user.tag}
            location={user.location}
            avatar={user.avatar}
            stats={user.stats}>

        </Profile>


    </>
)
export default App