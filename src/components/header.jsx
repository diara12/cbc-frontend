import "./header.css";
import UserData from './userData.jsx';

export default function Header() {
    return(
        <div id="header" className="w-full h-[80px] shadow-2xl"> 
            <h1>Crystal Beauty Clear</h1>
            <a href="/">Home</a>
            <a href="/login">Login</a>
            <Link to="/signup">Sign Up</Link>

        </div>
    )
}