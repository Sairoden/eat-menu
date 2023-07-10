import Button from "./Button";

const FormAddFriend = () => {
  return (
    <form className="form-add-friend">
      <label>👨🏿‍🤝‍👨🏿 Friend name</label>
      <input type="text" />

      <label>Image URL</label>
      <input type="text" />

      <Button>Enter</Button>
    </form>
  );
};

export default FormAddFriend;
