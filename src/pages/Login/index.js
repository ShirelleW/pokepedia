import {useState} from 'react'
import {useNavigate} from 'react-router-dom'
import './styles.css'

const Login = ({setUser}) => {
    //once the clicker clicks submit, we will mimick logging in and conditionally render our navbar
    
    const [username, setUsername] = useState('')
    const navigate = useNavigate()

    const handleChange = e => {
        setUsername(e.target.value)
    }

    const handleSubmit = e => {
        e.preventDefault()
        setUser(username)

        //We can use useNavigate from RR to redirect our users to a different component/page
        //Do not forget the forward slash in the front in navigate()
        navigate('/pokemon/list')
    }

    return (
        //mx-auto to centers the form, p-2 adds padding, m-2 adds margin
        <form className='mx-auto border p-2 m-2' id='login-form' onSubmit={handleSubmit}>
            <div className="mb-3">
                <label htmlFor="exampleInputUser1" className="form-label">User address</label>
                <input type="text" 
                className="form-control" 
                id="exampleInputUser1" 
                aria-describedby="userHelp"
                value={username}
                onChange={handleChange} />
                   
                <div id="userHelp" className="form-text">We'll never share your user with anyone else.</div>
            </div>
            <div className="mb-3">
                <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                <input type="password" className="form-control" id="exampleInputPassword1" />
            </div>
            <button type="submit" className="btn btn-primary">Submit</button>
        </form>
    );
}

export default Login;
