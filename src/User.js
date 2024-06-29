//import React from "react";
import { Component } from "react";
// class User extends React.Component
class User extends Component
    {
        constructor(props)
        {
            console.log("Constructor");
            super(props);
            this.state={
                userInfo:{

                }
               
            }
        }
       async componentDidMount()
        {
            let response=await fetch("https://api.github.com/users/subramani03");
            let data=await response.json();
            console.log("child componetdidmount");
            this.setState({
                userInfo:data,
               
            }
        )
           
        }

        render()
        {
            console.log("render");
            return(
                <div className="User-details">
                    <div className="bio">
                    <h2>Name    :{this.state.userInfo.name}</h2>
                    <h2>Location:{this.state.userInfo.location}</h2>
                    <h2>College :Psgcas,Coimbatore</h2>
                    <h3>{this.state.userInfo.bio}</h3>
                    </div>        
                    <div className="avatar-pic">
                        <img src={this.state.userInfo.avatar_url}></img>
                    </div>
                </div>
            );

        }
       
    }
export default User;