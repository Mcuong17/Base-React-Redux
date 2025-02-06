import React, { useState } from "react";
import './DisplayInfor.scss'

//Stateless: ko có state, stateful: có state
// class DisplayInfor extends React.Component {

//     render() {
//         console.log('>> call me render')
//         // distructuring props
//         const { listUser } = this.props
//         //DRY: Dont repeat your seft
//         //props => properties
//         return (
//             <>
//             <div className="display-infor-container"> {/* Khai báo class cha để dùng scss ko bị trùng lặp */}
//                 <div onClick={(event) => { this.handleShowHideUser(event) }}>{this.state.hideUser ? 'Hide' : 'Show'} list user</div>
//                 {true &&
//                     <div>
//                         {listUser.map((user) => {
//                             return (
//                                 <div>
//                                     <div key={user.id} className={+user.age > 18 ? 'green' : 'red'}>
//                                         <div>My name {user.name}</div>
//                                         <div>My age {user.age}</div><hr />
//                                     </div>
//                                     <button onClick={() => this.props.handleDeleteUser(user.id) }>Delete</button>
//                                 </div>
//                             )
//                         }
//                         )}
//                     </div>
//                 }
//             </div>
//             </>
//         )
//     }
// }


const DisplayInfor = (props) => {
    // distructuring props
    const { listUser } = props
    //DRY: Dont repeat your seft
    //props => properties
    const [isShowHideListUser, setShowHideListUser] = useState(true);

    const handleShowHideListUser = () => {
        setShowHideListUser(!isShowHideListUser)
    }

    return (
        <>
        <div>
            <span onClick={() => handleShowHideListUser()}>{isShowHideListUser ? 'Hide list user' : 'Show list user'}</span>
        </div>
        <div className="display-infor-container"> {/* Khai báo class cha để dùng scss ko bị trùng lặp */}
            {isShowHideListUser &&
                <div>
                    {listUser.map((user) => {
                        return (
                            <div>
                                <div key={user.id} className={+user.age > 18 ? 'green' : 'red'}>
                                    <div>My name {user.name}</div>
                                    <div>My age {user.age}</div><hr />
                                </div>
                                <button onClick={() => props.handleDeleteUser(user.id) }>Delete</button>
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

export default DisplayInfor