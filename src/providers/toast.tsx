'use client';

import React, { ReactNode } from 'react';
import { ToastContainer } from 'react-toastify';

import "react-toastify/dist/ReactToastify.css";

interface ToastProps {
    children: ReactNode;
}

const ToastProvider = ({ children }: ToastProps) => {

    return (
        <>
            {children}
            <ToastContainer autoClose={3000} />
        </>
    )
}

export default ToastProvider