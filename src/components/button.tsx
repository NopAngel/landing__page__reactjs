import React from 'react'

function Button({children, className}:{children:React.ReactNode, className?:string}) {
  return (
    <button className={`${className} px-4 py-2 rounded-md bg-white text-black`}>{children}</button>
  )
}

export default Button