import { useEffect, useState } from "react";
import { buscarUsuarios, deleteUsuario } from "../services/ApiService";
import { useNavigate } from "react-router-dom";
import { Modal } from "react-bootstrap";

function UsuariosLista() {
  const [usuarios, setUsuarios] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [userToDelete, setUserToDelete] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const listarUsuarios = async () => {
      const { data } = await buscarUsuarios();
      setUsuarios(data);
    };
    listarUsuarios();
  }, []);

  const deleteUser = async () => {
    if (userToDelete) {
      await deleteUsuario(userToDelete);
      setUsuarios((u) => u.filter((user) => user.id !== userToDelete));
      setShowModal(false);
    }
  };

  const handleDeleteClick = (id) => {
    setUserToDelete(id);
    setShowModal(true);
  };

  return (
    <div className="container py-5">
      <h2 className="mb-5 text-center text-primary font-weight-bold">Lista de Usuários</h2>
      <div className="row row-cols-1 row-cols-md-3 g-4">
        {usuarios.map((usuario) => (
          <div key={usuario.id} className="col">
            <div className="card shadow-lg border-0 rounded-3 overflow-hidden h-100">
              <div className="card-img-top d-flex justify-content-center">
                <img
                  src="https://png.pngtree.com/png-clipart/20210915/ourlarge/pngtree-user-avatar-placeholder-black-png-image_3918427.jpg"
                  alt={usuario.nome}
                  className="rounded-circle mt-3"
                  style={{ width: "100px", height: "100px", objectFit: "cover" }}
                />
              </div>

              <div className="card-body">
                <h5 className="card-title text-center text-dark">{usuario.nome}</h5>
                <p className="card-text text-muted text-center">
                  <strong>Email:</strong> {usuario.email} <br />
                  <strong>Perfil:</strong> {usuario.perfil}
                </p>
              </div>

              <div className="card-footer d-flex justify-content-around align-items-center bg-light border-top-0">
                <button
                  className="btn btn-primary btn-sm rounded-pill"
                  onClick={() => navigate(`/usuarios-form/${usuario.id}`)}
                >
                  <i className="bi bi-pencil-square"></i> Editar
                </button>
                <button
                  className="btn btn-danger btn-sm rounded-pill"
                  onClick={() => handleDeleteClick(usuario.id)}
                >
                  <i className="bi bi-trash"></i> Excluir
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      <Modal show={showModal} onHide={() => setShowModal(false)} centered>
        <Modal.Header closeButton>
          <Modal.Title>Confirmar Exclusão</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Você tem certeza de que deseja excluir usuário?
        </Modal.Body>
        <Modal.Footer>
          <button className="btn btn-secondary" onClick={() => setShowModal(false)}>
            Cancelar
          </button>
          <button className="btn btn-danger" onClick={deleteUser}>
            Confirmar Exclusão
          </button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default UsuariosLista;
