import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.scss";

import { FriendProvider } from "./context/friend_context";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <FriendProvider>
      <App />
    </FriendProvider>
  </React.StrictMode>
);
