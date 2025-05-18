const Button = ({ children }) => {
  return (
    <div className='border-2 border-[#fffaf0] p-1 rounded-full cursor-pointer'>
      <p className='bg-[#fffaf0] md:px-6 px-4 py-2 rounded-full text-black'>
        {children}
      </p>
    </div>
  )
}

export default Button
