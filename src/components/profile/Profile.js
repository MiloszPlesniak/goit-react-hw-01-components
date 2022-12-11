import css from "./Profile.module.css"


const Profile = (prop) => {
    const { username, tag, location, avatar, stats: { followers, views, likes } } = prop
    
    const { profile, description, avatar: avatarClass, name, tag: tagClass,stats, location: locationClass, label, quantity } = css
    return (
        <div className={profile}>
            <div className={description}>
                <img
                    src={avatar}
                    alt="User avatar"
                    className={avatarClass}
                />
                <p className={name}>{username}</p>
                <p className={tagClass}>@{tag}</p>
                <p className={locationClass}>{location}</p>
            </div>

            <ul className={stats}>
                <li>
                    <p className={label}>Followers</p>
                    <p className={quantity}>{followers}</p>
                </li>
                <li>
                    <p className={label}>Views</p>
                    <p className={quantity}>{views}</p>
                </li>
                <li>
                    <p className={label}>Likes</p>
                    <p className={quantity}>{likes}</p>
                </li>
            </ul>
        </div>


    )
}
export default Profile