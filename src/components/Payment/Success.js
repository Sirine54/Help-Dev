import { Link} from "react-router-dom";
import {MdDoneAll} from "react-icons/md"
import payment from '../../assets/success_pay.svg'

const Success = () => {
    return (
      <>
      <Link to="/" spy={true} smooth={true}>
      <h1 className="homePage">Home</h1>
    </Link>
      <div className="messagePay">
        <MdDoneAll id="MdDoneAll"></MdDoneAll>
        <h1>Success</h1>
        <h2>Thank you for your purchase!</h2>
        <img src={payment} alt="" srcset="" className="payImg"/>
      </div>
      </>
    );
  };
  
  export default Success;
  