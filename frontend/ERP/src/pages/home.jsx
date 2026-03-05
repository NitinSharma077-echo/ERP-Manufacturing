import React from "react";
import Navbar from "../components/Navbar.jsx";
import { useAuth } from "../context/AuthContext";

function Home() {
    const { openAuthModal } = useAuth();

    return (
        <div className="min-h-screen w-full bg-zinc-950 text-white overflow-x-hidden relative">
            <Navbar />

            {/* Background Effects */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-[10%] left-[5%] w-[40%] h-[40%] bg-blue-600/10 rounded-full blur-[160px]" />
                <div className="absolute bottom-[20%] right-[10%] w-[50%] h-[50%] bg-indigo-600/10 rounded-full blur-[160px]" />
            </div>

            {/* Hero Section */}
            <main className="relative z-10 pt-32 pb-20 px-6 max-w-7xl mx-auto flex flex-col items-center justify-center text-center">
                <div className="inline-flex items-center gap-2 bg-zinc-900 border border-zinc-800 px-4 py-2 rounded-full mb-8 animate-in fade-in slide-in-from-top-4 duration-700">
                    <span className="flex h-2 w-2 rounded-full bg-blue-500 animate-pulse" />
                    <span className="text-sm font-medium text-zinc-400">Next Gen Enterprise Solution</span>
                </div>

                <h1 className="text-5xl md:text-8xl font-black mb-8 tracking-tighter leading-[0.9] text-transparent bg-clip-text bg-linear-to-b from-white to-white/50 animate-in fade-in slide-in-from-bottom-8 duration-700 delay-150">
                    Master Your <br />
                    <span className="text-blue-600">Operations</span> Today.
                </h1>

                <p className="max-w-2xl text-lg md:text-xl text-zinc-500 mb-12 font-medium leading-relaxed animate-in fade-in slide-in-from-bottom-4 duration-700 delay-300">
                    Streamline your workflow with our advanced ERP system. Built for speed, security, and scalability. Manage finance, inventory, and production from one place.
                </p>

                <div className="flex flex-col sm:flex-row gap-6 items-center justify-center w-full sm:w-auto animate-in fade-in slide-in-from-bottom-4 duration-700 delay-500">
                    <button
                        onClick={() => openAuthModal("register")}
                        className="w-full sm:w-auto bg-blue-600 hover:bg-blue-500 text-white px-10 py-5 rounded-2xl text-lg font-bold transition-all shadow-[0_20px_40px_rgba(37,99,235,0.3)] hover:shadow-[0_25px_50px_rgba(37,99,235,0.4)] hover:-translate-y-1 active:scale-95 cursor-pointer"
                    >
                        Register Now
                    </button>
                    <button className="w-full sm:w-auto bg-zinc-900 hover:bg-zinc-800 border border-zinc-800 text-white px-10 py-5 rounded-2xl text-lg font-bold transition-all active:scale-95 cursor-pointer">
                        Watch Demo
                    </button>
                </div>

                {/* Dashboard Preview / Placeholder */}
                <div className="mt-24 w-full h-[300px] md:h-[600px] bg-zinc-900/40 border border-zinc-800 rounded-3xl backdrop-blur-3xl p-4 animate-in zoom-in-95 fade-in duration-1000 delay-700 relative group overflow-hidden shadow-2xl">
                    <div className="absolute inset-0 bg-linear-to-tr from-blue-600/5 to-transparent pointer-events-none group-hover:from-blue-600/10 transition-all duration-700" />
                    <div className="flex flex-col gap-6 items-center justify-center h-full text-zinc-600">
                        <div className="w-20 h-20 rounded-2xl border-2 border-dashed border-zinc-800 flex items-center justify-center">
                            <span className="text-4xl text-zinc-700">+</span>
                        </div>
                        <span className="font-bold tracking-widest uppercase text-xs">Analytics Under Development</span>
                    </div>
                </div>
            </main>

            {/* Simple Footer */}
            <footer className="relative z-10 border-t border-zinc-900/60 pt-10 pb-20 px-6 max-w-7xl mx-auto flex flex-col items-center justify-center text-center gap-4 text-zinc-600 text-sm">
                <p>&copy; 2026 ERP Solutions. All Rights Reserved.</p>
                <div className="flex gap-6">
                    <a href="#" className="hover:text-blue-500 transition-colors">Privacy Policy</a>
                    <a href="#" className="hover:text-blue-500 transition-colors">Terms of Service</a>
                </div>
            </footer>
        </div>
    );
}

export default Home;
