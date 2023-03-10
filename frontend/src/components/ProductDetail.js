import { Link } from 'react-router-dom';
import { useState, useEffect } from "react";
import axios from 'axios';

const ProductDetail = (props) => {
    const [apiData, setApiData] = useState([]);
    const [productDetails, setProductDetails] = useState([]);
    useEffect(() => {
        const productId = localStorage.getItem("ProductId");
        axios.get(`http://localhost:8080/EDairy/products/${productId}`)
            .then(response => { setApiData(response.data) });

        axios.get(`http://localhost:8080/EDairy/productDetails/${productId}`)
            .then(response => { setProductDetails(response.data) });
    }, []);

    var productCategory = productDetails.map(obj => {
        return (
            <li>{obj.categoryName}</li>
        );
    });

    return (
        <div className='productContentPanel'>
            <div className='productContentHeading'>
                <img src={apiData.imagePath} height='100px' width='100px' />
                <h3>{apiData.productName}</h3>
            </div>
            <h4>Product Contents :</h4>
            <p>{apiData.description}</p>
            <div className='productContentChaptersList'>
                <ol>
                    {productCategory}
                </ol>
            </div>
        </div>
    );
}
export default ProductDetail;