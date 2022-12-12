import { Link } from "react-router-dom";

function About() {
    return (
        <>
            <h1>About page</h1>
            <p>Welcome to my cool simple About Page</p>
            <p>Get Knowledge and learn something here</p>
            <Link to="/"> Go to Home page</Link>

            <li><Link to="/user/alok">Alok</Link></li>
            <li><Link to="/user/peter">peter</Link></li>

        </>
    )
}

export default About;