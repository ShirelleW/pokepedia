import { useState, useContext } from 'react';
import { Routes, Route } from 'react-router-dom'
//Components
import Nav from './components/Nav'
//Context
import UserContext from './contexts/UserContext';
// pages
import Login from './pages/Login'
//CSS
import './App.css';

function App() {
  // In order for us to use our context, we import first, then use the useContext hook to access our context
  // const user = useContext(UserContext)
  // console.log(user)

  //We will pass on our user to all of App's children via the Provider value prop
  const [user, setUser] = useState('')

  return (
    <div className="App">

       {/* All context comes with the provider component. This allows us to use this as a wrapper and share information to all of its children. We need the value prop inside our provider. */}
      <UserContext.Provider value = {user}>
        <Nav /> 

        {/* We need to wrap our all of our Routes inside react router Routes component */}

        <Routes>
          <Route path='login' element={<Login setUser={setUser} />} />
        </Routes>
      </UserContext.Provider>
    </div>
  );
}

export default App;
