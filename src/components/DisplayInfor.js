import React from "react";

class DisplayInfor extends React.Component {
    render() {
        // distructuring props
        const { listUser } = this.props
        //DRY: Dont repeat your seft
        //props => properties
        return <div>

            {listUser.map((user) =>
                <div key={user.id}>
                    <div>My name {user.name}</div>
                    <div>My age {user.age}</div><hr />
                </div>
            )}
        </div>
    }
}

export default DisplayInfor