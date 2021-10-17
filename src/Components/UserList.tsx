import {FC, useState, useEffect} from 'react';
import UserDetails from '../Components/UserDetails';
import '../Components/UserList.css';
  
const UserList : FC = () => {
    const [users, setUsers] = useState([]);
    const [showPopup, setStatus] = useState(false);
    const [selectedUserId, setSelectedUser] = useState(1);
    
    useEffect(() => {
        fetch('https://reqres.in/api/users').then((response) => response.json()).catch(() => {
            return {"data" : []};
        }).then((response) => {
            setUsers(response.data);
        });
    }, []);
    
    const showUserDetails = (id : number) => {
        closePopup();
        setStatus(true);
        setSelectedUser(id);
    };
    
    const closePopup = () => {
        setStatus(false);
    };
    
    return (
        <div>
            <table className="users-table">
                <thead>
                    <tr>
                        <td>#</td>
                        <td>Name</td>
                        <td>E-Mail</td>
                        <td>Action</td>
                    </tr>
                </thead>
                <tbody>
                    {users.map(({ id, avatar, first_name, last_name, email}) => (
                        <tr key={id}>
                            <td>{id}</td>
                            <td><img src={avatar} width="100" height="100"></img> {first_name} {last_name}</td>
                            <td>{email}</td>
                            <td>
                                <button onClick={() => showUserDetails(id)}>
                                    Show Details
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            {showPopup &&
                <div className="modal">
                    <div className="modal-content">
                        <div className="modal-header">
                            <span className="close" onClick={closePopup}>&times;</span>
                            <h2>User Detils - {selectedUserId}</h2>
                        </div>
                        <div className="modal-body">
                            <UserDetails id={selectedUserId}/>                            
                        </div>
                        <div className="modal-footer">
                        </div>
                    </div>
                </div>}
        </div>
    );
}  
export default UserList;