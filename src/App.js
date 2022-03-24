
import './App.css';
import Header from './Header/Header';
import Sidebar from './Sidebar/Sidebar';
import { useDispatch, useSelector } from 'react-redux'
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Mail from './Mail/Mail';
import EmailList from './EmailList/EmailList';
import SendMail from './SendMail/SendMail';
import { selectSendMessageIsOpen } from './features/mailSlice';

import { login, selectUser } from './features/userSlice';
import Login from './Login/Login';
import { useEffect } from 'react';
import { auth } from './firebase';










function App() {


  const user = useSelector(selectUser)

  const dispatch = useDispatch()

  const sendMessageOpen = useSelector(selectSendMessageIsOpen);



  useEffect(() => {


    auth.onAuthStateChanged(user => {
      if (user) {
        //the user is logged in..
        dispatch(login({
          displayName: user.displayName,
          email: user.email,
          photoUrl: user.photoURL
        }))

      } else {

      }
    })



  }, [dispatch])






  return (
    <BrowserRouter>
      {!user ? (<Login />) : (
        <div className="app">
          <Header />
          <div className="app__body">
            <Sidebar />
            <Routes>
              <Route path='/mail' element={<Mail />} />



              <Route path='/' element={<EmailList />} />


            </Routes>



          </div>
          {sendMessageOpen && <SendMail />}


        </div>)}
    </BrowserRouter>
  );
}

export default App;
