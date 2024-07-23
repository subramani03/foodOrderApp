import User from "./User";
import { Component } from "react";
import UserContext from "./utils/UserContext";
class AboutUs extends Component
{
    constructor(props)
    {
        super(props);
        console.log("parent constructor")

    }
    componentDidMount()
    {
        console.log("Parent componentDidMount");
    }
    render()
    {
        console.log("parent render")//to use context in class component w3e use <.consumer> component inside that we use callback function 
        return (
            <div className="About">
                <h1>About User </h1>
                <UserContext.Consumer>
                {({loggedInUser})=>(<h4>{loggedInUser}</h4>)}
                </UserContext.Consumer>
               
                <User/>
            </div>
    
        );

    }
    
};

export default AboutUs;