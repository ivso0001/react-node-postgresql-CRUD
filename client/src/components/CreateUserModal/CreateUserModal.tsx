import React, { Component } from 'react'
import { UserInput } from '../../interfaces/user'
import { postUser } from '../../services'
import { MDBBtn, MDBModal, MDBModalBody, MDBModalHeader, MDBModalFooter, MDBInput } from 'mdbreact';

interface Props {
    isOpen: boolean,
    toggle: () => void,
    success: () => void,
}

interface State {
    user: UserInput
}

class UserList extends Component<Props, State> {
    constructor(props: Props) {
        super(props)
        this.state = {
            user: null
        }
    }

    handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        postUser(this.state.user).then(state => {
            this.props.success()
            this.props.toggle()
        })
            .catch(e => {
                // nofify
            })
    }

    handleChange = (e: React.FormEvent<HTMLInputElement>) => {
        const name = e.currentTarget.name
        const value = e.currentTarget.value
        this.setState({
            user: {
                ...this.state.user,
                [name]: value,
            }
        })
    }

    render() {
        const { user } = this.state
        return (
            <MDBModal isOpen={this.props.isOpen} toggle={this.props.toggle} centered noClickableBodyWithoutBackdrop={false} overflowScroll={false} inline={false}>
                <MDBModalHeader toggle={this.props.toggle}>Create User Info</MDBModalHeader>
                <form onSubmit={this.handleSubmit}>
                    <MDBModalBody>
                        <div className='grey-text'>
                            <MDBInput label='name' type='text' name='name' value={user ? user.name : ''} onChange={this.handleChange} checked />
                            <MDBInput label='email' type='email' name='email' value={user ? user.email : ''} onChange={this.handleChange} />
                        </div>
                    </MDBModalBody>
                    <MDBModalFooter>
                        <MDBBtn color='primary' type='submit'>Post</MDBBtn>
                    </MDBModalFooter>
                </form>
            </MDBModal>
        )
    }
}

export default UserList
