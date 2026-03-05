import React from "react";
import { useAuth } from "../context/AuthContext";
import AuthModal from "./AuthModal";

const AuthModalWrapper = () => {
    const { isAuthModalOpen, authModalMode, closeAuthModal } = useAuth();

    return (
        <AuthModal
            isOpen={isAuthModalOpen}
            initialMode={authModalMode}
            onClose={closeAuthModal}
        />
    );
};

export default AuthModalWrapper;
