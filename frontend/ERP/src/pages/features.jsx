import React from "react";
import Navbar from "../components/Navbar";

const Features = () => {
    const features = [
        {
            title: "User Management",
            description: "Manage users, roles, and permissions efficiently."
        },
        {
            title: "Inventory Management",
            description: "Track products, stock levels, and inventory updates."
        },
        {
            title: "Order Management",
            description: "Create, manage, and monitor customer orders easily."
        },
        {
            title: "Reports & Analytics",
            description: "Generate reports and analyze business performance."
        },
        {
            title: "Finance Management",
            description: "Handle invoices, payments, and financial records."
        },
        {
            title: "Dashboard",
            description: "Get real-time insights with an interactive dashboard."
        }
    ];

    return (
        <div>
            <Navbar />

            <div className="bg-zinc-950 min-h-screen px-6 py-30 ">

                <div className="text-center mb-10">
                    <h1 className="text-4xl font-bold text-white tracking-tight hover:text-blue-300 transition-colors">
                        Features
                    </h1>
                    <p className="text-zinc-400 mt-2 hover:text-white transition-colors">
                        Features of this ERP system are listed below
                    </p>
                </div>

                {/* Feature Grid */}
                <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-6">
                    {features.map((feature, index) => (
                        <div
                            key={index}
                            className="bg-zinc-900 p-6 rounded-lg shadow-lg hover:bg-zinc-800 transition duration-300"
                        >
                            <h2 className="text-xl font-semibold text-white mb-2">
                                {feature.title}
                            </h2>
                            <p className="text-zinc-400 text-sm">
                                {feature.description}
                            </p>
                        </div>
                    ))}
                </div>

            </div>
        </div>
    );
};

export default Features;