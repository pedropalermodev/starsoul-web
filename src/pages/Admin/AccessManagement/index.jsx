import './styles.scss'
import Box from "../../../components/Admin/Box"
import { handleSubmit, handleUpdate, fetchUsers, handleDelete } from '../../../api/user.api'
import { useState, useEffect } from 'react'
import { toast } from 'react-toastify';
import axios from 'axios';


function AccessManagement() {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [searchTerm, setSearchTerm] = useState("");
    const [currentView, setCurrentView] = useState('listAccess')
    const [lastView, setLastView] = useState(null);
    const [isDeleteModalVisible, setIsDeleteModalVisible] = useState(false);
    const [userToDeleteId, setUserToDeleteId] = useState(null);
    const [userToDeleteHighlightId, setUserToDeleteHighlightId] = useState(null);


    // Adicionar novo acesso (Page)
    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [accountType, setAccountType] = useState('');
    const [nickname, setNickname] = useState('');
    const [birthDate, setBirthDate] = useState('');
    const [gender, setGender] = useState(null);


    useEffect(() => {
        const loadUsers = async () => {
            setLoading(true);
            setError(null);
            try {
                const data = await fetchUsers();
                setUsers(data);
            } catch (error) {
                console.error('Erro ao buscar usuários:', error);
                setError(error.message || 'Erro ao buscar usuários');
                toast.error('Erro ao buscar usuários');
            } finally {
                setLoading(false);
            }
        };

        loadUsers();
        const intervalId = setInterval(loadUsers, 5000);
        return () => clearInterval(intervalId);
    }, []);


    // Filtrar no botão de Pesquisa
    const filteredData = users?.filter((user) =>
        (user?.id.toString() || '').toLowerCase().includes(searchTerm.toLowerCase()) ||
        (user?.nome || '').toLowerCase().includes(searchTerm.toLowerCase()) ||
        (user?.email || '').toLowerCase().includes(searchTerm.toLowerCase()) ||
        (user?.tipoConta || '').toLowerCase().includes(searchTerm.toLowerCase()) ||
        (user?.status || '').toLowerCase().includes(searchTerm.toLowerCase())
    ) || [];


    const handleAddAccess = async (newUserData) => {
        try {
            const createdUser = await handleSubmit(newUserData);
            console.log('Acesso adicionado com sucesso: ', createdUser);
            toast.success('Acesso adicionado com sucesso!');
            fetchAccessData();
            setCurrentView('listAccess');
            setEmail('');
            setName('');
            setPassword('');
            setConfirmPassword('');
            setAccountType('');
            setNickname('');
            setBirthDate('');
            setGender('');
        } catch (err) {
            console.error('Erro ao adicionar acesso: ', err);
            setError(err.message || 'Erro ao adicionar acesso');
            toast.error('Erro ao adicionar novo acesso!');
        }
    }

    const handleSaveNewUser = async () => {
        if (!email || !name || password !== confirmPassword || !accountType) {
            toast.error('Por favor, preencha todos os campos obrigatórios e certifique-se de que as senhas coincidem.');
            return;
        } else if (password.length < 8) {
            toast.error('A senha deve ter pelo menos 8 caracteres.');
            return;
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
            toast.error('Por favor, insira um email com formato válido.');
            return;
        }

        const newUser = {
            nome: name,
            email: email,
            senha: password,
            tipoConta: accountType,
            codStatus: 'Ativo',
            dataCadastro: new Date().toISOString(),

            apelido: nickname || null,
            dataNascimento: birthDate || null,
            genero: gender || null,
        }

        await handleAddAccess(newUser);

    }

    const handleUpdateAccess = async (userId, updatedUserData) => {
        try {
            const updatedUser = await handleUpdate(userId, updatedUserData);
            console.log('Acesso atualizado com sucesso: ', updatedUser);
            toast.success('Acesso atualizado com sucesso!');
            fetchAccessData();
            setCurrentView('listAccess');
        } catch (err) {
            setError(err.message || 'Erro ao atualizar acesso');
            toast.error('Erro ao atualizar acesso!');
        }
    }

    const handleDeleteAccess = async (userId) => {
        if (window.confirm('Tem certeza que deseja deletar este acesso?')) {
            try {
                await handleDelete(userId);
                console.log('Acesso deletado com sucesso: ', userId);
                toast.success('Acesso deletado com sucesso!');
                fetchAccessData();
            } catch (err) {
                setError(err.message || 'Erro ao deletar acesso');
                toast.error('Erro ao deletar acesso!');
            }
        }
    }

    const goToAddAccess = () => {
        setLastView(currentView);
        setCurrentView('addAccess');
    }

    const pagePaths = {
        listAccess: ["Acessos"],
        addAccess: ["Acessos", "Cadastrar"],
        editAllAccess: ["Acessos", "Editar"],
        editAccess: ["Acessos", "Editar", "Usuário"],
        deleteAccess: ["Acessos", "Deletar", "Usuário"]
    };

    const currentPath = pagePaths[currentView] || ["Acessos"];

    // Confimarção de exclusão
    const showDeleteConfirmationModal = (id) => {
        setUserToDeleteId(id);
        setUserToDeleteHighlightId(id);
        setIsDeleteModalVisible(true);
    };

    const confirmDeleteAccess = async () => {
        if (userToDeleteId) {
            await handleDeleteAccess(userToDeleteId);
            setIsDeleteModalVisible(false);
            setUserToDeleteId(null);
            setUserToDeleteHighlightId(null)
        }
    };

    const cancelDeleteAccess = () => {
        setIsDeleteModalVisible(false);
        setUserToDeleteId(null);
        setUserToDeleteHighlightId(null);
    };


    return (
        <main className="accessmanagement">

            <div className="page-indicator">
                <i className="bi bi-house-fill" />
                {currentPath.map((step, idx) => (
                    <span key={idx}>
                        <span> / </span>
                        <span>{step}</span>
                    </span>
                ))}
            </div>


            {currentView === 'listAccess' && (
                <>
                    <Box className="accessmanagement__content">
                        <div className='accessmanagement__management-bar'>
                            <input className='accessmanagement__management-bar--search' type="text" placeholder='Pesquisar...' value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} />
                            <button className='accessmanagement__management-bar--add-access accessmanagement__management-bar--button' onClick={() => setCurrentView('addAccess')}>
                                Adicionar novo acesso
                                <i className="bi bi-database-add"></i>
                            </button>
                            <button className='accessmanagement__management-bar--edit-access accessmanagement__management-bar--button' onClick={() => setCurrentView('editAllAccess')}>
                                <i className="bi bi-pencil-square"></i>
                            </button>
                        </div>

                        <table className='accessmanagement__table'>
                            <thead className='accessmanagement__table-thead'>
                                <tr>
                                    <th className='accessmanagement__table-thead--th'>ID</th>
                                    <th className='accessmanagement__table-thead--th'>Nome</th>
                                    <th className='accessmanagement__table-thead--th'>E-mail</th>
                                    <th className='accessmanagement__table-thead--th'>Perfil</th>
                                    <th className='accessmanagement__table-thead--th'>Status</th>
                                    <th className='accessmanagement__table-thead--th'>Cadastro</th>
                                    <th className='accessmanagement__table-thead--th'>Ações</th>
                                </tr>
                            </thead>

                            <tbody className='accessmanagement__table-tbody'>
                                {filteredData.map(user => {
                                    const statusClassName = user.codStatus === 'Ativo' ? 'status-ativo' : 'status-inativo';
                                    const profileClassName = user.tipoConta === 'Administrador' ? 'profile-admin' : 'profile-user';
                                    return (
                                        <tr key={user.id} className={`accessmanagement__table-tbody-tr ${user.id === userToDeleteHighlightId ? 'highlight-delete' : ''}`}>
                                            <td className='accessmanagement__table-tbody-tr--td'><span className='id'>{user.id}</span></td>
                                            <td className='accessmanagement__table-tbody-tr--td'><span className='name'>{user.nome}</span></td>
                                            <td className='accessmanagement__table-tbody-tr--td'><span className='email'>{user.email}</span></td>
                                            <td className='accessmanagement__table-tbody-tr--td'><span className={`profile ${profileClassName}`}>{user.tipoConta}</span></td>
                                            <td className='accessmanagement__table-tbody-tr--td'><span className={`status ${statusClassName}`}>{user.codStatus}</span></td>
                                            <td className='accessmanagement__table-tbody-tr--td'><span className='register'>{user.dataCadastro}</span></td>
                                            <td className='accessmanagement__table-tbody-tr-td-actions'>
                                                <button className='accessmanagement__table-tbody-tr-td-actions--button' onClick={() => setCurrentView('editAccess')}>
                                                    <i className="bi bi-pencil-square"></i>
                                                </button>
                                                <button className='accessmanagement__table-tbody-tr-td-actions--button' onClick={() => showDeleteConfirmationModal(user.id)}>
                                                    <i className="bi bi-trash-fill"></i>
                                                </button>
                                            </td>
                                        </tr>
                                    )
                                })}
                                {!loading && filteredData.length === 0 && (
                                    <tr>
                                        <td colSpan="7" style={{ padding: '20px', textAlign: 'center' }}>
                                            Nenhum dado foi encontrado!
                                        </td>
                                    </tr>
                                )}

                            </tbody>
                        </table>
                    </Box>
                </>
            )}

            {currentView === 'addAccess' && (
                <>
                    <Box className="accessmanagement__content">
                        <div className='add-access__container'>
                            <button className='add-access__button-back' onClick={() => setCurrentView(lastView || 'listAccess')}><i className="bi bi-arrow-left"></i></button>
                            <div className='add-access__box'>
                                <form className='add-access__box-form' action="">

                                    {console.log('Renderizando addAccessRequired')}
                                    <div className='add-access__form-container'>

                                        <div className="add-access__box-form-input-group">
                                            <label className="add-access__box-form-input-group--label">Email <span style={{ color: '#be020f' }}>*</span></label>
                                            <input
                                                className="add-access__box-form-input-group--input"
                                                type="text"
                                                value={email}
                                                onChange={(e) => setEmail(e.target.value)}
                                            />
                                        </div>

                                        <div className="add-access__box-form-input-group">
                                            <label className="add-access__box-form-input-group--label">Nome <span style={{ color: '#be020f' }}>*</span></label>
                                            <input
                                                className="add-access__box-form-input-group--input"
                                                type="text"
                                                value={name}
                                                onChange={(e) => setName(e.target.value)}
                                            />
                                        </div>

                                        <div className="add-access__box-form-input-div">
                                            <label className="add-access__box-form-input-group--label">Selecione qual será o tipo: <span style={{ color: '#be020f' }}>*</span></label>
                                            <section name="tipoConta" className='add-access__box-form-input-group-section'>
                                                <label className='add-access__box-form-input-group-section--item'>
                                                    <input
                                                        type='radio'
                                                        name="tipoConta"
                                                        value='Administrador'
                                                        checked={accountType === 'Administrador'}
                                                        onChange={(e) => setAccountType(e.target.value)}
                                                    />
                                                    Administrador
                                                </label>

                                                <label className='add-access__box-form-input-group-section--item'>
                                                    <input
                                                        type='radio'
                                                        name="tipoConta"
                                                        value='Usuário'
                                                        checked={accountType === 'Usuário'}
                                                        onChange={(e) => setAccountType(e.target.value)}
                                                    />
                                                    Usuário
                                                </label>
                                            </section>
                                        </div>

                                        <div className="add-access__box-form-input-group">
                                            <label className="add-access__box-form-input-group--label">Defina uma senha <span style={{ color: '#be020f' }}>*</span></label>
                                            <input
                                                className="add-access__box-form-input-group--input"
                                                type="text"
                                                value={password}
                                                onChange={(e) => setPassword(e.target.value)}
                                            />
                                        </div>

                                        <div className="add-access__box-form-input-group">
                                            <label className="add-access__box-form-input-group--label">Repitir a senha <span style={{ color: '#be020f' }}>*</span></label>
                                            <input
                                                className="add-access__box-form-input-group--input"
                                                type="text"
                                                value={confirmPassword}
                                                onChange={(e) => setConfirmPassword(e.target.value)}
                                            />
                                        </div>
                                    </div>


                                    <div className='add-access__form-container'>
                                        <div className="add-access__box-form-input-group">
                                            <label className="add-access__box-form-input-group--label">Apelido <span>(Opcional)</span></label>
                                            <input
                                                className="add-access__box-form-input-group--input"
                                                type="text"
                                                value={nickname}
                                                onChange={(e) => setNickname(e.target.value)}
                                            />
                                        </div>

                                        <div className="add-access__box-form-input-group">
                                            <label className="add-access__box-form-input-group--label">Data de Nascimento <span>(Opcional)</span></label>
                                            <input
                                                className="add-access__box-form-input-group--input"
                                                type="date"
                                                value={birthDate}
                                                onChange={(e) => setBirthDate(e.target.value)}
                                            />
                                        </div>

                                        <div className="add-access__box-form-input-group">
                                            <label className="add-access__box-form-input-group--label">Gênero <span>(Opcional)</span></label>
                                            <select
                                                name="genero"
                                                className="add-access__box-form-input-group--input"
                                                value={gender}
                                                onChange={(e) => setGender(e.target.value)}
                                            >
                                                <option value="">Selecione o gênero</option>
                                                <option value="Masculino">Masculino</option>
                                                <option value="Feminino">Feminino</option>
                                                <option value="Não-binário">Não-binário</option>
                                                <option value="Outro">Outro</option>
                                            </select>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </Box>
                    <div className='add-access__actions'>
                        <button className='add-access__actions--button' onClick={() => setCurrentView(lastView || 'listAccess')}>CANCELAR</button>
                        <button className='add-access__actions--button' onClick={handleSaveNewUser}><i className="bi bi-floppy2-fill"></i>SALVAR</button>
                    </div>
                </>
            )}

            {currentView === 'editAllAccess' && (
                <>
                    <button onClick={() => setCurrentView(lastView || 'listAccess')}>Voltar</button>
                </>
            )}

            {currentView === 'editAccess' && (
                <>
                    <button onClick={() => setCurrentView(lastView || 'listAccess')}>Voltar</button>
                </>
            )}


            {isDeleteModalVisible && (
                <div className="modal-overlay">
                    <div className="modal-content">
                        <h3>Confirmar Exclusão</h3>
                        <p>Tem certeza que deseja deletar o acesso com ID: {userToDeleteId}?</p>
                        <div className="modal-actions">
                            <button onClick={confirmDeleteAccess}>Sim, Deletar</button>
                            <button onClick={cancelDeleteAccess}>Cancelar</button>
                        </div>
                    </div>
                </div>
            )}
        </main>
    )
}

export default AccessManagement