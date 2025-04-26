import "./header.css";
import UserData from './userData.jsx';

export default function Header() {
    return(
        <div id="header" className="bg-red-500"> 
            <h1>Crystal Beauty Clear</h1>
            <a href="/">Home</a>
            <a href="/login">Login</a>
            <Link to="/signup">Sign Up</Link>

        </div>
    )
}