import React, { Component } from 'react'
import { MDBTable, MDBTableBody, MDBTableHead, MDBIcon, MDBBtn } from 'mdbreact'
import { User, UserInput } from '../../../src/interfaces/user'
import { deleteUser, getUsers } from '../../../src/services'
import CreateUserModal from '../CreateUserModal'
import UpdateUserModal from '../../hooks/UpdateUserModal'

interface State {
    users: User[],
    updateUser: User
    isCreateUserModalOpen: boolean,
    isUpdateUserModalOpen: boolean,
}

class UserList extends Component<{}, State> {
    constructor(props) {
        super(props)
        this.state = {
            users: [],
            updateUser: null,
            isCreateUserModalOpen: false,
            isUpdateUserModalOpen: false,
        }
    }

    componentDidMount() {
        this.updateList()
    }

    updateList = () => {
        getUsers().then(users => {
            this.setState({
                users
            })
        })
    }

    handleUpdateItemClick = (user: User) => {
        this.setState({
            updateUser: user
        })
        this.handleUpdateUserModalToggle()
    }

    handleDeleteItemClick = async (id: number) => {
        await deleteUser(id)
        this.updateList()
    }

    handleCreateUserModalToogle = () => {
        this.setState({
            isCreateUserModalOpen: !this.state.isCreateUserModalOpen
        })
    }

    handleUpdateUserModalToggle = () => {
        this.setState({
            isUpdateUserModalOpen: !this.state.isUpdateUserModalOpen
        })
    }

    render() {
        const { users, updateUser, isCreateUserModalOpen, isUpdateUserModalOpen } = this.state
        return (
            <div className='d-flex flex-column'>
                <MDBBtn className='ml-auto' onClick={this.handleCreateUserModalToogle}>Create User</MDBBtn>

                <MDBTable>
                    <MDBTableHead>
                        <tr>
                            <th>id</th>
                            <th>name</th>
                            <th>email</th>
                            <th>createdAt</th>
                            <th>Action</th>
                        </tr>
                    </MDBTableHead>
                    <MDBTableBody>
                        {
                            users && users.map(user => (
                                <tr key={user.id}>
                                    <td>{user.id}</td>
                                    <td>{user.name}</td>
                                    <td>{user.email}</td>
                                    <td>{user.createdAt}</td>
                                    <td>
                                        <MDBIcon className='mr-4 cursor-pointer' icon='pen' size='lg' onClick={() => this.handleUpdateItemClick(user)} />
                                        <MDBIcon className='cursor-pointer' icon='trash-alt' size='lg' onClick={() => this.handleDeleteItemClick(user.id)} />
                                    </td>
                                </tr>
                            ))
                        }
                    </MDBTableBody>
                </MDBTable>

                <CreateUserModal
                    isOpen={isCreateUserModalOpen}
                    toggle={this.handleCreateUserModalToogle}
                    success={this.updateList} />

                <UpdateUserModal
                    isOpen={isUpdateUserModalOpen}
                    toggle={this.handleUpdateUserModalToggle}
                    user={updateUser as UserInput}
                    id={updateUser ? updateUser.id : -1}
                    success={this.updateList} />
            </div>
        )
    }
}

export default UserList