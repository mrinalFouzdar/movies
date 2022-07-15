import React from 'react'
import Button from '../../Container/Button/Button';
import { FromCoustHoks } from '../../CoustomHooks/fromStateCoustom.hook'

function AddminPannel() {

    const {formData,handleInputChange,handleSubmit}= FromCoustHoks(
        {
            moviename:"",
            Title:"",
            rating:0,
            Category:"",
            Price:0
        }
    )

  const { moviename, Title ,rating,Category,Price} = formData;

  return (
    <div>

        <form onSubmit={(e)=>handleSubmit(e)}>
            <input 
            type="text"
            name='moviename'
            value={moviename ? moviename : ""}
            onChange={handleInputChange}
            placeholder="Movie Name"
            />
            <br />
            <br />
            <input 
            type="text"
            name='Title'
            value={Title ? Title : ""}
            onChange={handleInputChange}
            placeholder="Title"
            />
            <br />
            <br />
            <input 
            type="number"
            name='rating'
            value={rating ? rating : ""}
            onChange={handleInputChange}
            placeholder="Rating"
            />
            <br />
            <br />
            <input 
            type="text"
            name='Category'
            value={Category ? Category : ""}
            onChange={handleInputChange}
            placeholder="Category"
            />
            <br />
            <br />
            <input 
            type="number"
            name='Price'
            value={Price ? Price : ""}
            onChange={handleInputChange}
            placeholder="Price"
            />

            <br />
            <br />

            <Button type="submit"> Submit</Button>

        </form>

    </div>
  )
}

export default AddminPannel