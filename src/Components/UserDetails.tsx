import {useEffect, useState} from 'react';

interface Props {
    id: number;
};

interface IUserDetails {
    id: number;
    first_name: string;
    last_name: string;
    avatar: string;
    email : string
};

const UserDetails = ({ id } : Props) => {
    const [details, setDetails] = useState({} as IUserDetails);
    useEffect(() => {
        fetch('https://reqres.in/api/users/' + id).then((response) => response.json()).catch(() => {
            return {"data" : []};
        }).then((response) => {
            setDetails(response.data);
        });
    }, [id]);
        
    return (
        <div>
            <img alt="" src={details.avatar}></img>
            <div>ID - {details.id} </div>
            <div>FIRST NAME - {details.first_name} </div>
            <div>LAST NAME - {details.last_name} </div>
            <div>E-MAIL - {details.email} </div>
        </div>
);
}  
export default UserDetails;
