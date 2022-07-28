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

    const [isLoading, setLoading] = useState(false)
    const [apiData, setApiData] = useState();
    const [apiError, setApiError] = useState();

    const handleOnChange = (event) => {
        const {name, value} = event.target;
        setData({...data, [name]: value});
    };

    const handleClick = () => {
        setErrors(validator(data))

        if (!errors) {
            eos.fetchEosData(data, setApiData, setApiError, setLoading)
            setData({
                account: "",
                b_date: "",
                e_date: "",
                m_unit: ""
            })
        }
    };


    return(
        <app.Provider value={{
            data,
            errors,
            apiData,
            apiError,
            isLoading,
            handleOnChange,
            handleClick
        }}>
            {children}
        </app.Provider>
    );
};