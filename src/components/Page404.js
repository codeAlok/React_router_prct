import { Link } from "react-router-dom";

function Page404() {
    return (
        <>
            <h1>404 Page</h1>
            <p>The requested URL is invalid or not present</p>
            <Link to="/"> Go to Home Page</Link>
        </>
    )
}

export default Page404;