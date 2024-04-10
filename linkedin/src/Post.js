import React from 'react'
import './Post.css';
import { Avatar } from '@mui/material';
import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';
import InputOption from './InputOption';
import CommentIcon from '@mui/icons-material/Comment';
import TelegramIcon from '@mui/icons-material/Telegram';
import ShareIcon from '@mui/icons-material/Share';

function Post({name, description, message, photoUrl}) {
  return (
    <div className='post'>
        <div className='post__header'>
            <Avatar/>
            <div className='post__info'>
                <h2>{name}</h2>
                <p>{description}</p>
            </div>
        </div>

        <div className='post__body'>
            <p>{message}</p>
        </div>
        <div className='post_buttons'>
            <InputOption Icon={ThumbUpOffAltIcon} title={'Like'}/>
            <InputOption Icon={CommentIcon} title={'Comment'}/><InputOption Icon={ShareIcon} title={'Share'}/><InputOption Icon={TelegramIcon} title={'Send'}/>
        </div>
    </div>
  )
}

export default Post