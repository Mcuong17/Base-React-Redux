import React from "react";
import UserInfor from "./UserInfor";
import DisplayInfor from "./DisplayInfor";

class MyComponent extends React.Component {

    state = {
        listUser: [
            {id:1, name:"Manh Cuong", age:"16"},
            {id:2, name:"Cuong", age:"15"},
            {id:3, name:"Manh", age:"66"},
        ]
    }

    /* JSX */
    render() {

        return (
            <div>
            <UserInfor />
            <br></br>
            <DisplayInfor 
                listUser = {this.state.listUser}
            />
            </div>
        );
    }
}

export default MyComponent