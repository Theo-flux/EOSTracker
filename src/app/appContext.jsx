import { createContext, useState } from "react";
import { validator } from "../helpers/validator";
import * as eos from "../api/eos";

export const app = createContext();

export function AppProvider({children}){
    const [data, setData] = useState({
        account: "",
        b_date: "",
        e_date: "",
        m_unit: ""
    });

    const [errors, setErrors] = useState();

    const handleOnChange = (event) => {
        const {name, value} = event.target;
        setData({...data, [name]: value});
    };

    function handleSubmit(event){
        event.preventDefault();
        setErrors(validator(data))

        if (!errors) {
            console.log(eos.fetchEosData(data))
        }
    };

    return(
        <app.Provider value={{
            data,
            errors,
            handleOnChange,
            handleSubmit
        }}>
            {children}
        </app.Provider>
    );
};