import { useFriendContext } from "../context/friend_context";

import Friend from "./Friend";

const FriendList = ({ handleSelection, selectedFriend }) => {
  const { friends } = useFriendContext();

  return (
    <ul>
      {friends.map(friend => (
        <Friend
          key={friend.id}
          {...friend}
          handleSelection={handleSelection}
          selectedFriend={selectedFriend}
        />
      ))}
    </ul>
  );
};

export default FriendList;
