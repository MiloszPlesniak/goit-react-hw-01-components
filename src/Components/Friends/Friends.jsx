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
Friends.propTypes = {
  friendList: PropTypes.arrayOf(
    PropTypes.shape({
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
      id: PropTypes.number.isRequired,
    })
  ),
};
export default Friends;
