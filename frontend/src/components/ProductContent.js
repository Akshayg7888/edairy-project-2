import { Link } from 'react-router-dom';
import ProductChapters from './ProductChapters';
import ProductChapterBody from './ProductChapterBody';
import MySQLChapters from '../productContents/MySQL/Chapters'
const ProductContent = (props) => {
    return (
        <div className='productContentPanel'>
            <div className='productContentHeading'>
                <img src='Images\gyan-toned-milk.png' alt='Product' height='100px' width='100px' />
                <h3>Milk</h3>
            </div>
            <div className='productContent'>
                <MySQLChapters />
                <ProductChapterBody />
            </div>
        </div>
    );
}
export default ProductContent;