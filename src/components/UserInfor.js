import React from "react";

class UserInfor extends React.Component {

    state = {
        name:"Cuong",
        address: "Ha Noi",
        age:23
      }
      //Merge state chỉ xảy ra ở class component
    handleClick(event) {
        // console.log(this.state);
        // this.setState({
        //     age:Math.floor( Math.random() * 100+1),
        // })
    }
    
    handleInputChangeName(event) {  
       this.setState({
        name: event.target.value
       })
    }
    handleInputChangeAge(event) {  
        this.setState({
         age: event.target.value
        })
     }

    handleOnSubmit(event) {
        event.preventDefault()
        console.log(this.state)
    }


  render() {
    return <div>
        My name is {this.state.name} I from {this.state.address} im {this.state.age}
            <form onSubmit={(event) => {this.handleOnSubmit(event)}}>
                <label>Your name: </label>
                <input
                    value={this.state.name}
                    type="text" 
                    onChange={(event) => {this.handleInputChangeName(event)}}
                />
                 <label>Your age: </label>
                <input
                    value={this.state.age}
                    type="text" 
                    onChange={(event) => {this.handleInputChangeAge(event)}}
                />
                <button >Submit</button>
            </form>
    </div>;
  }
}

export default UserInfor;
