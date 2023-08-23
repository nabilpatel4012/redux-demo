import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import {add} from "../store/cartSlice";


const Products: React.FC = () => {
    interface Product {
        id: number;
        image: string;
        title: string;
        price: number;
    }
  const dispatch = useDispatch();  
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const fetchProducts =async () => {
        const res = await fetch('https://fakestoreapi.com/products');
        const data = await res.json();
        console.log(data);
        setProducts(data);
    }
    fetchProducts();
  }, [])

  const handleAdd =(product: Product) =>{
    dispatch(add(product));
  }
  return (
    
    <div className="productsContainer">
        {
            products.map(product =>(
                <div className="card" key={product.id}>
                <img src={product.image} alt="product-image"></img>
                <h4>{product.title}</h4>
                <h5>{product.price}</h5>
                <button onClick = {() => handleAdd(product)} className="btn">Add to Cart</button>
                </div>
            ))
        }
    </div>
  )
}

export default Products