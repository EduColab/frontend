import React from 'react'

const CursoUniversidad = ({params}) => {
    const {id} = params
    console.log(params)
  return (
    <div>page {id}</div>
  )
}

export default CursoUniversidad