import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import UsuariosLista from "./pages/UsuariosLista";
import UsuariosForm from "./pages/UsuarioForm";
import Home from "./pages/Home";
import AgendamentosForm from "./pages/AgendamentoForm";
import AgendamentosLista from "./pages/AgendamentosLista";

function App() {
  return (
    <BrowserRouter future={{v7_startTransition: true, v7_relativeSplatPath: true}}>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/usuarios-list" element={<UsuariosLista />} />
          <Route path="/usuarios-form" element={<UsuariosForm />} />
          <Route path="/usuarios-form/:id" element={<UsuariosForm />} />
          <Route path="/agendamentos-form" element={<AgendamentosForm />} />
          <Route path="/agendamentos-form/:id" element={<AgendamentosForm />} />
          <Route path="/agendamentos" element={<AgendamentosLista />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
