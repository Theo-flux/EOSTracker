export function Button({children, handler}) {
  return (
    <button
        onClick={handler}
        className="flex justify-center items-center mt-4 py-4 px-8 mb-4 w-full text-base text-white font-medium text-center leading-6 bg-blue-500 hover:bg-blue-900 focus:ring-2 focus:ring-casal focus:ring-opacity-50 rounded transition-all duration-300 ease-in-out" href="#"
    >{children}</button>
  )
}