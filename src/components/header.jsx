import "./header.css";
import UserData from './userData.jsx';

export default function Header() {
    return(
        <div id="header" className="bg-red-500"> 
            <h1>Crystal Beauty Clear</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            Nemo dignissimos ea ipsa repellat quae deserunt, sequi temporibus soluta tenetur sint! 
            Reiciendis quam voluptatibus quas sit consequatur! Dolore eligendi veniam repudiandae?</p>
            <UserData></UserData>
        </div>
    )
}