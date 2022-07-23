
export function Input({
    className,
    placeholder,
    value,
    name,
    type,
    inputId,
    labelText,
    handleOnChange,
    error
}) {
  return (
    <div className="mb-2 font-campton">
        <label 
            className="block mb-2 text-xs text-coolGray-800 font-medium" 
            htmlFor={inputId}
        >
            {labelText}
        </label>
        <input 
            id= {inputId}
            className={`mb-1 appearance-none block w-full p-3 leading-5 text-coolGray-900 border border-coolGray-200 rounded placeholder-coolGray-400 focus:outline-none focus:ring-2 focus:ring-casal focus:ring-opacity-50 ${className}`}
            type={type}
            name={name}
            value={value}
            placeholder={placeholder} 
            onChange={handleOnChange}
        />
        <div>
            {
                error && <small className="text-red-500">{error}</small>
            }
        </div>
    </div>
  )
}