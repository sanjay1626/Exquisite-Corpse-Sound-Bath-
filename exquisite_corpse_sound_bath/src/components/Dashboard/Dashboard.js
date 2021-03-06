import React from 'react'
import Main from '../Main/Main'
export default function Dashboard() {
      const disappear =()=> <Main/>
      
    return(
     <div>
            <>{disappear}</>
           <h1>Dashboard</h1>
     </div>
    );
  }
  