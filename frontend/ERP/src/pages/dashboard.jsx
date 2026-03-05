import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar.jsx";
import { Bar } from "react-chartjs-2";
import { Chart as ChartJS, BarElement, CategoryScale, LinearScale, Tooltip, Legend } from "chart.js";

ChartJS.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend);

function DashBoard() {

    const [chartData, setChartData] = useState({
        labels: [],
        datasets: []
    });

    useEffect(() => {
        setChartData({
            labels: ["January", "February", "March", "April", "May"],
            datasets: [
                {
                    label: "Sales",
                    data: [120, 190, 300, 250, 220],
                    backgroundColor: "rgba(75,192,192,0.6)"
                }
            ]
        });
    }, []);

    return (
        <div className="bg-white min-h-screen w-full">

            {/* Navbar */}
            <Navbar />

            {/* Content */}
            <div className="pt-24 px-10">

                {/* Title */}
                <h1 className="text-3xl font-bold text-black mb-10">
                    Dashboard
                </h1>

                {/* Chart */}
                <div className="bg-white shadow-lg rounded-lg p-6 w-[700px]">
                    <Bar data={chartData} />
                </div>

            </div>

        </div>
    );
}

export default DashBoard;