import { useContext, createContext, useState } from "react";

const FriendContext = createContext();

import data from "../data";

export const FriendProvider = ({ children }) => {
  const [friends, setFriends] = useState(data);
  const [showAddFriend, setShowAddFriend] = useState(false);

  const value = { friends, setFriends, showAddFriend, setShowAddFriend };

  return (
    <FriendContext.Provider value={value}>{children}</FriendContext.Provider>
  );
};

export const useFriendContext = () => useContext(FriendContext);
