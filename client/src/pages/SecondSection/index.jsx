import React from 'react';
import './style.css'
import { useState } from 'react';
import { useEffect } from 'react';
import { getAllCards } from '../../api/cardRequest';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';


const SecondSection = () => {

  const[cards,setCards] = useState([]);

  useEffect(()=>{
    getAllCards().then(res=>{
      setCards(res)
    })
  },[])

  function handleClick(card){
    
    if(localStorage.getItem("wishlist")) {
      let a = JSON.parse(localStorage.getItem("wishlist"))
      localStorage.setItem("wishlist",JSON.stringify([...a,card]))
    }
    
    else {
      localStorage.setItem("wishlist",JSON.stringify([card]))
    }

  }



  return (
    <>
    <div className='big-title'>
      <div className='lineee'></div>
      <div className='second-titlee'>TAKE A LOOK AT OUR</div>
      <div className='second-title'>A simple trading system</div>
      <TextField onChange={(e)=>{
        getAllCards(e.target.value).then(res => {
          setCards(res)
        })
      }} style={{width:"200px",margin:"20px auto"}} id="outlined-basic" label="Name" variant="outlined" />
      <Button onClick={()=>{
        setCards([...cards.sort((a,b)=>a.price-b.price)])
      }} style={{width:"200px",margin:"20px auto"}} variant="contained">Sort by Price</Button>
    </div>
    <div className='cards'>

      {
        cards && cards.map((card)=>{
          return <div key={card._id} className="card">
          <div className="images">
            <img src={card.imageURL} alt="img" />
          </div>
          <div className="txxt">
            <div className="info-title"><Link className='info-title' to={`/detail-page/${card._id}`}>{card.name}</Link></div>
            <div className="price">{card.price}$</div>
            <Button onClick={()=>handleClick(card)} style={{width:"200px",margin:"20px auto",display:"flex",justifyContent:"center"}}>Add Wishlist</Button>
            <div className="info-text">
              <p className='info-txt'>{card.about}</p>
            </div>
          </div>
        </div>
        })
      }

      

    </div>
    </>
  )
}

export default SecondSection