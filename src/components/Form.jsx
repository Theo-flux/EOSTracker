import { useContext } from "react";
import { app } from "../app/appContext";
import { Input } from "../shared";

const formData = [
    {
        placeholder: 'Ex. "tsui.mlt"',
        name: 'account',
        type: 'text',
        inputId: 'account',
        labelText: 'EOS ACOUNT*'
    },
    {
        placeholder: 'Ex. "02/02/2022"',
        name: 'b_date',
        type: 'text',
        inputId: 'beginning-date',
        labelText: 'BEGINNING DATE*'
    },
    {
        placeholder: 'Ex. "04/02/2022"',
        name: 'e_date',
        type: 'text',
        inputId: 'end-date',
        labelText: 'END DATE*'
    },
    {
        placeholder: 'Ex. "USD"',
        name: 'm_unit',
        type: 'text',
        inputId: 'monetary-unit',
        labelText: 'MONETARY UNIT*'
    }
];

function Form() {

    const {data, errors, handleSubmit, handleOnChange} = useContext(app);
    
    return (
        <div className="w-4/5 mx-auto max-w-5xl py-8">
            <form className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {
                    formData.map((datum, index) => {
                        const {inputId, placeholder, name, type, labelText} = datum

                        return(
                            <div className='' key={index}>
                                <Input
                                    className={`mb-2 ${errors && errors[`${name}`] && 'outline-none ring-2 ring-red-500 ring-opacity-50'}`}
                                    placeholder={placeholder}
                                    name={name}
                                    value={data[`${name}`]}
                                    type={type}
                                    id={inputId}
                                    labelText={labelText}
                                    handleOnChange={handleOnChange}
                                />
                                {
                                    errors &&
                                    <small className={`text-red-500`}>{errors[`${name}`]}</small>
                                }
                            </div>
                        )
                    })
                }
            </form>
        </div>
    )
}

export default Form