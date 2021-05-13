import React from 'react';
import axios from 'axios';
import { useState, useEffect } from "react";
import { useHistory, useParams } from "react-router-dom";
import { Table, Button, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
// import Card from '@bit/react-bootstrap.react-bootstrap.card';
// import ReactBootstrapStyle from '@bit/react-bootstrap.react-bootstrap.internal.style-links';

function Customerview() {
    let history = useHistory();
    const { _id } = useParams();
    const [userss, setUserss] = useState([]);
    const [date, setDate] = useState();
    useEffect(() => {
        loadcustomer()
    }, []);
    const loadcustomer = async () => {
        const results = await axios.get(`http://localhost:5000/custumers/${_id}`);
        setUserss(results.data);
        setDate(results.data.dob)
    };
    const datebirth = () => {
        if (date) {
            const newDate = new Date(date);
            const finalDate =
                newDate.getDate() + "-" + (newDate.getMonth() + 1) + "-" + newDate.getFullYear();
            return finalDate;
        }
    }
    return (
        <>
            <div className="container py-5">
                <div className="card border-0 shadow pd-4 w-50 mx-auto">
                <div className="hederText pdtb">
                            Customer Details
                        </div>
                    <Card >
                        <Card.Img variant="top" className="mx-auto imgClass w-46" src={userss.file} style={{ width: '15rem !importamt', borderRadius: '127px' }} />
                        <Card.Body>
                            <Card.Title className=" text-center customerName">{userss.firstName} &nbsp;{userss.lastName}</Card.Title>
                            <Card.Text className=" text-center customerdetails">{datebirth()}</Card.Text>
                            <Card.Text>
                                <div className="row">
                                    <div className="col-md-6">
                                        <span className="customerfilds ">Occupation: </span><span className="customerdetails">{userss.occupation}</span>
                                    </div>
                                    <div className="col-md-6">
                                        <span className="customerfilds">Status: </span> <span className="customerdetails"> {userss.status}</span>
                                    </div>
                                </div>
                                <div className="row">
                                    <span className="customerfilds width-auto">Details: </span> <span className="width-auto customerdetails">{userss.bio}</span>
                                </div>
                            </Card.Text>
                            <div className="row">
                                <Link className="btn btn-primary" to="/customerlist">Go to Customers List</Link>
                            </div>
                        </Card.Body>
                    </Card>
                </div>
            </div>
        </>
    )
}
export default Customerview;