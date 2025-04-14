import './styles.scss'
import Box from "../../../components/Admin/Box"
import Button from '../../../components/User/Button'

function AccessManagement() {

    const data = [
        { id: 1, name: 'Pedro Henrique Silva Palermo', email: 'pedropalermo.dev@gmail.com' , profile: 'Administrador', status: 'Ativo', register: '13/04/2025 23h:29m'},
        { id: 2, name: 'Outro Usuário', email: 'outro@email.com' , profile: 'Usuário', status: 'Inativo', register: '10/04/2025 10h:00m'},
        { id: 3, name: 'Mais Um', email: 'maisum@email.com' , profile: 'Administrador', status: 'Ativo', register: '05/04/2025 15h:45m'},
    ];

    return (
        <main className="accessmanagement">
            <Box className="accessmanagement__content">

                <table className='accessmanagement__table'>
                    <thead className='accessmanagement__table-thead'>
                        <th className='accessmanagement__table-thead--th'>ID</th>
                        <th className='accessmanagement__table-thead--th'>Nome</th>
                        <th className='accessmanagement__table-thead--th'>E-mail</th>
                        <th className='accessmanagement__table-thead--th'>Perfil</th>
                        <th className='accessmanagement__table-thead--th'>Status</th>
                        <th className='accessmanagement__table-thead--th'>Cadastro</th>
                        <th className='accessmanagement__table-thead--th'>Ações</th>
                    </thead>

                    <tbody className='accessmanagement__table-tbody'>
                        {data.map(user => {
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

            </Box>
        </main>
    )
}

export default AccessManagement