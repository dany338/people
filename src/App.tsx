import { lazy, Suspense } from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navigation from "./components/Navigation";
import ProtectedRoute from "./components/ProtectedRoute";
import useLogin from './hooks/useLogin';
const Login = lazy(() => import('./views/Login'));
const People = lazy(() => import('./views/People'));
const Home = lazy(() => import('./views/Home'));

const App = () => {
  const { user, data, authLogin, onChangeInput, logout } = useLogin();
  return (
    <Suspense fallback={<span>Loading...</span>}>
      <BrowserRouter>
        <Navigation user={user} logout={logout} />
        <Routes>
          <Route
            path="/"
            element={
              <ProtectedRoute
                redirectTo="/dashboard"
                isAllowed={!user} // simulando que es un usuario con privilegios de administrador
              >
                <Login {...data} authLogin={authLogin} onChangeInput={onChangeInput} />
              </ProtectedRoute>
            }
          />
          <Route
            path="/dashboard"
            element={
              <ProtectedRoute
                redirectTo="/"
                isAllowed={!!user && user.roles.includes("ROLE_PACIENTE")} // simulando que es un usuario con privilegios de administrador
              >
                <People />
              </ProtectedRoute>
            }
          />
          <Route
            path="/home"
            element={
              <ProtectedRoute
                redirectTo="/"
                isAllowed={!!user && user.roles.includes("ROLE_PACIENTE")} // simulando que es un usuario con privilegios de administrador
              >
                <Home />
              </ProtectedRoute>
            }
          />
        </Routes>
      </BrowserRouter>
    </Suspense>
  );
}

export default App;
