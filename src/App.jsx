import { useFriendContext } from "./context/friend_context";

// Components
import FriendList from "./components/FriendList";
import FormAddFriend from "./components/FormAddFriend";
import Button from "./components/Button";
import FormSplitBill from "./components/FormSplitBill";

function App() {
  const { showAddFriend, setShowAddFriend } = useFriendContext();

  const handleShowAddFriend = () => setShowAddFriend(!showAddFriend);

  return (
    <div className="app">
      <div className="sidebar">
        <FriendList />
        {showAddFriend && <FormAddFriend />}
        <Button onClick={handleShowAddFriend}>
          {showAddFriend ? "Close" : "Add  friend"}
        </Button>
      </div>
      <FormSplitBill />
    </div>
  );
}

export default App;

//5 ka na
