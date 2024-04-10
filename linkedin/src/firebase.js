import {initializeApp} from 'firebase/app';
import {getFirestore,collection,getDocs, onSnapshot, addDoc, serverTimestamp, orderBy, query} from 'firebase/firestore';
import {getAuth} from 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyD24xMzHs5TTkSK_zasH8ceHW49klTO6Aw",
    authDomain: "linkedin-clone-fd1bc.firebaseapp.com",
    projectId: "linkedin-clone-fd1bc",
    storageBucket: "linkedin-clone-fd1bc.appspot.com",
    messagingSenderId: "900283721721",
    appId: "1:900283721721:web:494aab92079e9e3d6abf28"
  };



  const firebaseapp = initializeApp(firebaseConfig);
  const db = getFirestore(firebaseapp);
  const auth = getAuth(firebaseapp);

  // const colRef = collection(db,'book');

  // getDocs(colRef).then((snapshot) => {
  //   let books = []
  //   snapshot.docs.forEach((doc)=> {
  //     books.push({...doc.data(), id: doc.id})
  //   })
  //   console.log(books)
  // }).catch (err => {
  //   console.log(err.message)
  // })






  export {db, auth, collection, onSnapshot, addDoc, serverTimestamp, orderBy, query}
