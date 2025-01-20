import React from "react";

class MyComponent extends React.Component {

    state = {
        name:"Cuong",
        address: "Ha Noi",
        age:23
      }
      //Merge state chỉ xảy ra ở class component
    handleClick(event) {
        console.log(this.state);
        this.setState({
            age:Math.floor( Math.random() * 100+1),
        })
    }
    
    handleInputChange(event) {  
       this.setState({
        name: event.target.value
       })
    }

    handleOnSubmit(event) {
        event.preventDefault()
        console.log(this.state)
    }

    /* JSX */
    render() {
        return (
            <div>
                My name is {this.state.name} I from {this.state.address} im {this.state.age}
            <form onSubmit={(event) => {this.handleOnSubmit(event)}}>
                <input 
                    onChange={(event) => {this.handleInputChange(event)}}
                />
                <button >Submit</button>
            </form>
            </div>
        );
    }
}

export default MyComponent