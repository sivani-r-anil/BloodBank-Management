import React, { useEffect, useState } from 'react'
import NavigationBar from './NavigationBar'
import axios from 'axios'

const ViewDonor = () => {

    const [data, changeData] = useState([])

    const fetchData = () => {
        axios.get("https://host-demo-app.onrender.com/api/donors").then(
            (response) => {
                changeData(response.data)
            }
        ).catch(

            (error) => {
                console.log(error)

            }

        )
    }

    useEffect(
        () => {
            fetchData()
        }, []
    )


    return (
        <div>
            <NavigationBar />
            <h2 style={{ color: "#C62828", textAlign: "center", fontFamily: "Montserrat" }}>
                            🩸 VIEW DONOR</h2>
            <table class="table">
                <thead>
                    <tr>
                        <th scope="col">Donor Name</th>
                        <th scope="col">Age</th>
                        <th scope="col">Gender</th>
                        <th scope="col">Blood Group</th>
                        <th scope="col">Phone</th>
                        <th scope="col">Email Id</th>
                        <th scope="col">City</th>
                        <th scope="col">Weight</th>
                        <th scope="col">Last Donation Date</th>


                    </tr>
                </thead>
                <tbody>

                    {data.map(

                        (data, index) => {
                            return (
                                <tr>
                                    <td>{data.donor_name}</td>
                                    <td>{data.age}</td>
                                    <td>{data.gender}</td>
                                    <td>{data.blood_group}</td>
                                    <td>{data.phone}</td>
                                    <td>{data.email}</td>
                                    <td>{data.city}</td>
                                    <td>{data.weight_kg}</td>
                                    <td>{data.last_donation_date}</td>

                                </tr>
                            )
                        }

                    )}

                </tbody>
            </table>


        </div>
    )
}

export default ViewDonor