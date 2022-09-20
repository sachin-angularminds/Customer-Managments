import React from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import classNames from 'classnames';
import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import swal from 'sweetalert';
import { Redirect, useHistory } from 'react-router';

function Customerform() {
    let history = useHistory();
    const { register, handleSubmit, formState: { errors }, setValue } = useForm();
    const [startDate, setStartDate] = useState();

    const onSubmit = async (data) => {
        const formData = new FormData()
        formData.append("file", data.file[0]);
        formData.append("firstName", data.firstName);
        formData.append("lastName", data.lastName);
        formData.append("occupation", data.occupation);
        formData.append("dob", data.dob);
        formData.append("bio", data.bio);
        formData.append("status", data.status);

        const res = await fetch("http://localhost:5000/custumers", {
            method: "POST",
            body: formData
            }).then(res => res.json())
            swal({
            title: "Customer Added successfully",
            icon: "success",
            button: "Ok",
            })
            .then((value) => {
                history.push('./customerlist')
            });
        };
    return (
        <>
            <div className="container py-5">
                <div className="card border-0 shadow p-4 w-50 mx-auto">
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="hederText">
                            Add Customer new one
                        </div>
                        <div className="form-group">
                            <label htmlFor="firstName">First Name</label>
                            <input type="text" className={classNames("form-control", { "is-invalid": errors.firstName })} id="firstName" placeholder="First Name"
                                {...register('firstName', { required: "First Name is required", minLength: { value: 2, message: "Minimun 2 Charater is required" } })} />
                            {errors.firstName &&
                                (<div className="invalid-feedback">{errors.firstName.message}</div>
                                )}
                        </div>
                        <div className="form-group">
                            <label htmlFor="lastName">Last Name</label>
                            <input type="text" className={classNames("form-control", { "is-invalid": errors.lastName })} id="lastName" placeholder="Last Name"
                                {...register('lastName', { required: "Last Name is required", minLength: { value: 2, message: "Minimun 2 Charater is required" } })} />
                            {errors.lastName &&
                                (<div className="invalid-feedback">{errors.lastName.message}</div>
                                )}
                        </div>
                        <div className="from-group" style={{ marginBottom: " 1rem" }}>
                            <label htmlFor="occupation">Occupation</label>
                            <select id="occupation" placeholder="Select Occupation" className={classNames("custom-select form-control", { "is-invalid": errors.occupation })} {...register('occupation', { required: "Occupation is required" })}>
                                <option value="">Select Occupations</option>
                                <option value="Employed">Employed</option>
                                <option value="Business">Business</option>
                                <option value="Student">Students</option>
                            </select>
                            {errors.occupation &&
                                (<div className="invalid-feedback">{errors.occupation.message}</div>
                                )}
                        </div>
                        <div className="form-group">
                            <label htmlFor="dob">Date Of Birth</label>
                            <DatePicker
                                placeholderText="Select Date"
                                isClearable
                                dateFormat="dd-MM-yyyy"
                                {...register('dob', { required: "Date of Birth is required", })}
                                className={classNames("form-control mr-l-20", { "is-invalid": errors.dob })}
                                selected={startDate}
                                onChange={(val) => {
                                    setStartDate(val);
                                    setValue("dob", val);
                                }}
                                // showTimeSelect
                                // timeFormat="HH:mm"
                                // timeIntervals={15}
                                // timeCaption="time"
                                // dateFormat="MM-dd-yyyy h:mm"
                            />
                            {errors.dob &&
                              (<div className="invalid-feedback">{errors.dob.message}</div>
                              )}
                        </div>
                        <div className="form-group" style={{ marginBottom: " 1rem" }}>
                            <label htmlFor="bio">Details</label>
                            <textarea className={classNames("form-control", { "is-invalid": errors.bio })} id="bio" placeholder="Your Details"
                                {...register('bio', { required: "Details is required" })} />
                            {errors.bio &&
                                (<div className="invalid-feedback">{errors.bio.message}</div>
                                )}
                        </div>
                        <div className="form-group" style={{ marginBottom: " 1rem" }}>
                            <label htmlFor="file">Profile Picture</label><br></br>
                            <input type="file" data-testid="file" className={classNames({ "is-invalid": errors.file })} {...register('file', { required: "File is required" })} />
                            {errors.file &&
                                (<div className="invalid-feedback">{errors.file.message}</div>
                                )}
                        </div>
                        <div className="from-group">
                            <label htmlFor="status">Status</label>
                            <div className="form-check form-check-inline mr-l-20">
                                <input className="form-check-input" type="radio" data-testid="Active" value="Active" {...register('status', { required: "Status is required" })} />
                                <label className="form-check-label" htmlFor="Active">Active</label>
                            </div>
                            <div className="form-check form-check-inline">
                                <input className="form-check-input" type="radio" data-testid="Inactive" value="Inactive" {...register('status', { required: "Status is required" })} />
                                <label className="form-check-label" htmlFor="Inactive">InActive</label>
                            </div>
                            {errors.status &&
                                (<div className="invalid-feedback">{errors.status.message}</div>
                                )}
                        </div>
                        <div className="form-group text-center">
                            <button type="submit" className="btn btn-primary">Submit</button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}
export default Customerform;