import { IconButton } from '@mui/material'
import React from 'react';

import { useNavigate } from 'react-router-dom'

import './Mail.css'

import ArrowBackOutlinedIcon from '@mui/icons-material/ArrowBackOutlined';
import MoveToInboxOutlinedIcon from '@mui/icons-material/MoveToInboxOutlined';
import ErrorIcon from '@mui/icons-material/Error';
import DeleteIcon from '@mui/icons-material/Delete';
import EmailIcon from '@mui/icons-material/Email';
import WatchLaterIcon from '@mui/icons-material/WatchLater';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import LabelImportantIcon from '@mui/icons-material/LabelImportant';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import UnfoldMoreIcon from '@mui/icons-material/UnfoldMore';
import PrintIcon from '@mui/icons-material/Print';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';

import { useSelector } from 'react-redux';
import { selectedMail } from '../features/mailSlice';









const Mail = () => {

    const navigation = useNavigate()


    const selectMail = useSelector(selectedMail)



    return (
        <div className='mail'>
            <div className="mail__tools">
                <div className="mail__toolsleft">

                    <IconButton onClick={() => navigation('/')}>
                        <ArrowBackOutlinedIcon />
                    </IconButton>

                    <IconButton>
                        <MoveToInboxOutlinedIcon />
                    </IconButton>



                    <IconButton>
                        <ErrorIcon />
                    </IconButton>



                    <IconButton>
                        <DeleteIcon />
                    </IconButton>


                    <IconButton>
                        <EmailIcon />
                    </IconButton>


                    <IconButton>
                        <WatchLaterIcon />
                    </IconButton>

                    <IconButton>
                        <CheckCircleIcon />
                    </IconButton>

                    <IconButton>
                        <LabelImportantIcon />
                    </IconButton>

                    <IconButton>
                        <MoreVertIcon />
                    </IconButton>


                </div>


                <div className="mail__toolsRight">

                    <IconButton>
                        <UnfoldMoreIcon />
                    </IconButton>

                    <IconButton>
                        <PrintIcon />
                    </IconButton>

                    <IconButton>
                        <ExitToAppIcon />
                    </IconButton>



                </div>
            </div>
            <div className="mail__body">
                <div className="mail__bodyHeader">
                    <h2>{selectMail?.subject}</h2>
                    <LabelImportantIcon className='mail__important' />
                    <p>{selectMail?.title}</p>
                    <p className='mail__time'>{selectMail?.time}</p>
                </div>

                <div className="mail__message">
                    <p>{selectMail?.description}</p>
                </div>
            </div>
        </div>
    )
}

export default Mail