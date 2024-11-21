import axios from "axios";

const api = axios.create({
    baseURL: import.meta.env.VITE_API_URL,
    headers: {
        'Content-Type': 'application/json',
    },
})

export const buscarUsuarios = () => api.get('/usuarios');export const deletarUsuario = (id) => api.delete(`/usuarios/${id}`)
export const buscarUsuarioPorId = (id) => api.get(`/usuarios/${id}`)
export const salvarUsuario = (usuario) => api.post(`/usuarios`, usuario)
export const deleteUsuario = (id) => api.delete(`/usuarios/${id}`)
export const editarUsuario = (usuario, id) => api.put(`/usuarios/${id}`, usuario)

export const buscarAgendamentos = () => api.get('/agendamentos');
export const buscarAgendamentoPorId = (id) => api.get(`/agendamentos/${id}`)
export const salvarAgendamento = (agendamento) => api.post(`/agendamentos`, agendamento)
export const editarAgendamento = (agendamento, id) => api.put(`/agendamentos/${id}`, agendamento)
export const excluirAgendamento = (id) => api.delete(`/agendamentos/${id}`)
