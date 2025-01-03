import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { UserProvider } from "./context/UserContext"; // Adjust the path if necessary

ReactDOM.render(
    <UserProvider>
        <App />
    </UserProvider>,
    document.getElementById("root")
);