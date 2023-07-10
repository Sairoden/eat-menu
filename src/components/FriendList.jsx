import { useFriendContext } from "../context/friend_context";

import Friend from "./Friend";

const FriendList = () => {
  const { friends } = useFriendContext();

  return (
    <ul>
      {friends.map(friend => (
        <Friend key={friend.id} {...friend} />
      ))}
    </ul>
  );
};

export default FriendList;
