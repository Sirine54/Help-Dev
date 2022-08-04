import React from 'react'
import './JobListing.css'
function Details(props){
 const { 
    recent,
    featured,
    position,
    postedAt,
    contract,
    location,
    languages,
    tools}=props;

 {
  const Skills = ({skill}) => (<div className="tag rounded-md p-1 px-2 m-2 skills">
  <span>
      {skill}
  </span>
  </div>)





  return (
    <div className='details'>
    <div className="flex-1 px-4 py-2">
        <div className="flex flex-grow">
   
            {recent ? <p className="tags new-tag rounded-3 px-2 p-1 m-1">new</p> : null}
            {featured ? <p className="tags new-tag rounded-xl px-2 p-1 m-1">featured</p> : null}
        </div>
        <p className="heading my-2">{position}</p>
        <div className="flex flex-grow ">
            <small className="posted">{postedAt}</small>
            <small className="contract"> {contract}</small>
            <small className="location">{location}</small>
        </div>
    </div>
 <div className="tags flex flex-1 justify-center items-end" >  
        {
         [...languages, ...tools].map( skill => <Skills skill={skill}key={skill} />)
        }
    </div>
    </div>
  )
}}

export default Details