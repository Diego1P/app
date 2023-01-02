import './App.css';
//import Axios from "axios"
import {useState, createContext} from "react"
import {BrowserRouter as Router, Routes, Route, Link} from "react-router-dom"
import { Home } from './pages/Home';
import { Profile } from './pages/Profile';
import { Contact } from './pages/Contact';
import {QueryClient, QueryClientProvider} from "@tanstack/react-query"

export const AppContext = createContext();

function App() {
  const client = new QueryClient({defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
    }
  }});

  const [userName, setUserName] = useState("Diego");
  //const [name, setName] = useState("");
  //const [predictedAge, setpredictedAge] = useState({});
  
  /*
  const fetchCatFact = () => {
    Axios.get("https://catfact.ninja/fact").then((response) => {
      setcatFact(response.data.fact);
    });
  };

  useEffect(() => {
    Axios.get("https://catfact.ninja/fact").then((response) => {
      setcatFact(response.data.fact);
    });
  }, []);

  const fetchData = () => {
    Axios.get(`https://api.agify.io/?name=${name}`).then((response) => {
      //setcatFact(response.data.fact);
      setpredictedAge(response.data)
    });
  };
  */

  return (
    <div className="App">
      <QueryClientProvider client={client}>
      <AppContext.Provider value={{userName, setUserName}}>
        <Router>
          <div className='navbar'>
            <Link to="/"> Home </Link>
            <Link to="/contact"> Contact </Link>
            <Link to="/profile"> Profile </Link>
          </div>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<h1> 404 </h1>} />
          </Routes>
        </Router>
      </AppContext.Provider>
      </QueryClientProvider>
    </div>
  );
}

export default App;
