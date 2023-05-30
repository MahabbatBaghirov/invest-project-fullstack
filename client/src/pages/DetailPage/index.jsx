import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'
import { getCardById } from '../../api/cardRequest';
import { useParams } from 'react-router-dom';

const DetailPage = () => {

    const {id} = useParams();

    const[card,setCard] = useState([]);

    useEffect(()=>{
        getCardById(id).then(res => {
            setCard(res)
        })
    },[id])

  return (
    <>
    <div style={{margin:"200px auto"}} key={card._id} className="card">
          <div className="images">
            <img src={card.imageURL} alt="img" />
          </div>
          <div className="txxt">
            <div className="info-title">{card.name}</div>
            <div className="price">{card.price}$</div>
            <div className="info-text">
              <p className='info-txt'>{card.about}</p>
            </div>
          </div>
        </div>
    </>
  )
}

export default DetailPage