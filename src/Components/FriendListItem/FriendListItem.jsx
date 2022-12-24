import clsx from 'clsx';
import css from './FriendListItem.module.css';
import PropTypes from 'prop-types';
console.log(css);
const FriendListItem = ({avatar,isOnline,name}) => (
  <li className={css.item}>
    <p
      className={clsx(css.status, {
        [css.statusOnline]: isOnline === true,
        [css.statusOffline]: isOnline === false,
      })}
    ></p>
    <img alt="User avatar" width={48} height={50} src={avatar} />
    <p className={css.name}>{name}</p>
  </li>
);
FriendListItem.propType = {
    avatar: PropTypes.string,
    name: PropTypes.string,
    isOnline:PropTypes.bool
}
export default FriendListItem
