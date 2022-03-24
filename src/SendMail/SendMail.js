import React from 'react'
import firebase from 'firebase/compat/app';
import './SendMail.css'
import CloseIcon from '@mui/icons-material/Close';
import { Button } from '@mui/material';
import { useForm } from 'react-hook-form'
import { useDispatch } from 'react-redux'
import { closeSendMessage } from '../features/mailSlice'
import { db } from '../firebase';





const SendMail = () => {

    const { register, handleSubmit, watch, formState: { errors } } = useForm()


    const dispatch = useDispatch()

    const onsubmit = (data) => {
        db.collection('emails').add({
            to: data.to,
            subject: data.subject,
            message: data.message,
            timestamp: firebase.firestore.FieldValue.serverTimestamp()
        });

        dispatch(closeSendMessage())
    }









    return (
        <div className='sendMail'>

            <div className="sendMail__header">
                <h3>New Message</h3>
                <CloseIcon className='sendMail__close' onClick={() => dispatch(closeSendMessage())} />
            </div>

            <form onSubmit={handleSubmit(onsubmit)}>

                <input type="email" placeholder='To' {...register('to', { required: true })} />
                {errors.to && <p className='sendMail__error'>To is required!</p>}
                <input type="text" placeholder='Subject' {...register('subject', { required: true })} />
                {errors.subject && <p className='sendMail__error'>Subject is required!</p>}
                <input type="text" className='sendMail__Message' placeholder='Message...' {...register('message', { required: true })} />
                {errors.message && <p className='sendMail__error'>Message is required!</p>}
                <div className="sendMail__options">
                    <Button className='sendMail__send'
                        variant='contained'
                        color='primary'
                        type='submit'


                    >Send</Button>
                </div>

            </form>


        </div>
    )
}

export default SendMail