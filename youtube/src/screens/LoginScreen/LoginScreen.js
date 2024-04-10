import React, { useEffect } from 'react'
import './loginScreen.scss';

import {useDispatch, useSelector} from 'react-redux'
import { login } from '../../redux/actions/auth.action';
import { useNavigate } from 'react-router-dom';

const LoginScreen = () => {

    const dispatch = useDispatch()

    const accessToken = useSelector(state => state.auth.accessToken);

    const handleLogin = () => {
        dispatch(login())
    }

    const nav = useNavigate()

    useEffect(() => {
        if (accessToken){
            nav('/')
        }
    },[accessToken,nav])
  return (
    <div className='login'>
        <div className='login__container'>
            <img src='http://pngimg.com/uploads/youtube/youtube_PNG2.png' alt='ytlogo'/>
            <button onClick={handleLogin}>Login with google</button>
            <p>This project is made using yt data api</p>
        </div>
    </div>
)
}

export default LoginScreen