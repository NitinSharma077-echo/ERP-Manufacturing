import React from "react";
import { useNavigate, Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const Navbar = () => {
    const { user, logout, openAuthModal } = useAuth();
    const navigate = useNavigate();

    const handleLogout = () => {
        logout();
        navigate("/login");
    };

    return (
        <nav className="fixed top-0 left-0 right-0 z-40 bg-zinc-950/80 backdrop-blur-md border-b border-zinc-900 px-6 py-4">
            <div className="max-w-7xl mx-auto flex items-center justify-between font-sans">
                {/* Logo */}
                <Link to="/" className="text-2xl font-black text-white tracking-tighter hover:text-blue-300 transition-colors">
                    ERP<span className="text-blue-600 hover:text-blue-300">.</span>
                </Link>

                {/* Desktop Menu */}
                <div className="hidden md:flex items-center gap-8">
                    <Link to="/" className="text-sm font-semibold text-zinc-400 hover:text-white transition-colors">Home</Link>
                    <Link to="/features" className="text-sm font-semibold text-zinc-400 hover:text-white transition-colors">Features</Link>
                    <Link to="/contact" className="text-sm font-semibold text-zinc-400 hover:text-white transition-colors">Contact</Link>
                    <Link to="/dashboard" className="text-sm font-semibold text-zinc-400 hover:text-white transition-colors">Dashboard</Link>
                </div>

                {/* Auth Buttons */}
                <div className="flex items-center gap-4">
                    {user ? (
                        <div className="flex items-center gap-4">
                            <span className="text-zinc-400 text-sm hidden sm:block">Welcome, <span className="text-white font-bold">{user.username}</span></span>
                            <button
                                onClick={handleLogout}
                                className="bg-zinc-800 hover:bg-zinc-700 text-white px-5 py-2.5 rounded-xl text-sm font-bold transition-all border border-zinc-700 active:scale-95 cursor-pointer"
                            >
                                Logout
                            </button>
                        </div>
                    ) : (
                        <div className="flex items-center gap-3">
                            <button
                                onClick={() => openAuthModal("login")}
                                className="text-sm font-bold text-zinc-400 hover:text-blue-600 px-4 py-2.5 transition-colors cursor-pointer"
                            >
                                Sign In
                            </button>
                            <button
                                onClick={() => openAuthModal("register")}
                                className="bg-blue-600 hover:bg-blue-500 text-white px-6 py-2.5 rounded-xl text-sm font-bold transition-all shadow-[0_10px_20px_rgba(37,99,235,0.2)] active:scale-95 whitespace-nowrap cursor-pointer"
                            >
                                Register Now
                            </button>
                        </div>
                    )}
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
