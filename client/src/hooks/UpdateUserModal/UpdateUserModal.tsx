import React, { useState, useEffect } from 'react'
import { UserInput } from '../../interfaces/user'
import { putUser } from '../../services'
import { MDBBtn, MDBModal, MDBModalBody, MDBModalHeader, MDBModalFooter, MDBInput } from 'mdbreact';

interface Props {
    isOpen: boolean,
    toggle: () => void,
    user: UserInput,
    id: number,
    success: () => void,
}

const UpdateUserModal = (props: Props) => {
    const [user, setUser] = useState<UserInput>(null)
    const [willUpdate, setWllUpdate] = useState(true)

    useEffect(() => {
        if (props.isOpen) {
            if (willUpdate) {
                setWllUpdate(false)
                setUser(props.user)
            }
        } else {
            setWllUpdate(true)
        }
    })

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        putUser(user, props.id)
            .then(state => {
                props.success()
                props.toggle()
            })
            .catch(e => {
                // nofify
            })
    }

    const handleChange = (e: React.FormEvent<HTMLInputElement>) => {
        const name = e.currentTarget.name
        const value = e.currentTarget.value
        setUser({
            ...user,
            [name]: value,
        })
    }

    return (
        <MDBModal isOpen={props.isOpen} toggle={props.toggle} centered noClickableBodyWithoutBackdrop={false} overflowScroll={false} inline={false}>
            <MDBModalHeader toggle={props.toggle}>Update User Info</MDBModalHeader>
            <form onSubmit={handleSubmit}>
                <MDBModalBody>
                    <div className='grey-text'>
                        <MDBInput label='name' type='text' name='name' value={user ? user.name : ''} onChange={handleChange} checked />
                        <MDBInput label='email' type='email' name='email' value={user ? user.email : ''} onChange={handleChange} />
                    </div>
                </MDBModalBody>
                <MDBModalFooter>
                    <MDBBtn color='primary' type='submit'>Post</MDBBtn>
                </MDBModalFooter>
            </form>
        </MDBModal>
    )
}


export default UpdateUserModal