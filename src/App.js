
import './App.css';
import Header from './Header/Header';
import Sidebar from './Sidebar/Sidebar';
import { useSelector } from 'react-redux'
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Mail from './Mail/Mail';
import EmailList from './EmailList/EmailList';
import SendMail from './SendMail/SendMail';
import { selectSendMessageIsOpen } from './features/mailSlice';










function App() {

  const sendMessageOpen = useSelector(selectSendMessageIsOpen)

  return (
    <BrowserRouter>
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


      </div>
    </BrowserRouter>
  );
}

export default App;
