import { Link } from 'react-router-dom';
import { useState, useEffect } from "react";
import axios from 'axios';
import { navigate, useNavigate } from "react-router-dom";

const PaymentsPage = (props) => {

    let user = JSON.parse(sessionStorage.getItem("user"));
    if (user == null) { user = { fullname: "", email: "", phone: "", dob: "" } }

    const [cartTotal, setcartTotal] = useState("");
    const [apiData, setApiData] = useState({ utrno: "" });

    useEffect(() => {
        axios.get(`http://localhost:8080/EDairy/cart/cartTotal/${user.id}`)
            .then(response => { setcartTotal(response.data) });

        axios.get('http://localhost:8080/EDairy/products')
            .then(response => { setApiData(response.data) });
    }, []);

    const handleChange = (event) => {
        const { name, value } = event.target
        setApiData({ ...apiData, [name]: value })
    }

    const orderPlaced = () => {
        //axios.post
        alert("Order placed successfully");
    }

    return (
        <div className='paymentsSection'>
            <div className='paymentsContainer'>
                <img src='Images/paymentQR.jpg'></img>
                <h1>Payment Amount: {cartTotal}</h1>
                <input type='number' name='utrno' placeholder='UTR Number' onChange={handleChange} required />
                <Link to="/"><button onClick={orderPlaced}>Submit</button></Link>
            </div>
        </div>
    );
}
export default PaymentsPage;