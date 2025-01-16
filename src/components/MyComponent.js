import React from "react";

class MyComponent extends React.Component {

    state = {
        name:"Cuong",
        address: "Ha Noi",
        age:23
      }

    handleClick(event) {
        console.log(this.state);
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
                My name is {this.state.name} I from {this.state.address}
                <button onClick={this.handleClick}>Click Me</button>
                <button onMouseOver={this.handeOnmouseOver}>Hover Me</button>
            </div>
        );
    }
}

export default MyComponent