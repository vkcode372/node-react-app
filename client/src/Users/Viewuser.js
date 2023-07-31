import { useEffect, useState } from 'react'
import React from 'react'
import { useParams } from 'react-router-dom'

const Viewuser = () => {
    const [userinfo, setuserinfo] = useState({});
    const { id } = useParams();

    useEffect(() => {
        ViewSingleUser();
    }, []);

    const ViewSingleUser = async () => {
        try {
            const SingalUserData = await fetch(`http://localhost:8080/getuser/${id}`);
            const result = await SingalUserData.json();
            setuserinfo(result);
        } catch (error) {
            console.log(error);
        }
    };
    return (
        <div className='container'>
            <h1>Student List</h1>
            <table className="table  border shadow table-hover">
                <thead className='table-dark'>
                    <tr>
                        <th scope="col">NO</th>
                        <th scope="col">Name</th>
                        <th scope="col">Email</th>
                        <th scope="col">Phone</th>
                        <th scope="col">Address</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th scope="row">1</th>
                        <td>{userinfo.name}</td>
                        <td>{userinfo.email}</td>
                        <td>{userinfo.phone}</td>
                        <td>{userinfo.address}</td>
                    </tr>


                </tbody>
            </table>
        </div>
    );
}

export default Viewuser

