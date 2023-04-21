import react from 'react'

export default function Navbar(props)
{
    return(
        <>
        <div className='navigation_bar'>
        <div className='navigation'>
           <a href="/">Home</a>
           <a href="/About" >About</a>
           <a href="/Login">Login</a>
        </div>
        </div>
        </>
    )
}