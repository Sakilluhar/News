import React from 'react'
import { useParams,useLocation } from 'react-router-dom'


function Hello() {
const loca = useLocation();

    const {name,sname} = useParams();
  return (
    <div>
    <h1>Hello {name} {sname}</h1>
    {loca.pathname === `/hello/sakil/luhar` ? 
        <button 
        onClick={ () => alert('you are awesome')}
        >
          click me
        </button>
        : <button 
        onClick={ () => alert('you are noooooob')}
        >
          click me
        </button>
        }
        
    </div>
  )
}

export default Hello
