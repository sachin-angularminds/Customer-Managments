import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { Table } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import swal from 'sweetalert';

function Customerlist() {
    const [userss, setUserss] = useState([]);
    useEffect(() => {
        loadUsers();
    }, []);
    const loadUsers = async () => {
        const results = await axios.get('http://localhost:5000/custumers');
        setUserss(results.data.reverse());
        console.log(userss);
    }
    // For Delete Customer
    const deletUser = async (id) => {
        await
            swal({
                title: "Are you sure?",
                icon: "warning",
                buttons: true,
                dangerMode: true,
            })
                .then((deletUser) => {
                    if (deletUser) {
                        axios.delete(`http://localhost:5000/custumers/${id}`);
                        loadUsers();
                        swal("Custumers has been deleted!", {
                            icon: "success",
                        });
                    } 
                });
        loadUsers();
    }
    return (
        <div className="scrollTabel tabelpadding">
            <div className="hederText">
                Customers List
            </div>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Status</th>
                        <th>Occupation</th>
                        <th className="text-center">Action</th>
                    </tr>
                </thead>
                <tbody>
                 {userss.map((comments, index) => (
                    <tr>
                        <th scope="row">{index + 1}</th>
                        <td>{comments.firstName}</td>
                        <td>{comments.lastName}</td>
                        <td>{comments.status}</td>
                        <td>{comments.occupation}</td>
                        <td className="text-center">
                            <Link className="btn btn-primary" data-testid='viewbutton' to={`/customerview/${comments._id}`}>View</Link> &nbsp;
                            <Link className="btn btn-primary" to={`/customeredit/${comments._id}`}>Edit</Link> &nbsp;
                            <Link className="btn btn-danger" onClick={() => deletUser(comments._id)}>Delete</Link>
                        </td>
                    </tr>
                   ))}
                </tbody>
            </Table>

        </div>
    )
}

export default Customerlist;
