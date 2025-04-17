import axios from "axios";


// POST
export const handleSubmit = async (newUser) => {
    try {
        console.log('Dados para cirar usuário: ', newUser);
        const response = await axios.post('http://localhost:8080/api/users', newUser);
        console.log('Usuário criado com sucesso: ', response.data);
        return response.data;
    } catch (error) {
        console.error('Erro ao criar usuário: ', error)
        throw error;
    }
};

// PUT
export const handleUpdate = async (userId, updatedUserData) => {
    try {
        const response = await axios.put(`http://localhost:8080/api/users/${userId}`, updatedUserData);
        console.log(`Usuário com ID ${userId} atualizado com sucesso: `, response.data)
    } catch (error) {
        console.error(`Erro ao atualizar usuário com ID ${userId}: `, error)
    }
};

// FindAll
export const fetchUsers = async () => {
    try {
        console.log('Tentando buscar usuários...');
        const response = await axios.get('http://localhost:8080/api/users/findAll');
        console.log('Lista de Usuários: ', response.data);
        return response.data;
    } catch (error) {
        console.error('Erro ao buscar usuários: ', error);
        throw error;
    }
}

// FindById
export const fetchUserById = async (userId) => {
    try {
        const response = await axios.get(`http://localhost:8080/api/users/${userId}`);
        console.log(`Usuário com ID ${userId}: `, response.data);
        setSelectedUser(response.data);
    } catch (error) {
        console.error(`Erro ao buscar usuário com ID ${userId}: `, error);
    }
}

// Delete
export const handleDelete = async (userId) => {
    try {
        const response = await axios.delete(`http://localhost:8080/api/users/${userId}`);
        console.log(`Usuário com ID ${userId} deletado com sucesso: `, response.data);
        fetchUsers();
    } catch (error) {
        console.error(`Erro ao deletar usuário com ID ${userId}: `, error);
    }
};