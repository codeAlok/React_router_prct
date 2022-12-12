import { Link } from "react-router-dom"; // Link => to use Link other pages

function Navbar() {
    return (
        <>
            <ul>
                <li> <Link to="/"> Home_link </Link> </li>
                <li> <Link to="/about"> About_link </Link> </li>

                {/* we use <Link> </Link> instead of <a> </a> to avoid reload whole page after click on anchor element */}
                <li><a href="/"> Home_anchor </a></li>
                <li><a href="/about"> About_anchor</a></li>
            </ul>
        </>
    )
}

export default Navbar;