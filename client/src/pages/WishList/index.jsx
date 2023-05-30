import { Button } from '@mui/material'
import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'

const WishList = () => {

    const[wishList,setWishList] = useState([])

    useEffect(()=>{
        const data = JSON.parse(localStorage.getItem("wishlist"))
        setWishList(data)
      },[])
    
    
      function handleRemove(card) {
        if (localStorage.getItem("wishlist")) {
          let updatedWishList = wishList.filter(item => item !== card);
          localStorage.setItem("wishlist", JSON.stringify(updatedWishList));
          setWishList(updatedWishList);
        }
      }

  return (
    <div className='cards' style={{margin:"200px auto"}}>

      {
        wishList && wishList.map((card)=>{
          return <div key={card._id} className="card">
          <div className="images">
            <img src={card.imageURL} alt="img" />
          </div>
          <div className="txxt">
            <div className="info-title"><Link className='info-title' to={`/detail-page/${card._id}`}>{card.name}</Link></div>
            <div className="price">{card.price}$</div>
            <Button onClick={()=>handleRemove(card)} style={{width:"200px",margin:"20px auto",display:"flex",justifyContent:"center"}}>Delete Wishlist</Button>
            <div className="info-text">
              <p className='info-txt'>{card.about}</p>
            </div>
          </div>
        </div>
        })
      }

      

    </div>
  )
}

export default WishList