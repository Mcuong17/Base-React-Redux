import React from "react";

class DisplayInfor extends React.Component {
    render() {
        // distructuring props
        const {age, name} = this.props
        console.log(this.props)

        //props => properties
        return <div>
           <div>My name {name}</div>
           <div>My age {age}</div>
             </div>
    }
}

export default DisplayInfor