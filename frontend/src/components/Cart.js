import { Link } from 'react-router-dom';
import { useState, useEffect } from "react";
import axios from 'axios';
import { navigate, useNavigate } from "react-router-dom";

const Cart = (props) => {

    let user = JSON.parse(sessionStorage.getItem("user"));
    if (user == null) { user = { id: "" } }

    const [apiData, setApiData] = useState([]);
    useEffect(() => {
        axios.get(`http://localhost:8080/EDairy/cart/${user.id}`)
            .then(response => { setApiData(response.data) });
    }, []);

    let cartTotal = 0;
    var userCart = apiData.map(obj => {
        cartTotal += obj.price;
        return (
            <tr>
                <td>{obj.productName}</td>
                <td>{obj.price}</td>
            </tr>
        );
    });

    return (
        <div className="cartSection">
            <div className='cartContainer'>
                <table>
                    <tr>
                        <th>Product Name</th>
                        <th>Price Per Item</th>
                    </tr>
                    {userCart}
                </table>
                <hr />
                <div className='cartTotal'>
                    <h1>Cart Total: {cartTotal}</h1>
                    <Link to="/paymentsPage"><button>Place Order</button></Link>
                </div>
            </div>
        </div >
    );
}
export default Cart;