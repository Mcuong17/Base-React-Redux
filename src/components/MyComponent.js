import React from "react";

class MyComponent extends React.Component {

    state = {
        name:"Cuong",
        address: "Ha Noi",
        age:23
      }

    /* JSX */
    render() {
        return (
            <div>
                My name is {this.state.name} I from {this.state.address}
            </div>
        );
    }
}

export default MyComponent