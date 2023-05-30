import * as Yup from "yup";

export const CardSchema = Yup.object().shape({
    name: Yup.string().required("Name is required"),
    about: Yup.string().required("About is required"),
    price: Yup.number().required("Price is required"),
    imageURL: Yup.string().required("Image URL is required")
})