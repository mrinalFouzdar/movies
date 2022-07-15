import { useState } from "react"
import { useDispatch } from "react-redux";
import { addMovies } from "../Redux/Actions/actions";



export const FromCoustHoks=(initial)=>{
    const [formData,setFormData]=useState(initial)
    const dispatch = useDispatch()
    const handleInputChange = (e) => {    
        let { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
      };
   
    const handleSubmit =(e)=>{
    e.preventDefault();
        
        console.log(formData)
        dispatch(addMovies(formData))

    }

    return {formData,setFormData,handleInputChange,handleSubmit}
}