import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { BrowserRouter } from "react-router-dom";
import { UserProvider } from "./Providers/UserProvider/UserProvider.tsx";
import { TasksProvider } from "./Providers/TaskProvider/TaskProvider.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <UserProvider>
        <TasksProvider>
          <App />
        </TasksProvider>
      </UserProvider>
    </BrowserRouter>
  </React.StrictMode>
);
