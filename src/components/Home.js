import { Link, useNavigate } from "react-router-dom";

function Home() {
    const navigate = useNavigate();

    return (
        <>
            <h1>Home page</h1>
            <p>Welcome to my cool simple Home Page</p>
            <p>Get Knowledge and learn something here</p>
            <Link to="/about"> Go to About Us page</Link>

            <br />
            <button onClick={() => navigate('/about')}>Go to About Page</button>
        </>
    )
}

export default Home;