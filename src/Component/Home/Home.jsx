import React from 'react'
import { useSelector } from "react-redux";
import Button from '../../Container/Button/Button';
import "./Home.module.css"

function Home() {
  const {tasks} = useSelector((state)=>state.tasks)
  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Movies Name</th>
            <th>Title</th>
            <th>Rating</th>
            <th>Category </th>
            <th>Price </th>
            <th>Action</th>
          </tr>
        </thead>
              {
                tasks.map((data)=>(
                  <tr key={data.id}>
                      <td>
                        {data.moviesname}
                      </td>
                      <td>
                        {data.Title}
                      </td>
                      <td>
                        {data.rating}
                      </td>
                      <td>
                        {data.Category}
                      </td>
                      <td>
                        {data.Price}
                      </td>
                      <td>
                        <Button> Delete</Button>
                        <Button>Edite</Button>
                      </td>
                  </tr>
                ))
              }
        <tbody>

        </tbody>
      </table>
    </div>
  )
}
//  movie name, Title, rating, Category, Price
export default Home