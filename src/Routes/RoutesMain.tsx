import { Route, Routes } from "react-router-dom";
import { HomePage } from "../Pages/home";
import { LoginPage } from "../Pages/Login";
import { RegisterPage } from "../Pages/Register";
import { NotFoundErrorPage } from "../Pages/404Page";
import { TaskListPage } from "../Pages/TaskList";
import { ProtectedAdminRoutes } from "../Components/ProtectedRoutes";
import { UnauthorizedErrorPage } from "../Pages/401Page";

export const RoutesMain = () => {
  return (
    <Routes>
      <Route path="" element={<HomePage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />
      <Route path="/error404" element={<NotFoundErrorPage />} />
      <Route path="/error401" element={<UnauthorizedErrorPage />} />

      <Route path="/task" element={<ProtectedAdminRoutes />}>
        <Route index element={<TaskListPage />} />
      </Route>
      
      <Route path="/*" element={<NotFoundErrorPage />} />
    </Routes>
  );
};
