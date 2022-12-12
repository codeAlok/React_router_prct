import { Link } from "react-router-dom";

function About() {
    return (
        <>
            <h1>About page</h1>
            <p>Welcome to my cool simple About Page</p>
            <p>Get Knowledge and learn something here</p>
            <Link to="/"> Go to Home page</Link>
        </>
    )
}

export default About;