import { useState } from 'react'
import data from "./../data.json"
import { Link } from 'react-router-dom'

function Home() {
  
   const [searchTerm, setSearchTerm] = useState("")
   console.log(searchTerm)
  return (
    <>
     <div className="templateContainer">
      <div className='searchInput_Container'>
        <input type="text" 
          id='searchInput' 
          placeholder='Search here...'
          onChange={(e)=>{
            setSearchTerm(e.target.value)
          }}
          />
      </div>
      <div className='template_Container'>
        {
          data 
          .filter((val)=>{
            if(searchTerm == ""){
              return val
            }else if(val.title.toLowerCase().includes(searchTerm.toLowerCase())){
              return val
            }
          })
          .map((val)=>{
            return(
              <div className='template' key={val.id}>
                <img src={val.image} alt="" />
                <Link to={`/product/${val.id}`}><h3>{val.title}</h3></Link>
                <p className='price'>${val.price}</p>
              </div>
            )
          })
        }
      </div>
     </div>
    </>
  )
}

export default Home
