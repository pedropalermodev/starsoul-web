import './styles.scss'
import Box from "../../../components/Admin/Box"
import { useState } from 'react'

function AccessManagement() {

    const [searchTerm, setSearchTerm] = useState("");

    const data = [
        { id: 1, name: 'Pedro Henrique Silva Palermo', email: 'pedropalermo.dev@gmail.com' , profile: 'Administrador', status: 'Ativo', register: '13/04/2025 23h:29m'},
        { id: 2, name: 'Outro Usuário', email: 'outro@email.com' , profile: 'Usuário', status: 'Inativo', register: '10/04/2025 10h:00m'},
        { id: 3, name: 'Mais Um', email: 'maisum@email.com' , profile: 'Administrador', status: 'Ativo', register: '05/04/2025 15h:45m'},
    ];

    const filteredData = data.filter((user) =>
        user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        user.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
        user.profile.toLowerCase().includes(searchTerm.toLowerCase()) ||
        user.status.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const [currentView, setCurrentView] = useState('listAccess')

    const [lastView, setLastView] = useState(null);

        // Exemplo ao trocar de view
        const goToAddAccess = () => {
        setLastView(currentView);
        setCurrentView('addAccess');
        }

    return (
        <main className="accessmanagement">
            <Box className="accessmanagement__content">

                { currentView === 'listAccess' &&(
                    <>
                        <div className='page-indicator'>
                            <i class="bi bi-house-fill"/>
                            <span>/</span>
                            <span>Acessos</span>
                            <span>/</span>
                        </div>
                    
                        <div className='accessmanagement__management-bar'>
                            <input className='accessmanagement__management-bar--search' type="text" placeholder='Pesquisar...' value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)}/>
                            <button className='accessmanagement__management-bar--add-access accessmanagement__management-bar--button' onClick={() => setCurrentView('addAccess')}>
                                Adicionar novo acesso
                                <i class="bi bi-database-add"></i>
                            </button>
                            <button className='accessmanagement__management-bar--edit-access accessmanagement__management-bar--button' onClick={() => setCurrentView('editAllAccess')}>
                                <i class="bi bi-pencil-square"></i>
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
                                    const statusClassName = user.status === 'Ativo' ? 'status-ativo' : 'status-inativo';
                                    const profileClassName = user.profile === 'Administrador' ? 'profile-admin' : 'profile-user';
                                    return (
                                        <tr key={user.id} className='accessmanagement__table-tbody-tr'>
                                            <td className='accessmanagement__table-tbody-tr--td'><span className='id'>{user.id}</span></td>
                                            <td className='accessmanagement__table-tbody-tr--td'><span className='name'>{user.name}</span></td>
                                            <td className='accessmanagement__table-tbody-tr--td'><span className='email'>{user.email}</span></td>
                                            <td className='accessmanagement__table-tbody-tr--td'><span className={`profile ${profileClassName}`}>{user.profile}</span></td>
                                            <td className='accessmanagement__table-tbody-tr--td'><span className={`status ${statusClassName}`}>{user.status}</span></td>
                                            <td className='accessmanagement__table-tbody-tr--td'><span className='register'>{user.register}</span></td>
                                            <td className='accessmanagement__table-tbody-tr-td-actions'>
                                                <button className='accessmanagement__table-tbody-tr-td-actions--button'>
                                                    <i class="bi bi-pencil-square"></i>
                                                </button>
                                                <button className='accessmanagement__table-tbody-tr-td-actions--button'>
                                                    <i class="bi bi-trash-fill"></i>
                                                </button>
                                            </td>
                                        </tr>
                                    )
                                })}
                            </tbody>
                        </table>
                    </>
                )}

                { currentView === 'addAccess' && (
                    <>
                        <div className='page-indicator'>
                            <i class="bi bi-house-fill"/>
                            <span>/</span>
                            <span>Acessos</span>
                            <span>/</span>
                            <span>Cadastrar</span>
                        </div>
                        <button onClick={() => setCurrentView(lastView || 'listAccess')}>Voltar</button>
                    </>
                )}

                { currentView === 'editAllAccess' && (
                    <>
                        <div className='page-indicator'>
                            <i class="bi bi-house-fill"/>
                            <span>/</span>
                            <span>Acessos</span>
                            <span>/</span>
                            <span>Editar</span>
                        </div>
                        <button onClick={() => setCurrentView(lastView || 'listAccess')}>Voltar</button>
                    </>
                )}

            </Box>
        </main>
    )
}

export default AccessManagement