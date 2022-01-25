import { useContext } from 'react';
//Components
import Nav from './components/Nav'
//CSS
import './App.css';
//Context
import UserContext from './contexts/UserContext';


function App() {
  // In order for us to use our context, we import first, then use the useContext hook to access our context
  // const user = useContext(UserContext)
  // console.log(user)


  return (
    <div className="App">

       {/* All context comes with the provider component. This allows us to use this as a wrapper and share information to all of its children. We need the value prop inside our provider. */}
      <UserContext.Provider value = {"Christina"}>
        <Nav /> 
      </UserContext.Provider>
    </div>
  );
}

export default App;
