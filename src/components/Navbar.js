import { Link, NavLink } from "react-router-dom"; // Link => to Link other pages
// NavLink => to use className="" in (can't use class in LInk , could lead to issue or sow adds)

function Navbar() {
    return (
        <>
            <ul className="navbar">

                <li> <NavLink
                    style={({ isActive }) => { return { color: isActive ? 'green' : 'red' } }}
                    className="nav-bar-link" to="/"> Home </NavLink> </li>
                <li> <NavLink
                    style={({ isActive }) => { return { color: isActive ? 'green' : 'red' } }}
                    className="nav-bar-link" to="/about"> About </NavLink> </li>

                {/* we use <Link> </Link> instead of <a> </a> to avoid reload whole page after click on anchor element */}
                {/* <li><a href="/"> Home-a </a></li>
                <li><a href="/about"> About-a</a></li> */}

                {/* invalid link no route defined in app.js redirect on home page/404 */}
                <li> <NavLink
                    style={({ isActive }) => { return { color: isActive ? 'green' : 'red' } }}
                    className="nav-bar-link" to="/contact">Contact us</NavLink></li>
            </ul>
        </>
    )
}

export default Navbar;