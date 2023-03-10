import { Link } from 'react-router-dom';
import { useEffect } from 'react';

const Home = (props) => {

    useEffect(() => {
        let flag = localStorage.getItem("Refresh");
        if (flag == "1") {
            localStorage.setItem("Refresh", "0");
            window.location.reload();
        }
    }, []);


    return (
        <>

            <header>
                <h2>A Tale of Freshness & purity</h2>

                <Link to="/login" class="button">Let's Get Started</Link>
            </header>

            <main>

                <div id="section0">
                    <video width="auto" height="auto" align-centre margin-left loop autoPlay muted landscape
                        src="Images\intro-video.mp4" alt="header">
                    </video>
                </div>
                <div class="productSection02">
                    <img src="Images\journey-of-milk-typo-bg.png" alt="lassi" width="100%" />
                </div>
                <div id="section1">
                    <div class="section1-heading" id="products" >
                        <h2>Our Products</h2>
                        <p>We offer a wide range of products with over 51 SKUs across 8 categories.</p>
                    </div>
                    <div class="card-view">
                        <div class="card">
                            <img src="Images\gyan-toned-milk.png" alt="Milk" />



                            <h2>Milk</h2>
                            <p>A quality nutritious milk that's power packed with essential nutrients,
                                perfect for your healthy and fit lifestyle.
                                This low-calorie treat is easier to digest as well.</p>
                        </div>
                        <div class="card">
                            <img src="Images\ghee-pack-1-Ltr-281x210_0.png" alt="milk" />
                            <h2>Ghee</h2>
                            <p>For your desi andaaz!
                                Gyan Desi Ghee is made using high-quality milk
                                in the most hygienic and safe conditions to ensure purity and quality.
                                Filled with nutrition,
                                it’s a perfect partner for daily consumption.</p>
                        </div>
                        <div class="card">
                            <img src="Images\gyan-lassi.png" alt="Ghee" />
                            <h2>Lassi</h2>
                            <p>Rejuvenate yourself by indulging in the creamy,
                                frothy and tangy taste of Gyan Lassi.
                                A rich refreshing drink,
                                this low-calorie treat is easier to digest as well!
                                Will add a chill to your meal and day that you won’t get enough of!</p>
                        </div>

                        <div class="productSection02">
                            <img src="Images\journey-of-milk-typo-bg.png" alt="lassi" width="100%" />
                        </div>
                    </div>
                </div>

            </main>

        </>
    );
}
export default Home;
