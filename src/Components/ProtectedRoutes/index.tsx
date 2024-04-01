import { Navigate, Outlet } from "react-router-dom"
import { UserContext } from "../../Providers/UserProvider/UserProvider"
import { useContext } from "react";

export const ProtectedAdminRoutes = () => {
    const { protectedRouter } = useContext(UserContext);

    return protectedRouter ? <Outlet/> : <Navigate to="/" />
}