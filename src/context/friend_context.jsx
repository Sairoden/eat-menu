import { useContext, createContext, useState, useEffect } from "react";

const FriendContext = createContext();

import data from "../data";

const localStorageFriends = JSON.parse(localStorage.getItem("friends"));

export const FriendProvider = ({ children }) => {
  const [friends, setFriends] = useState(localStorageFriends || data);
  const [showAddFriend, setShowAddFriend] = useState(false);

  const value = { friends, setFriends, showAddFriend, setShowAddFriend };

  useEffect(() => {
    if (friends) localStorage.setItem("friends", JSON.stringify(friends));
  }, [friends]);

  return (
    <FriendContext.Provider value={value}>{children}</FriendContext.Provider>
  );
};

export const useFriendContext = () => useContext(FriendContext);
