import React, { useState } from "react";
import AuthModal from "../components/AuthModal.jsx";
import { Link } from "react-router-dom";

function LoginPage() {
    return (
        <div className="min-h-screen bg-zinc-950 flex flex-col items-center justify-center p-4">
            <Link to="/" className="mb-8 text-2xl font-black text-white px-6 py-3 bg-zinc-900 border border-zinc-800 rounded-2xl hover:border-zinc-700 transition-all">
                ERP<span className="text-blue-600">.</span>
            </Link>
            <div className="w-full max-w-md bg-zinc-900/50 backdrop-blur-xl border border-zinc-800 p-8 rounded-3xl shadow-2xl">
                {/* Reusing logic via AuthModal internal components if exported, 
                    but for now providing a simple centered version or just using the Modal without overlay */}
                <AuthModal isOpen={true} initialMode="login" onClose={() => { }} />
            </div>
            {/* Override the modal overlay for the standalone page */}
            <style dangerouslySetInnerHTML={{
                __html: `
                .fixed.inset-0.z-50 { position: relative; inset: auto; z-index: auto; display: block; padding: 0; background: none; }
                .absolute.inset-0.bg-black\\/60 { display: none; }
                .relative.w-full.max-w-md { box-shadow: none; border: none; background: none; animation: none; }
                .absolute.top-4.right-4 { display: none; }
            `}} />
        </div>
    );
}

export default LoginPage;