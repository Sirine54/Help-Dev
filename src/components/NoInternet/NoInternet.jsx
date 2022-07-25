import React,{useState,useEffect} from "react";


const NoInternet = (props) => {
    // state variable holds the state of the internet connection
    const [isOnline, setOnline] = useState(true);

    // On initization set the isOnline state.
    useEffect(()=>{
        setOnline(navigator.onLine)
    },[])
  
    // event listeners to update the state 
    window.addEventListener('online', () => {
        setOnline(true)
    });

    window.addEventListener('offline', () => {
        setOnline(false)
    });

    // if user is online, return the child component else return a custom component
    if(isOnline){
    return(
        props.children
    )
    } else {
        return(<h1>No Internet Connection. Please try again later.
                <br></br><small>Just kidding it's a demo page, wait you'll be redirected in a second</small></h1>    )
    }
}

export default NoInternet;