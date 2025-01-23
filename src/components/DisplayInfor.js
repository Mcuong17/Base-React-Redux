import React from "react";
import './DisplayInfor.scss'

class DisplayInfor extends React.Component {

    state = {
        hideUser: true
    }

    handleShowHideUser = () => {
        this.setState({
            hideUser: !this.state.hideUser
        })
    }

    render() {
        // distructuring props
        const { listUser } = this.props
        //DRY: Dont repeat your seft
        //props => properties
        return (
            <div className="display-infor-container"> {/* Khai báo class cha để dùng scss ko bị trùng lặp */}
                <div onClick={(event) => { this.handleShowHideUser(event) }}>{this.state.hideUser ? 'Hide' : 'Show'} list user</div>
                {this.state.hideUser &&
                    <div>
                        {listUser.map((user) => {
                            return (
                                <div key={user.id} className={+user.age > 18 ? 'green' : 'red'}>
                                    <div>My name {user.name}</div>
                                    <div>My age {user.age}</div><hr />
                                </div>
                            )
                        }
                        )}
                    </div>
                }
            </div>
        )
    }
}

export default DisplayInfor