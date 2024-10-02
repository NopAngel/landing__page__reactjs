import React from 'react'

function Badges({children, className}:{children:React.ReactNode, className?:string}) {
  return (
    <div className={`${className} px-6 py-2 rounded-xl w-fit`}>{children}</div>
  )
}

export default Badges