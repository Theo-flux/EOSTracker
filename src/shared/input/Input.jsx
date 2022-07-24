
export function Input({
    className,
    placeholder,
    value,
    name,
    type,
    inputId,
    labelText,
    handleOnChange
}) {
  return (
    <div className="font-poppins">
        <label 
            className="block mb-2 text-xs text-coolGray-800 font-medium" 
            htmlFor={inputId}
        >
            {labelText}
        </label>
        <input 
            id= {inputId}
            className={`appearance-none block w-full p-3 leading-5 text-coolGray-900 border border-coolGray-200 rounded placeholder-coolGray-400 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-50 ${className}`}
            type={type}
            name={name}
            value={value}
            placeholder={placeholder} 
            onChange={handleOnChange}
        />
    </div>
  )
}