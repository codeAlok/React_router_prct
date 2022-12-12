import { useParams } from "react-router"; // to use diffrent route from parameter

function User() {

    const params = useParams();
    const {name} = params;
    console.warn(name)

    return (
        <>
            <h1> This is {name} Page</h1>
        </>
    )
}

export default User;