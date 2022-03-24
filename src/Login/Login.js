import { Button } from '@mui/material'
import React from 'react'
import gmail from '../../src/images/gmail-icon.svg'
import { login } from '../features/userSlice'
import { auth, provider } from '../firebase'
import './Login.css'
import { useDispatch } from 'react-redux'



const Login = () => {

    const dispatch = useDispatch()

    const signin = () => {
        auth.signInWithPopup(provider).then(({ user }) => {
            dispatch(login({
                displayName: user.displayName,
                email: user.email,
                photoUrl: user.photoURL
            }))
        }).catch(err => alert(err.message))


    }



    return (
        <div className='login'>
            <div className="login__container">
                <img src={gmail} alt="gmail-img" />
                <Button variant='contained' color='primary' onClick={signin} style={{ marginTop: '20px' }}>Login With Google</Button>
            </div>
        </div>
    )
}

export default Login