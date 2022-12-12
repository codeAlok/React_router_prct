import { Link } from "react-router-dom";

function Home() {
    return (
        <>
            <h1>Home page</h1>
            <p>Welcome to my cool simple Home Page</p>
            <p>Get Knowledge and learn something here</p>
            <Link to="/about"> Go to About Us page</Link>
        </>
    )
}

export default Home;