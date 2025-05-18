const Button = ({ children }) => {
  return (
    <div className='border-2 border-[#fffaf0] p-1 rounded-full cursor-pointer'>
      <p className='bg-[#fffaf0] px-6 py-2 rounded-full text-black md:text-[18px] text-[12px]'>
        {children}
      </p>
    </div>
  )
}

export default Button
