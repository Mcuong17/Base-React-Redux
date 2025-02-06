import React, { useState } from "react";
import AddUserInfor from "./AddUserInfor";
import DisplayInfor from "./DisplayInfor";


// class MyComponent extends React.Component {

//     state = {
//         listUser: [
//             {id:1, name:"Manh Cuong", age:"16"},
//             {id:2, name:"Cuong", age:"15"},
//             {id:3, name:"Manh", age:"66"},
//         ]
//     }

//     handleAddNewUser = (objUser) => {
//         this.setState({
//             listUser: [objUser,...this.state.listUser]
//         })
//     }
//     handleDeleteUser = (userId) => {
//         let listUserClone = [...this.state.listUser]
//         listUserClone = listUserClone.filter(item => item.id != userId)
//         this.setState({
//             listUser: listUserClone
//         })
//     }

//     /* JSX */
//     render() {

//         return (
//             <div>
               
//             <AddUserInfor
//                 handleAddNewUser = {this.handleAddNewUser} /* không có dấu () vì chỉ cần tham chiếu đén hàm chứ ko gọi hàm */
//             />
//             <br></br>
//             <DisplayInfor 
//                 listUser = {this.state.listUser}
//                 handleDeleteUser = {this.handleDeleteUser}
                
//             />
//             </div>
//         );
//     }
// }

const MyComponent = () => {

    const [listUser, setListUser] = useState([
        {id:1, name:"Manh Cuong", age:"16"},
        {id:2, name:"Cuong", age:"15"},
        {id:3, name:"Manh", age:"66"},
    ])

        const handleAddNewUser = (objUser) => {
        setListUser([objUser,...listUser])
    }

    const handleDeleteUser = (userId) => {
        let listUserClone = [...listUser]
        listUserClone = listUserClone.filter(item => item.id != userId)
        setListUser(listUserClone)
    }

    return (
        <div>
           
        <AddUserInfor
            handleAddNewUser = {handleAddNewUser} /* không có dấu () vì chỉ cần tham chiếu đén hàm chứ ko gọi hàm */
        />
        <br></br>
        <DisplayInfor 
            listUser = {listUser}
            handleDeleteUser = {handleDeleteUser}
            
        />
        </div>
    );
}

export default MyComponent