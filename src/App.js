import logo from './logo.svg';
import './App.css';
import LandingPage from './component/Landingpaje';
import Navbar from './component/Navbar';
import UserForm from './component/userform';
import Footer from './component/footer';

function App() {
  return (
    <div>
      <Navbar />
      <LandingPage />
      <UserForm/>
      <Footer/>
    </div>
  );
}

export default App;
