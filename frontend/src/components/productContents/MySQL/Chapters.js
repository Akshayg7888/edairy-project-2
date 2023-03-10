import { Link } from 'react-router-dom';

const Chapters = () => {
    return (
        <div className="productChapters">
            <ol>
                <li><Link to="/" class="links">Types Of Primary Keys</Link></li>
                <li><Link to="/" class="links">Types of MySQL Queries</Link></li>
                <li><Link to="/" class="links">DataBase Operations</Link></li>
                <li><Link to="/" class="links">Managing Tables</Link></li>
                <li><Link to="/" class="links">MySQL Constraints</Link></li>
            </ol>
        </div>
    );
}

export default Chapters;