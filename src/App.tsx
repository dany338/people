import { lazy, Suspense } from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navigation from "./components/Navigation";
import ProtectedRoute from "./components/ProtectedRoute";
import useLogin from './hooks/useLogin';
const Login = lazy(() => import('./views/Login'));
const People = lazy(() => import('./views/People'));

const App = () => {
  const { user, data, authLogin, onChangeInput, logout } = useLogin();
  return (
    <Suspense fallback={<span>Loading...</span>}>
      <BrowserRouter>
        <Navigation user={user} logout={logout} />
        <Routes>
          <Route index element={<Login {...data} authLogin={authLogin} onChangeInput={onChangeInput} />} />
          <Route
            path="/dashboard"
            element={
              <ProtectedRoute
                redirectTo="/dashboard"
                isAllowed={!!user && user.roles.includes("ROLE_PACIENTE")} // simulando que es un usuario con privilegios de administrador
              >
                <People />
              </ProtectedRoute>
            }
          />
        </Routes>
      </BrowserRouter>
    </Suspense>
  );
}

export default App;
