import css from './Friends.module.css';

import PropTypes from 'prop-types';
import FriendListItem from 'Components/FriendListItem/FriendListItem';
const Friends = props => {
  return (
    <div>
      <ul className={css.friendList}>
        {props.friendList.map(({ avatar, name, isOnline, id }) => {
          return (
            <FriendListItem
              key={id}
              isOnline={isOnline}
              avatar={avatar}
              name={name}
            />
          );
        })}
      </ul>
    </div>
  );
};
Friends.propType = {
  friendList: PropTypes.arrayOf({}),
};
export default Friends;
