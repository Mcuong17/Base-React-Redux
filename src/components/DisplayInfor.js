import React from "react";
import './DisplayInfor.scss'
import logo from '../logo.svg'

class DisplayInfor extends React.Component {

    constructor(props) {
        console.log('>>> call contructor',0)
        super(props);
        this.state = {
            hideUser: true
        }
    }

    componentDidMount() {
        //Hàm này sẽ chạy sau khi mà đã có dữ liệu trong dom
        console.log('>> call me component did mount', 1)
        setTimeout(() => {
            document.title = 'test'
        }, 3000);
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        // nếu không truyền đầu vào thì sẽ ko chạy
        //chạu khi có newState, newProps
        if(this.props.listUser != prevProps) {
            console.log('>> call me component did update', this.props, prevProps)
            if(this.props.listUser.length === 5) {
                console.log('You have 5 user')
            }
        }

    }

    handleShowHideUser = () => {
        this.setState({
            hideUser: !this.state.hideUser
        })
    }

    render() {
        console.log('>> call me render')
        // distructuring props
        const { listUser } = this.props
        //DRY: Dont repeat your seft
        //props => properties
        return (
            <>
            <div className="display-infor-container"> {/* Khai báo class cha để dùng scss ko bị trùng lặp */}
                <div onClick={(event) => { this.handleShowHideUser(event) }}>{this.state.hideUser ? 'Hide' : 'Show'} list user</div>
                {this.state.hideUser &&
                    <div>
                        {listUser.map((user) => {
                            return (
                                <div>
                                    <div key={user.id} className={+user.age > 18 ? 'green' : 'red'}>
                                        <div>My name {user.name}</div>
                                        <div>My age {user.age}</div><hr />
                                    </div>
                                    <button onClick={() => this.props.handleDeleteUser(user.id) }>Delete</button>
                                </div>
                            )
                        }
                        )}
                    </div>
                }
            </div>
            </>
        )
    }
}

export default DisplayInfor