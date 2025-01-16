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
    handeOnmouseOver(event) {
        console.log('====================================');
        console.log(event.pageX);
        console.log('====================================');
    }  

    /* JSX */
    render() {
        return (
            <div>
                My name is {this.state.name} I from {this.state.address} im {this.state.age}
                <button onClick={(event) => {this.handleClick(event)}}>Click Me</button>
                <button onMouseOver={this.handeOnmouseOver}>Hover Me</button>
            </div>
        );
    }
}

export default MyComponent