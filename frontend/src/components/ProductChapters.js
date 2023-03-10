import { Link } from 'react-router-dom';

const ProductChapters = (props) => {
    return (
        <div class="productChapters">
            <ol>
                <li><Link to="/" class="links">Home</Link></li>
                <li><Link to="/profile" class="links active">Profile</Link></li>
                <li><Link to="/profile/Products" class="links">My Products</Link></li>
                <li><Link to="/profile/settings" class="links">Settings</Link></li>
            </ol>
        </div>
    );
}
export default ProductChapters;