import { useSelector } from "react-redux/es/hooks/useSelector"
import { RootState } from '../store/store';
import { useDispatch } from "react-redux";
import { remove } from "../store/cartSlice";
const Cart: React.FC = () => {
  interface Product {
    id: number;
    image: string;
    title: string;
    price: number;
  }
  const dispatch = useDispatch();
  const products = useSelector((state: RootState) => state.cart)
  const handleRemove =(productId: Product) =>{
    dispatch(remove(productId));
  }
  return (
    <div>
      
      <h3>Cart</h3>
      <div className="cart-items">
        {
          products.items.map(product => (
            <div className="cart-item-card">
              <img src={product.image} alt="cart-items" />
              <h4>{product.title}</h4>
              <h5>{product.price}</h5>
              <button onClick = {() => handleRemove(product.id)} className="btn">Remove</button>
            </div>
          ))
        }
      </div>
    </div>
    
  )
}

export default Cart