import { useAuth } from "../hooks/auth";

import { BrowserRouter } from "react-router-dom";
import { AppRoutes } from './app.routes';
import { AuthRoutes } from './auth.routes';
import { AdminRoutes } from './admin.routes'

export function Routes() {
  const { user, admin } = useAuth();

  return (
    <BrowserRouter>
      { admin ? <AdminRoutes /> : user ? <AppRoutes /> : <AuthRoutes />}
    </BrowserRouter>
  )
}
