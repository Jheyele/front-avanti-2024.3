import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Layout from "./components/Layout";
import UsuariosLista from "./pages/UsuariosLista";
import UsuariosForm from "./pages/UsuarioForm";
import Home from "./pages/Home";
import AgendamentosForm from "./pages/AgendamentoForm";
import AgendamentosLista from "./pages/AgendamentosLista";
import Login from "./pages/Login";
import { useContext } from "react";
import { AuthContext } from "./contexts/AuthContext";

const AuthRota = ({component: Component}) => {
    const { usuarioId } = useContext(AuthContext);
    return usuarioId ? <Component /> : <Navigate to="/login"/>
}

const AuthRotaAdmin = ({component: Component}) => {
  const { perfil } = useContext(AuthContext);
  return perfil == 'ADMIN' ? <Component /> : <Navigate to="/login"/>
}


function App() {
  return (
    <BrowserRouter future={{v7_startTransition: true, v7_relativeSplatPath: true}}>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/usuarios-list" element={<AuthRota component={UsuariosLista} />} />
          <Route path="/usuarios-form" element={<AuthRota component={UsuariosForm} />} />
          <Route path="/usuarios-form/:id" element={<AuthRota component={UsuariosForm} />} />
          <Route path="/agendamentos-form" element={<AuthRota component={AgendamentosForm} />} />
          <Route path="/agendamentos-form/:id" element={<AgendamentosForm />} />
          <Route path="/agendamentos" element={<AgendamentosLista />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
