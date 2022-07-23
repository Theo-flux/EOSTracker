export function Button({text, formId}) {
  return (
    <button
        type='submit'
        form={formId}
        className="inline-block mt-4 py-3 px-7 mb-4 w-full text-base text-white font-medium text-center leading-6 bg-casal hover:bg-casal focus:ring-2 focus:ring-casal focus:ring-opacity-50 rounded" href="#"
    >{text}</button>
  )
}