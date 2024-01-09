import './css/App.css'
import NewPatient from './pages/options/NewPatient';
import Patient from './pages/options/Patient';
import Patients from './pages/options/Patients';
import { PatientProvider } from './context/PatientContext';
import { AppProvider } from './context/AppContext';
import Admin from './pages/users/Admin';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import ScrollToTop from './utils/ScrollToTop';
import Messages from './pages/options/Messages';

function App() {
  return (
    <Router>
      <AppProvider>
      <PatientProvider>
      <ScrollToTop/>
        <Routes>
          <Route path='/home/' element={<Admin/>} />
          <Route path='/patients/' element={<Patients/>} />
          <Route path='/patients/new' element={<NewPatient/>} />
          <Route path='/patients/:boltCode/' element={<Patient/>} />
          <Route path='/messages' element={<Messages/>} />
        </Routes>
      </PatientProvider>
      </AppProvider>
    </Router>
  );
}

export default App;
