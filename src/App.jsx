import { useState } from "react";
import { useFriendContext } from "./context/friend_context";

// Components
import FriendList from "./components/FriendList";
import FormAddFriend from "./components/FormAddFriend";
import Button from "./components/Button";
import FormSplitBill from "./components/FormSplitBill";

function App() {
  const { showAddFriend, setShowAddFriend } = useFriendContext();
  const [selectedFriend, setSelectedFriend] = useState(null);

  const handleShowAddFriend = () => setShowAddFriend(!showAddFriend);

  const handleSelection = friend =>
    setSelectedFriend(currentSelected =>
      currentSelected?.id === friend.id ? null : friend
    );

  return (
    <div className="app">
      <div className="sidebar">
        <FriendList
          selectedFriend={selectedFriend}
          handleSelection={handleSelection}
        />
        {showAddFriend && <FormAddFriend />}
        <Button onClick={handleShowAddFriend}>
          {showAddFriend ? "Close" : "Add  friend"}
        </Button>
      </div>
      {selectedFriend && <FormSplitBill {...selectedFriend} />}
    </div>
  );
}

export default App;

// 9 ka na
