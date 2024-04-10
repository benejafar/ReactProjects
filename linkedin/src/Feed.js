import React, { useEffect, useState } from 'react'
import './Feed.css'
import EditIcon from '@mui/icons-material/Edit';
import InputOption from './InputOption';
import ImageIcon from '@mui/icons-material/Image';
import SubscriptionsIcon from '@mui/icons-material/Subscriptions';
import EventNoteIcon from '@mui/icons-material/EventNote';
import CalendarViewDayIcon from '@mui/icons-material/CalendarViewDay';
import Post from './Post';
import { addDoc, collection, db, onSnapshot, orderBy, query, serverTimestamp} from './firebase';

function Feed() {

    const [input, setInput] = useState('');
    const [posts,setPosts] = useState([]);

    useEffect(() => {
        const q = query(collection(db,'posts'), orderBy('timeStamp', 'desc'));
        onSnapshot( q ,(snapshot) => {
            setPosts(snapshot.docs.map(doc => (
                {
                id:doc.id,
                data:doc.data(),
                }
            )))
        })
        console.log(posts);
    },[])

    // useEffect(() => {
    //     db.collection('posts').onSnapShot(snapshot => (
    //         setPosts(snapshot.docs.map(doc => (
    //            {
    //             id: doc.id,
    //             data: doc.data(),
    //            } 
    //         )))
    //     ));
    // }, []);

    const sentPost = e => {
        e.preventDefault();

        // db.collection('posts').add({
        //     name: 'Muhammed Jafar',
        //     description: 'This is a test',
        //     message: ''
        // })
        addDoc(collection(db, "posts"), {
          name: "Muhammed Jafar",
          description: "This is a test",
          message: input,
          photoUrl: '',
          timeStamp: serverTimestamp()
        });

        setInput('');

    };

  return (
    <div className='feed'>
        <div className='feed__inputContainer'>
            <div className='feed__input'>
                <EditIcon/>
                <form>
                    <input value={input} onChange={e => setInput(e.target.value)} type='text'/>
                    <button onClick={sentPost} type='submit'>Send</button>
                </form>
            </div>
            <div className='feed__inputOptions'>
                <InputOption Icon={ImageIcon} title={'photo'} color={'#70B5F9'}/>
                <InputOption Icon={SubscriptionsIcon} title={'Video'} color={'#E7A33E'}/>
                <InputOption Icon={EventNoteIcon} title={'Event'} color={'#C0CBCD'}/>
                <InputOption Icon={CalendarViewDayIcon} title={'Write article'} color={'#7FC15E'}/>

            </div>
        </div>

        {posts.map(({id, data: {name, description, message, photoUrl,timeStamp}}) => (
            <Post 
                key={id} name={name} description={description} 
                message={message} photoUrl={photoUrl}
            />
        ))}

    </div>
  )
}

export default Feed