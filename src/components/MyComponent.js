import React from "react";
import UserInfor from "./UserInfor";
import DisplayInfor from "./DisplayInfor";

class MyComponent extends React.Component {

    

    /* JSX */
    render() {

        const myInfo = ['ab','c','c']

        return (
            <div>
            <UserInfor />
            <br></br>
            <DisplayInfor name="Manh Cuong" age="30"/>
            <hr></hr>
            <DisplayInfor name="Cuong" age={50} myInfo={myInfo}/>
            </div>
        );
    }
}

export default MyComponent