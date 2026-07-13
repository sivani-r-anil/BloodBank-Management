import React, { useState } from 'react'
import NavigationBar from './NavigationBar'
import axios from 'axios'

const AddDonor = () => {

    const[input, changeInput] = useState(
        {
            donor_name: "",
            age:"",
            gender: "",
            blood_group: "",
            phone: "",
            email: "",
            city: "",
            weight_kg: "",
            last_donation_date: ""
        }
    )


    const inputHandeler = (event) => {
        changeInput({ ...input, [event.target.name]: event.target.value })
    }


    const readValue = () => {
        console.log(input)

        axios.post("https://host-demo-app.onrender.com/api/add-donor",input).then(

            (response) => {
                console.log(response.data)
                alert("Donor added Successfully")
            }

        ).catch(


            (error)=>
            {
                console.log("Error adding donor",error)
                alert("Error adding donor")
            }
        )
    }

    return (
        <div>
            <NavigationBar />
            <div className="container">
                <div className="row">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <h2 style={{ color: "#C62828", textAlign: "center", fontFamily: "Montserrat" }}>
                            🩸 ADD DONOR</h2>
                        <div className="row g-3">
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

                                <label htmlFor="" className="form-label">Donor Name</label>
                                <input type="text" className="form-control" name="donor_name" value={input.donor_name} onChange={inputHandeler}/>

                            </div>
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

                                <label htmlFor="" className="form-label">Age</label>
                                <input type="number" className="form-control" name="age" value={input.age} onChange={inputHandeler}/>


                            </div>
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

                                <label htmlFor="" className="form-label">Gender</label>
                                <select name="gender" id="" className="form-control" value={input.gender} onChange={inputHandeler}>
                                    <option value="Male">Male</option>
                                    <option value="Female">Female</option>
                                    <option value="Other">Other</option>
                                </select>


                            </div>
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

                                <label htmlFor="" className="form-label">Blood Group</label>
                                <select name="blood_group" id="" className="form-control" value={input.blood_group} onChange={inputHandeler}>
                                    <option value="A+">A+</option>
                                    <option value="A-">A-</option>
                                    <option value="B+">B+</option>
                                    <option value="B-">B-</option>
                                    <option value="AB+">AB+</option>
                                    <option value="AB-">AB-</option>
                                    <option value="O+">O+</option>
                                    <option value="O-">O-</option>
                                </select>


                            </div>
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

                                <label htmlFor="" className="form-label">Phone</label>
                                <input type="tel" className="form-control" name="phone" value={input.phone} onChange={inputHandeler}/>

                            </div>
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

                                <label htmlFor="" className="form-label">Email</label>
                                <input type="email" className="form-control" name="email" value={input.email} onChange={inputHandeler}/>

                            </div>
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

                                <label htmlFor="" className="form-label">City</label>
                                <input type="text" className="form-control" name="city" value={input.city} onChange={inputHandeler}/>

                            </div>
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

                                <label htmlFor="" className="form-label">Weight(KG)</label>
                                <input type="number" className="form-control" name="weight_kg" value={input.weight_kg} onChange={inputHandeler}/>

                            </div>
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

                                <label htmlFor="" className="form-label">Last donation Date</label>
                                <input type="date" className="form-control" name="last_donation_date" value={input.last_donation_date} onChange={inputHandeler}/>

                            </div>
                            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">

                                <button className="btn btn-primary" onClick={readValue}>ADD</button>

                            </div>
                        </div>
                    </div>
                </div>
            </div>


        </div>
    )
}

export default AddDonor