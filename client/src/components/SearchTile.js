import React from 'react'

const SearchTile = (props) => {

  return (
    <div>
      <h3>{props.name}</h3>
      <button>➕ Add to pantry</button>
    </div>
  )
}

export default SearchTile