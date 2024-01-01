import { NavLink } from "react-router-dom";

const Home = () => {
    return(
        <div>
            <NavLink to='/about'>About</NavLink>
            <h1>Home Page</h1>
        </div>
        
    )
};

export default Home;