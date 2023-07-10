import { useState } from "react";

import { useFriendContext } from "../context/friend_context";

import Button from "./Button";

// import { useFriendContext } from "../context/friend_context";

const FormAddFriend = () => {
  const [name, setName] = useState("");
  const [image, setImage] = useState("https://i.pravatar.cc/48");

  const { setFriends, setShowAddFriend } = useFriendContext();

  const handleSubmit = e => {
    e.preventDefault();

    if (!name || !image) return;

    const id = crypto.randomUUID();

    const newFriend = {
      name,
      image: `${image}?u=${id}`,
      balance: 0,
      id,
    };

    setFriends(prevFriends => [...prevFriends, newFriend]);

    setName("");
    setImage("https://i.pravatar.cc/48");
    setShowAddFriend(false);
  };

  return (
    <form className="form-add-friend" onSubmit={handleSubmit}>
      <label>👨🏻‍🤝‍👨🏻 Friend name</label>
      <input type="text" value={name} onChange={e => setName(e.target.value)} />

      <label>📷 Image URL</label>
      <input
        type="text"
        value={image}
        onChange={e => setImage(e.target.value)}
      />

      <Button>Enter</Button>
    </form>
  );
};

export default FormAddFriend;
