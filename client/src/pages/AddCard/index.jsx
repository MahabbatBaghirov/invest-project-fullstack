import React from 'react'
import {useNavigate} from "react-router-dom"
import { postCard } from '../../api/cardRequest'
import { CardSchema } from '../../validation/cardValidation'
import TextField from '@mui/material/TextField'
import { useState } from 'react'
import {useFormik} from "formik"
import Swal from "sweetalert2"
import Button from '@mui/material/Button'

const AddCard = () => {

  const[cards,setCards] = useState([])
  const navigate = useNavigate();

  function handleSubmit(values,actions) {
    postCard(values);
    Swal.fire({
      position: 'top-end',
      icon: 'success',
      title: 'Your work has been saved',
      showConfirmButton: false,
      timer: 1500
    })
    navigate("/")
    setCards([...cards,values])
    actions.resetForm();
  }

  const formik = useFormik({
    initialValues: {
      name:"",
      about:"",
      price:"",
      imageURL:""
    },
    validationSchema: CardSchema,
    onSubmit: handleSubmit
  })

  return (
    <div style={{margin:"200px auto"}}>
    
    <form 
    style={{
      margin:"0 auto",
      display: "flex",
      flexDirection: "column",
      padding: "30px",
      border: "1px solid #eee",
      width: "50%",
      height: "400px",
    }}
    onSubmit={formik.handleSubmit}
    >

    <TextField 
    style={{marginBottom:"7px"}}
    onChange={formik.handleChange}
    onBlur={formik.handleBlur}
    name="name"
    type="text"
    value={formik.values.name}
    label="Card Name"
    error={formik.errors.name && formik.touched.name ? true : false}
    />
    {formik.errors.name && formik.touched.name && <p style={{color:"red"}}>{formik.errors.name}</p>}



    <TextField 
    style={{marginBottom:"7px"}}
    onChange={formik.handleChange}
    onBlur={formik.handleBlur}
    name="about"
    type="text"
    value={formik.values.about}
    label="Card About"
    error={formik.errors.about && formik.touched.about ? true : false}
    />
    {formik.errors.about && formik.touched.about && <p style={{color:"red"}}>{formik.errors.about}</p>}



    <TextField 
    style={{marginBottom:"7px"}}
    onChange={formik.handleChange}
    onBlur={formik.handleBlur}
    name="price"
    type="number"
    value={formik.values.price}
    label="Card Price"
    error={formik.errors.price && formik.touched.price ? true : false}
    />
    {formik.errors.price && formik.touched.price && <p style={{color:"red"}}>{formik.errors.price}</p>}

    <TextField 
    style={{marginBottom:"7px"}}
    onChange={formik.handleChange}
    onBlur={formik.handleBlur}
    name="imageURL"
    type="text"
    value={formik.values.imageURL}
    label="Card ImageURL"
    error={formik.errors.imageURL && formik.touched.imageURL ? true : false}
    />
    {formik.errors.imageURL && formik.touched.imageURL && <p style={{color:"red"}}>{formik.errors.imageURL}</p>}


    <Button
          style={{ display: "block", margin: "10px auto" }}
          type="submit"
          variant="contained"
          color="warning"
        >
          Add Card
        </Button>

    </form>

    </div>
  )
}

export default AddCard