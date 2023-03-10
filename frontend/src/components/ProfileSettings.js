import { Link } from 'react-router-dom';

const loggedInFlag = sessionStorage.getItem("user") != null;

const ProfileSettings = (props) => {
    return (
        <div class="profileContainer">
            <div class="profileSidebar">
                <ol>
                    <li><Link to="/" class="links">Home</Link></li>
                    <li><Link to="/profile" class="links">Profile</Link></li>
                    <li><Link to="/profile/products" class="links">Products</Link></li>
                    <li><Link to="/profile/settings" class="links active">Settings</Link></li>
                </ol>
            </div>
            {loggedInFlag ?
                <div class="settingsContainer">
                    <form action="">
                        <h3>Update Password</h3>
                        <table>
                            <tr>
                                <td><label for="">Old Password</label></td>
                                <td><input type="password" name="pass" id="" placeholder="*******" required /><br /></td>
                            </tr>

                            <tr>
                                <td><label for="">New Password</label></td>
                                <td><input type="password" name="pass" id="" placeholder="*******" required /><br /></td>
                            </tr>

                            <tr>
                                <td><label for="">ReType New Password</label></td>
                                <td><input type="password" name="pass" id="" placeholder="*******" required /><br /></td>
                            </tr>

                            <tr>
                                <td><input type="submit" value="Edit" /> <br /></td>
                            </tr>
                        </table>
                    </form>
                </div> :
                <div className='profileMainDiv'>
                    <form className='notLoggedIn'>
                        <h3>You are not logged in.</h3>
                        <Link to="/login" class="links">Click here to login?</Link>
                    </form>
                </div>
            }
        </div >
    );
}
export default ProfileSettings;