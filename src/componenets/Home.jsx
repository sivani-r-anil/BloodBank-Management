import React from 'react'
import NavigationBar from './NavigationBar'

const Home = () => {
    return (
        <div>
            <NavigationBar />

            <div className="container mt-5">

                <div className="text-center">
                    <h1 className="text-danger fw-bold">🩸 Blood Bank Management System</h1>
                    <p className="fs-5 text-secondary mt-3">
                        Donate Blood. Save Lives.
                    </p>
                    <hr className="w-50 mx-auto" />
                    <p className="mt-4">
                        Welcome to the Blood Bank Management System. This application helps
                        maintain donor records and manage blood donations efficiently,
                        ensuring quick access to donor information whenever needed.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Home