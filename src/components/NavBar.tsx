import { Link} from 'react-router-dom';
import { useSelector } from 'react-redux/es/hooks/useSelector';
import { RootState } from '../store/store';

const NavBar = () => {
  const items = useSelector((state: RootState) => state.cart)
  return (
    <div className='nav' style={{marginBottom: '30px'}}>
        <span className='logo'>
            Redux Store
        </span>
        <div style={{display: 'flex', justifyContent:"space-around"}}>
            <Link className="navLink"to='/main/home' style={{paddingRight:'20px'}}>Home</Link>
            <Link className="navLink"to='/main/cart' style={{paddingRight:'20px'}}>Cart</Link>

            <span className='cartCount'>
                Cart Items: {items.items.length}
            </span>

        </div>
    </div>
  )
}

export default NavBar