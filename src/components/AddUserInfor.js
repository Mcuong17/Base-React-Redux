import React, { useState } from "react";

// class AddUserInfor extends React.Component {

//     state = {
//         name:"",
//         address: "Ha Noi",
//         age:''
//       }
//       //Merge state chỉ xảy ra ở class component
//     handleClick(event) {
        
//     }
    
//     handleInputChangeName(event) {  
//        this.setState({
//         name: event.target.value
//        })
//     }
//     handleInputChangeAge(event) {  
//         this.setState({
//          age: event.target.value
//         })
//      }

//     handleOnSubmit(event) {
//         event.preventDefault()
//         this.props.handleAddNewUser({
//             id: Math.floor(Math.random()*100 +1) + '-random',
//             name:this.state.name,
//             age: this.state.age
//         })
//     }


//   render() {
//     return <div>
//         My name is {this.state.name} I from {this.state.address} im {this.state.age}
//             <form onSubmit={(event) => {this.handleOnSubmit(event)}}>
//                 <label>Your name: </label>
//                 <input
//                     value={this.state.name}
//                     type="text" 
//                     onChange={(event) => {this.handleInputChangeName(event)}}
//                 />
//                  <label>Your age: </label>
//                 <input
//                     value={this.state.age}
//                     type="text" 
//                     onChange={(event) => {this.handleInputChangeAge(event)}}
//                 />
//                 <button >Submit</button>
//             </form>
//     </div>;
//   }
// }

const AddUserInfor = (props) => {

      const [name, setName] = useState("");
      const [address, setAddress] = useState("Ha Noi");
      const [age, setAge] = useState("");

    const handleInputChangeName = (event) => {  
       setName(event.target.value)
    }
    const handleInputChangeAge =(event) => {  
        setAge(event.target.value)
     }

    const handleOnSubmit = (event) => {
        event.preventDefault()
        props.handleAddNewUser({
            id: Math.floor(Math.random()*100 +1) + '-random',
            name:name,
            age: age
        })
    }

    return <div>
        My name is {name} I from {address} im {age}
            <form onSubmit={(event) => handleOnSubmit(event)}>
                <label>Your name: </label>
                <input
                    value={name}
                    type="text" 
                    onChange={(event) => handleInputChangeName(event)}
                />
                 <label>Your age: </label>
                <input
                    value={age}
                    type="text" 
                    onChange={(event) => handleInputChangeAge(event)}
                />
                <button >Submit</button>
            </form>
    </div>;
}

export default AddUserInfor;
