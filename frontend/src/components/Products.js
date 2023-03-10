import { Link } from 'react-router-dom';
import { useState, useEffect } from "react";
import axios from 'axios';

const Products = (props) => {
    let user = { id: "" };
    const [apiData, setApiData] = useState([]);
    useEffect(() => {
        axios.get('http://localhost:8080/EDairy/products')
            .then(response => { setApiData(response.data) });
    }, []);

    let cartApi = { cartId: "", productId: "" }

    const addToCart = () => {
        console.log(cartApi);
        axios.post('http://localhost:8080/EDairy/cart/add', cartApi)
            .then(response => alert(response.data));
    }

    var productCards = apiData.map(obj => {
        return (
            // <div class="product">
            //     <div class="image">
            //         <img src={obj.imagePath} alt="" />
            //     </div>
            //     <div class="description">
            //         <h3>{obj.productName}</h3>
            //         <p>{obj.author}</p>
            //         <h2 class="price">{obj.price}</h2>
            //         <Link to="/productdetail" id={obj.id} onClick={() => localStorage.setItem("ProductId", obj.id)} class="buy">View</Link>
            // <a onClick={() => {
            //     user = JSON.parse(sessionStorage.getItem("user"));
            //     cartApi.cartId = user.id;
            //     cartApi.productId = obj.id;
            //     addToCart();
            // }} class="add">Add to Cart</a>
            //     </div>
            // </div>
            <div class="product">

                <div class="productSection03">
                    <img src="Images\cow-center-img.png" alt="lassi" width="100%" />
                </div>
                <div class="image">
                    <img src={obj.imagePath} alt="" />
                </div>
                <div class="description">
                    <h3>{obj.productName}</h3>
                    <p>{obj.description}</p>
                    <h2 class="price">{obj.price}rs/kg</h2>
                    <Link to="/productdetail" id={obj.id} onClick={() => localStorage.setItem("ProductId", obj.id)} class="buy">View</Link>
                    <a onClick={() => {
                        user = JSON.parse(sessionStorage.getItem("user"));
                        cartApi.cartId = user.id;
                        cartApi.productId = obj.id;
                        addToCart();
                    }} class="add">Add to Cart</a>
                </div>
            </div>
        );
    });
    return (
        <>
            <div class="productSection0">
                <div class="slider">
                    <div class="slide-viewer">
                        <div class="slide-group">
                            <div className="slideslide-1">
                                <img src="Images\Home-Page-Banner-1_0.jpg" alt="slide_01" />
                            </div>
                            {/* <div class="slide slide-2">
                                <img src="Images/slide-2.jpg" alt="slide_02" />
                            </div> */}
                            {/* <div class="slide slide-3">
                                <img src="Images/slide-3.png" alt="slide_03" />
                            </div> */}
                            {/* <div class="slide slide-4">
                                <img src="Images/slide-4.jpg" alt="slide_04" />
                            </div> */}
                        </div>
                    </div>
                    <div class="slide-buttons"></div>
                </div>
            </div>

            {/* <div class="productSection1">
                <div class="main_container">
                    <div class="vertical_sec">
                        <div class="horizontal_sec">
                            <div class="box" id="box1">
                                <h3>Data Science</h3>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci voluptate laboriosam ea!
                                    Cum sint, reprehenderit quam laudantium quo quaerat cupiditate ipsum veniam</p>
                            </div>
                            <div class="box" id="box2">
                                <h3>Business</h3>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci voluptate laboriosam ea!
                                    Cum sint, reprehenderit quam laudantium quo quaerat cupiditate ipsum veniam</p>
                            </div>
                        </div>
                        <div class="horizontal_sec">
                            <div class="box" id="box3">
                                <h3>Computer Science</h3>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci voluptate laboriosam ea!
                                    Cum sint, reprehenderit quam laudantium quo quaerat cupiditate ipsum veniam</p>
                            </div>
                            <div class="box" id="box4">
                                <h3>Information Tech</h3>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci voluptate laboriosam ea!
                                    Cum sint, reprehenderit quam laudantium quo quaerat cupiditate ipsum veniam</p>
                            </div>
                        </div>
                    </div>
                    <div class="vertical_sec">
                        <div class="box" id="box5">
                            <h3>Personal Development</h3>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci voluptate laboriosam ea! Cum
                                sint, reprehenderit quam laudantium quo quaerat cupiditate ipsum veniam</p>
                        </div>
                    </div>
                </div>
            </div> */}

            <div class="productSection2">
                <div class="productGrid">
                    {/* <div class="product">
                        <div class="image">
                            <img src="Images\full-cream-milk.png" alt="" />
                        </div>
                        <div class="description">
                            <h3>Full toned milk</h3>
                            <p>Gyan Full Cream Milk is a creamy and highly nutritious delight.
                                It's filled with the goodness of essential nutrients for your healthy development.</p>
                            <h2 class="price">50rs/ltr</h2>
                            <a href="" class="buy">Buy Now</a>
                            <a href="" class="add">Add to Cart</a>
                        </div>
                    </div>
                    <div class="product">
                        <div class="image">
                            <img src="Images\dahi-new-281x210_0.png" alt="" />
                        </div>
                        <div class="description">
                            <h3>Dahi</h3>
                            <p>Made from pure pasteurized milk, our Sabse Sahi,
                                Gyan Dahi is your go-to healthy and tasty snack for any-time binging or cooking!</p>
                            <h2 class="price">80rs/kg</h2>
                            <a href="" class="buy">Buy Now</a>
                            <a href="" class="add">Add to Cart</a>
                        </div>
                    </div>
                    <div class="product">
                        <div class="image">
                            <img src="Images\Paneer.png" alt="" />
                        </div>
                        <div class="description">
                            <h3>paneer</h3>
                            <p>Indulge in the super soft and wholesome delight of Gyan Paneer made from fresh and pure Gyan Milk.</p>
                            <h2 class="price">360rs/kg</h2>
                            <a href="" class="buy">Buy Now</a>
                            <a href="" class="add">Add to Cart</a>
                        </div>
                    </div>
                    <div class="product">
                        <div class="image">
                            <img src="Images\gyan-lassi.png" alt="" />
                        </div>
                        <div class="description">
                            <h3>Lassi</h3>
                            <p>Rejuvenate yourself by indulging in the creamy, frothy and tangy taste of Gyan Lassi. A rich refreshing drink.</p>
                            <h2 class="price">30rs/500gm</h2>
                            <a href="" class="buy">Buy Now</a>
                            <a href="" class="add">Add to Cart</a>
                        </div>
                    </div>
                    <div class="product">
                        <div class="image">
                            <img src="Images\gyan-desi-ghee.png" alt="" />
                        </div>
                        <div class="description">
                            <h3>Desi ghee</h3>
                            <p>Gyan Desi Ghee is made using high-quality milk in the most hygienic and safe conditions to ensure purity and quality.</p>
                            <h2 class="price">600rs/kg</h2>
                            <a href="" class="buy">Buy Now</a>
                            <a href="" class="add">Add to Cart</a>
                        </div>
                    </div>
                    <div class="product">
                        <div class="image">
                            <img src="Images\front-Cow-Milk-Packaging.png" alt="" />
                        </div>
                        <div class="description">
                            <h3>cow milk</h3>
                            <p>Packed with the best benefits of milk, strengthen your bones & teeth with the pure, fresh and nutritious Cow</p>
                            <h2 class="price">50rs/kg</h2>
                            <a href="" class="buy">Buy Now</a>
                            <a href="" class="add">Add to Cart</a>
                        </div>
                    </div>
                    <div class="product">
                        <div class="image">
                            <img src="Images\butter_1.png" alt="" />
                        </div>
                        <div class="description">
                            <h3>Butter</h3>
                            <p>Gyan Classic Butter is a fresh, creamy treat for your taste buds.
                                Filled with all the buttery benefits of milk & much more</p>
                            <h2 class="price">100rs/kg</h2>
                            <a href="" class="buy">Buy Now</a>
                            <a href="" class="add">Add to Cart</a>
                        </div>
                    </div>
                    <div class="product">
                        <div class="image">
                            <img src="Images\Cow-Ghee-1L-281x210_0.png" alt="" />
                        </div>
                        <div class="description">
                            <h3>cow ghee</h3>
                            <p>Cow Ghee Rich in aroma and texture,
                                Gyan Cow Ghee is taste, purity and quality assured</p>
                            <h2 class="price">500rs/kg</h2>
                            <a href="" class="buy">Buy Now</a>
                            <a href="" class="add">Add to Cart</a>
                        </div>
                    </div>
                    <div class="product">
                        <div class="image">
                            <img src="Images\Masala Chhach 180 ml.png" alt="" />
                        </div>
                        <div class="description">
                            <h3>Masala chaach</h3>
                            <p>Your refreshing low-calorie drink that replenishes energy levels instantly.
                                Tastes best when served chilled.</p>
                            <h2 class="price">15rs/pack</h2>
                            <a href="" class="buy">Buy Now</a>
                            <a href="" class="add">Add to Cart</a>
                        </div>
                    </div>
                    <div class="product">
                        <div class="image">
                            <img src="Images\Frnt---Plain-Chhach-Pouch-375-ml.png" alt="" />
                        </div>
                        <div class="description">
                            <h3>chaach</h3>
                            <p>Refresh with the delicious Gyan Chaach.
                                A refreshing low-calorie drink that can restore energy levels. Aids in digestion</p>
                            <h2 class="price">10rs/pack</h2>
                            <a href="" class="buy">Buy Now</a>
                            <a href="" class="add">Add to Cart</a>
                        </div>
                    </div>
                    <div class="product">
                        <div class="image">
                            <img src="Images\Khoya 1 kg_1.png" alt="" />
                        </div>
                        <div class="description">
                            <h3>Khoya</h3>
                            <p>Bring home Gyan's Khoya to make any occasion special,
                                and festive occasions outstanding!
                                Made from the goodness of pure milk,
                                Gyan Khoya is deliciously creamy and rich in taste.
                                Made from the goodness of pure milk,
                                Gyan Khoya is deliciously creamy, pure and rich in taste. Perfect for celebrations!</p>
                            <h2 class="price">200rs/kg</h2>
                            <a href="" class="buy">Buy Now</a>
                            <a href="" class="add">Add to Cart</a>
                        </div>
                    </div> */}



                    {productCards}




                </div>
            </div>

            {/* <div class="productSection2">
                <div class="productGrid">
                    {productCards}
                </div>
            </div> */}




        </>
    );
}
export default Products;