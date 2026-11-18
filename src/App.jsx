// import './App.css'
import Header from './components/Header.jsx'
import Profile from "./components/Profile.jsx"
import Jobs from "./components/Jobs.jsx";
import Footer from './components/Footer.jsx'
import { user } from "./data.js";

function App() {
  
  return (
    <> 
      <Header />
      <Profile user={user}/>
      <Jobs />
      <Footer />
    </>
  )
}

export default App
