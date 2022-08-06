import { createContext, useState } from "react";
import { validator } from "../helpers/validator";
import * as eos from "../api/eos";
import * as poly from '../api/polygon'

export const app = createContext();

export function AppProvider({children}){
    const [data, setData] = useState({
        account: "",
        b_date: "",
        e_date: "",
        m_unit: ""
    });

    const [errors, setErrors] = useState();
    const [filterString, setFilterString] = useState("")

    const [isLoading, setLoading] = useState(false)
    const [apiData, setApiData] = useState();
    const [apiError, setApiError] = useState();

    const [isPolyLoading, setPolyLoading] = useState(false);
    const [polyPrices, setPolyPrices] = useState();
    const [polyPriceError, setPolyPriceError] = useState();

    const handleOnChange = (event) => {
        const {name, value} = event.target;
        setData({...data, [name]: value});
    };

    const handleClick = () => {
        setErrors(validator(data))

        if (!errors) {
            eos.fetchEosData(data, setApiData, setApiError, setLoading)
            poly.fetchPolyPrice(data, setPolyPrices, setPolyPriceError, setPolyLoading)

            setFilterString(data.account)
            setData({
                account: "",
                b_date: "",
                e_date: "",
                m_unit: ""
            })
        }
    };

    console.log('polygon-data', polyPrices)
    console.log('eos-data',apiData)

    return(
        <app.Provider value={{
            data,
            errors,
            apiData,
            apiError,
            isLoading,
            isPolyLoading,
            polyPrices,
            polyPriceError,
            handleOnChange,
            filterString,
            handleClick
        }}>
            {children}
        </app.Provider>
    );
};