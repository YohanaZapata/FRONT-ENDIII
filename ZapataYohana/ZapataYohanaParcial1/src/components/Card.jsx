import React from 'react'

const Card = ({marca, color}) => {

 

return (
  <div className='card'>
      <h3> La marca de su vehiculo es{marca} y es de color {color}</h3>
  </div>
)
}

export default Card