import User from "./User";
import { Component } from "react";
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
        console.log("parent render")
        return (
            <div className="About">
                <h1>About User </h1>
                <User/>
            </div>
    
        );

    }
    
};

export default AboutUs;