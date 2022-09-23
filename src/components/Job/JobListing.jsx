import React,{useState,useEffect} from 'react'
import './JobListing.css'
import Data from './data/dataJob.json'
import code from "../../assets/code.png";
import { NavLink } from "react-router-dom";
import Details from './Details';
import { DotLoader } from "react-spinners";
import {AiOutlineHome} from 'react-icons/ai';
import { list } from 'firebase/storage';


export const userContext=React.createContext();

function JobListing() {


    const[jobList,setJoblist]=useState([])
    useEffect(()=>{
      setJoblist(Data)
    })
    console.log(jobList)
    const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);

const[word,setWord]=useState('')

  return (

    <>
    {loading ? (
      <DotLoader
       className="loading_page"
       size={150}
       color={"var(--dark-orange)"}
       loading={loading}
     />
) : (
    <div className='JobListing '>
     
        <div className='headerJob'>
        <nav className= "nav-links-scroll">
      <NavLink to="/" className="iconPart">
        <img src={code} className="icon" />
        <h3 id="devIconHelp">DevHelp</h3>
      </NavLink>

      <ul className="header-lists">
        <li>
          <NavLink
            activeClass="active"
            to="/"
            spy={true}
            smooth={true}
            offset={-100}
            duration={500}
          >
            Home
          </NavLink>
        </li>
      </ul>

      <NavLink
            activeClass="active"
            to="/"
            spy={true}
            smooth={true}
            offset={-100}
            duration={500}
            id="back"
          >
           <AiOutlineHome></AiOutlineHome>
          </NavLink>
    </nav>
        </div>

        <div className='JobCards'>
        { jobList.map((list)=>{
            return(
              
                <div className='JobBox'>
                    <img src={list.logo} alt="" className='imgJob p-2 m-3'/>
                    <Details
                    recent={list.new}
                    featured={list.featured}
                    position={list.position}
                    postedAt={list.postedAt}
                    contract={list.contract}
                    location={list.location}
                    languages={list.languages}
                    tools={list.tools}
                  
                    />
               
                    <NavLink to="/Form" className='applyBtn' onClick={()=> 

console.log('clicked')
                      // console.log(list.position,"location",list.location)
                      }>apply</NavLink>
                </div>
                
            )})}
         
    </div>
       
    </div>
     )}
     
    </>
  )
}

export default JobListing