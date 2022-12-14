import css from "./friends.module.css"
import clsx from "clsx"




const Friends = (prop) => {



    return (
        <div>
            <ul className={css.friendList}>
                {prop.friendList.map((friend) => {
                    return (
                        <li key={friend.id} className={css.item}>
                            <p className={clsx(css.status, {
                                [css.statusOnline]: friend.isOnline === true,
                                [css.statusOffline]: friend.isOnline === false
                            })}></p>
                            <img alt="User avatar" width={48} height={50} src={friend.avatar} />
                            <p className={css.name}>{friend.name}</p>
                        </li>)
                })}
            </ul>
        </div>

    )

}




export default Friends