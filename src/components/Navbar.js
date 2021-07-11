import {Link} from 'react-router-dom'

const Navbar = ()=> {
    return ( 
        <div className="nav container">
            <Link to={{pathname:"/"}}  className="link brand ">Home</Link>
            <Link to={{pathname:"/map",state:{latitude:52.5324,longitude :13.4}}}  className="link path">Map</Link>
            <Link to={{pathname:"/about"}}  className="link path">About</Link>
        </div>
    )
}

export default Navbar;