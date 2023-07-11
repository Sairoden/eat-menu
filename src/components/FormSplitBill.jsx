import { useState } from "react";

import Button from "./Button";

const FormSplitBill = ({ name, image, balance }) => {
  const [bill, setBill] = useState("");
  const [paidByUser, setPaidByUser] = useState("");
  const paidByFriend = bill ? bill - paidByUser : "";
  const [whoIsPaying, setWhoIsPaying] = useState("user");

  return (
    <form className="form-split-bill">
      <h2>Split a bill with {name}</h2>

      <label>💰 Bill value</label>
      <input
        type="text"
        value={bill}
        onChange={e => setBill(+e.target.value)}
      />

      <label>🧑 Your expense</label>
      <input
        type="text"
        value={paidByUser}
        onChange={e =>
          setPaidByUser(
            +e.target.value > bill ? setPaidByUser : +e.target.value
          )
        }
      />

      <label>👨🏻‍🤝‍👨🏻 {name}'s expense</label>
      <input type="text" disabled value={paidByFriend} />

      <label>💲 Who is paying the bill?</label>
      <select
        value={whoIsPaying}
        onChange={e => setWhoIsPaying(e.target.value)}
      >
        <option value="user">You</option>
        <option value="friend">X</option>
      </select>

      <Button>Split Bill</Button>
    </form>
  );
};

export default FormSplitBill;
