import React from 'react'

export default function Child({onChildData}) {
    const data = 'data from child';
    onChildData(data);
  return (
    <div>
        <h1>This is child component</h1>
    </div>
  )
}
