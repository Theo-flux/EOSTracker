import { useContext } from "react";
import { app } from "../../app/appContext";
import { Input, Button, Div, Section } from "../../shared";
import DataTemplate from "./DataTemplate";

const formData = [
    {
        placeholder: 'Ex. "tsui.mlt"',
        name: 'account',
        type: 'text',
        inputId: 'account',
        labelText: 'EOS ACOUNT*'
    },
    {
        placeholder: 'Ex. "2022-05-16"',
        name: 'b_date',
        type: 'text',
        inputId: 'beginning-date',
        labelText: 'BEGINNING DATE*'
    },
    {
        placeholder: 'Ex. "2022-07-16"',
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

    const {data, errors, handleClick, handleOnChange, apiData, apiError, isLoading} = useContext(app);
    
    return (
        <Section>
            <Div>
                <div className="">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
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
                    </div>
                    {
                        apiError && <p className="text-center text-red-500">{apiError}</p>
                    }

                    {
                        apiData ? 
                            null
                            :
                            <div className="w-[100%] mx-auto max-w-[300px] mt-8">
                                <Button handler={handleClick}>
                                    {isLoading && <svg className="animate-spin h-6 w-6 mr-3 rounded-full spinner-border border-4" viewBox="0 0 24 24"></svg>}
                                    {isLoading && 'Processing...'}
                                    {isLoading || 'Get Data'}
                                </Button>
                            </div>
                        
                    }

                    <DataTemplate/>
                </div>
            </Div>
        </Section>
    )
}

export default Form