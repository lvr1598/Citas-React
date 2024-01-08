const Error = ({children}) => {
  return (
    <div className="bg-red-800 text-white text-center p-3 font-bold uppercase mb-3 rounded">
    <p>{children}</p>
  </div>
  )
}

export default Error
