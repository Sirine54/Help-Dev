
import { Link} from "react-router-dom";
import {ImCancelCircle} from "react-icons/im"
import cancel from '../../assets/cancel.svg'
const Cancel = () => {
    return (
      <>
      <Link to="/" spy={true} smooth={true}>
      <h1 className="homePage">Home</h1>
    </Link>
      <div className="messagePay">
       <ImCancelCircle id="ImCancelCircle"></ImCancelCircle>
        <h1>Cancel</h1>
        <h2>Your payment was canceled.</h2>
        <img src={cancel} alt="" srcset="" className="payImg"/>
      </div>
      </>
    );
  };
  
  export default Cancel;
  