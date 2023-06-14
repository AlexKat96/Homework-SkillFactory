import { BrowserRouter ,Routes, Route } from "react-router-dom"
import Footer from "./components/Footer/Footer"
import Header from "./components/Header/Header"
import Home from "./components/Home/Home"
import Login from "./components/Login/Login"
import Search from "./components/Search/Search"
import SearchResult from "./components/SearchResult/SearchResult"


const App = () => {
  return (
    
    <BrowserRouter>

      <Header/>

      <Routes>
        <Route exact path="/" element={<Home/>}/>
        <Route exact path="/faq" element={<Home/>}/>
        <Route exact path="/rate" element={<Home/>}/>
        <Route exact path ="/Login" element={<Login/>}/>
        <Route exact path ="/Search" element={<Search/>}/>
        <Route exact path ="/SearchResult" element={<SearchResult/>}/>
      </Routes>

      <Footer/>

    </BrowserRouter>
  )
}

export default App