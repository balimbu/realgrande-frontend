import { useNavigate } from "react-router-dom";


const Header = () => {


   let navigate = useNavigate(); // useNavigate is a react hook
   let clickLogoutHandler = () => {
    localStorage.clear();
    navigate('/');
}
let clickLoginHandler = () => {
    navigate('/login');
}

let clickSignupHandler = () => {
    navigate('/signup');
}

return (
    <div>
        <div className="row bg-warning">
            <div className="col-sm-3">
                <img className="img-thumbnail w-25" src='logo.png' alt='logo here'/>
            </div>
            <div className="col-sm-7 mt-5"><h3>Making world a better place.. Houses to Homes</h3></div>
            <div className="col-sm-2 mt-3">                    
                {
                    (localStorage.getItem('name')) ?
                       <div>  <h5> Welcome {localStorage.getItem('name')} !</h5> <button type="button" onClick={clickLogoutHandler} className="btn btn-primary"> Logout</button> </div>
                        :
                        <div>
                            <button type="button" onClick={clickLoginHandler} className="btn btn-primary mx-2"> Login</button>
                            <button type="button" onClick={clickSignupHandler} className="btn btn-success"> SignUp</button>
                       </div>
                }
               
            </div>
        </div>
    </div>
  );
}

export default Header;

