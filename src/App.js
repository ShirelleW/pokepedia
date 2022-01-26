import { useState, useContext, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom'
//Components
import Nav from './components/Nav'
//Context
import UserContext from './contexts/UserContext';
// pages
import Login from './pages/Login'
import PokemonList from './pages/PokemonList';
import Home from './pages/Home';
//CSS
import './App.css';
//Axios
import axios from 'axios'

const App = () => {
  // In order for us to use our context, we import first, then use the useContext hook to access our context
  // const user = useContext(UserContext)
  // console.log(user)

  //We will pass on our user to all of App's children via the Provider value prop
  const [user, setUser] = useState('')
  const [pokeList, setPokeList] = useState([])
  useEffect(() => {
    fetchPokemon()
    //empty array brackets = dependency array. If empty, it will call useEffect once only when the DOM Component loads. 
  }, [])

  const fetchPokemon = async () => {
    try{
      //async/await replaces the thennables (.then)
      const response = await axios.get("https://pokeapi.co/api/v2/pokemon?limit=1118")

      setPokeList(response.data.results)

    }catch (error) {
      console.log(error)
    }
  }

  // console.log('this is our pokelist', pokeList)
  return (
    <div className="App">

       {/* All context comes with the provider component. This allows us to use this as a wrapper and share information to all of its children. We need the value prop inside our provider. */}
      <UserContext.Provider value = {user}>
        <Nav /> 

        {/* We need to wrap our all of our Routes inside react router Routes component */}

        <Routes>
          <Route path='/' element={<Home/>} /> 
          <Route path='login' element={<Login setUser={setUser} />} />
          {/* pokeList = {pokeList} is passing down props to the child component */}
          <Route path='pokemon/list' element={<PokemonList pokeList={pokeList} itemsPerPage={8} />} /> 
        </Routes>
      </UserContext.Provider>
    </div>
  );
}

export default App;
