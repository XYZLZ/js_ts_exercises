import React from 'react'
import  '../App.css'


interface BoxProps extends React.HTMLAttributes<HTMLElement> {
    children : React.ReactNode
} 

const Box = ({children}: BoxProps) => {
  return (
    <div className='box_react'>
        {children}
    </div>
  )
}

export default Box


