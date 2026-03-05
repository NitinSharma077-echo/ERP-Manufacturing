import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const LoginForm = ({ onSwitch, onClose }) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);
    const { login } = useAuth();
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError("");
        setLoading(true);
        try {
            const response = await axios.post("http://localhost:3000/api/auth/login", { email, password });
            if (response.data.token) {
                login(response.data.user, response.data.token);
                navigate("/dashboard");
            }
        } catch (err) {
            setError(err.response?.data?.message || "Login failed. Please check your credentials.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="w-full animate-in fade-in duration-300">
            <h2 className="text-2xl font-bold mb-6 text-white tracking-tight">Login to your account</h2>
            {error && <p className="mb-4 text-sm text-red-400 bg-red-400/10 p-2 rounded-lg text-center">{error}</p>}
            <form onSubmit={handleSubmit} className="space-y-4">
                <div className="space-y-1">
                    <label className="text-xs font-semibold text-zinc-400 uppercase tracking-wider">Email</label>
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full bg-zinc-800/50 border border-zinc-700 text-white rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500/30 transition-all placeholder:text-zinc-600"
                        placeholder="your@email.com"
                        required
                    />
                </div>
                <div className="space-y-1">
                    <div className="flex justify-between items-center px-1">
                        <label className="text-xs font-semibold text-zinc-400 uppercase tracking-wider">Password</label>
                        <a href="#" className="text-xs text-blue-400 hover:text-blue-300 transition-colors">Forgot?</a>
                    </div>
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="w-full bg-zinc-800/50 border border-zinc-700 text-white rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500/30 transition-all placeholder:text-zinc-600"
                        placeholder="••••••••"
                        required
                    />
                </div>
                <button
                    disabled={loading}
                    type="submit"
                    className="w-full bg-blue-600 hover:bg-blue-500 text-white font-bold py-3.5 rounded-xl transition-all shadow-lg active:scale-[0.98] disabled:opacity-50 mt-4 cursor-pointer"
                >
                    {loading ? "Logging in..." : "Login"}
                </button>
            </form>
            <p className="mt-8 text-sm text-center text-zinc-500 font-medium">
                Don't have an account?{" "}
                <button onClick={onSwitch} className="text-blue-400 hover:text-blue-300 font-bold transition-colors cursor-pointer">Register</button>
            </p>
        </div>
    );
};

const RegisterForm = ({ onSwitch, onClose }) => {
    const [formData, setFormData] = useState({
        username: "",
        email: "",
        password: "",
        confirmPassword: "",
        role: "user"
    });
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);
    const { login } = useAuth();
    const navigate = useNavigate();

    const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError("");
        if (formData.password !== formData.confirmPassword) return setError("Passwords do not match");

        setLoading(true);
        try {
            const { confirmPassword, ...data } = formData;
            const response = await axios.post("http://localhost:3000/api/auth/register", data);
            if (response.data.token) {
                login(response.data.user, response.data.token);
                navigate("/dashboard");
            }
        } catch (err) {
            setError(err.response?.data?.message || "Registration failed. Please try again.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="w-full animate-in fade-in slide-in-from-right-4 duration-300">
            <h2 className="text-2xl font-bold mb-6 text-white tracking-tight">Create an account</h2>
            {error && <p className="mb-4 text-sm text-red-400 bg-red-400/10 p-2 rounded-lg text-center">{error}</p>}
            <form onSubmit={handleSubmit} className="space-y-4">
                <div className="space-y-1">
                    <label className="text-xs font-semibold text-zinc-400 uppercase tracking-wider">Username</label>
                    <input
                        type="text"
                        name="username"
                        value={formData.username}
                        onChange={handleChange}
                        className="w-full bg-zinc-800/50 border border-zinc-700 text-white rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500/30 transition-all placeholder:text-zinc-600"
                        placeholder="johndoe123"
                        required
                    />
                </div>
                <div className="space-y-1">
                    <label className="text-xs font-semibold text-zinc-400 uppercase tracking-wider">Email</label>
                    <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full bg-zinc-800/50 border border-zinc-700 text-white rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500/30 transition-all placeholder:text-zinc-600"
                        placeholder="your@email.com"
                        required
                    />
                </div>
                <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-1">
                        <label className="text-xs font-semibold text-zinc-400 uppercase tracking-wider">Password</label>
                        <input
                            type="password"
                            name="password"
                            value={formData.password}
                            onChange={handleChange}
                            className="w-full bg-zinc-800/50 border border-zinc-700 text-white rounded-xl px-4 py-3 outline-none focus:ring-1 focus:ring-blue-500/30 transition-all placeholder:text-zinc-600"
                            placeholder="••••••••"
                            required
                        />
                    </div>
                    <div className="space-y-1">
                        <label className="text-xs font-semibold text-zinc-400 uppercase tracking-wider">Confirm</label>
                        <input
                            type="password"
                            name="confirmPassword"
                            value={formData.confirmPassword}
                            onChange={handleChange}
                            className="w-full bg-zinc-800/50 border border-zinc-700 text-white rounded-xl px-4 py-3 outline-none focus:ring-1 focus:ring-blue-500/30 transition-all placeholder:text-zinc-600"
                            placeholder="••••••••"
                            required
                        />
                    </div>
                </div>
                <button
                    disabled={loading}
                    type="submit"
                    className="w-full bg-blue-600 hover:bg-blue-500 text-white font-bold py-3.5 rounded-xl transition-all shadow-lg active:scale-[0.98] disabled:opacity-50 mt-4 cursor-pointer"
                >
                    {loading ? "Creating Account..." : "Register"}
                </button>
            </form>
            <p className="mt-8 text-sm text-center text-zinc-500 font-medium">
                Already have an account?{" "}
                <button onClick={onSwitch} className="text-blue-400 hover:text-blue-300 font-bold transition-colors cursor-pointer">Login</button>
            </p>
        </div>
    );
};

const AuthModal = ({ isOpen, initialMode = "login", onClose }) => {
    const [mode, setMode] = useState(initialMode);

    useEffect(() => {
        setMode(initialMode);
    }, [initialMode, isOpen]);

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            {/* Background Overlay */}
            <div
                className="absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity animate-in fade-in duration-300"
                onClick={onClose}
            />

            {/* Modal Container */}
            <div className="relative w-full max-w-md bg-zinc-900 border border-zinc-800 rounded-3xl overflow-hidden shadow-2xl animate-in zoom-in-95 duration-300 transition-all">
                {/* Close Button */}
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 text-zinc-500 hover:text-white transition-colors p-2"
                >
                    ✕
                </button>

                <div className="p-8">
                    {mode === "login" ? (
                        <LoginForm onSwitch={() => setMode("register")} onClose={onClose} />
                    ) : (
                        <RegisterForm onSwitch={() => setMode("login")} onClose={onClose} />
                    )}
                </div>
            </div>
        </div>
    );
};

export default AuthModal;
