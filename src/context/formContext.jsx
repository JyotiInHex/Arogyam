import React, { createContext, useState } from "react";

export const FormContext = createContext();

export const FromProvider = ({ children }) => {

    const [formData, setFormData] = useState({
        userPhone: ''
    });

    const handleFormData = (e) => {
        e.preventDefault();

        setFormData({
            userPhone: '',
        })
    };

    return (
        <FormContext.Provider value={{formData, setFormData, handleFormData}}>
            {children}
        </FormContext.Provider>
    )
};
