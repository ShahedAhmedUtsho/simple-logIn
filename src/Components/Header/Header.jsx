
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className='header maxCont'>
            <Link to="/">Home</Link>
            <Link to="/login">login</Link>
        </div>
    );
};

export default Header;