import React, { useState } from 'react'

import '../styles/App.css';

const data = {
  '2018': [
    'Avengers 1',
    'Now you see me',
    'Fast and Furious 7'
  ],
  '2019': [
    'Avengers 2',
    'Now you see me 2',
    'Fast and Furious 8'
  ],
  '2020': [
    'Final Avengers Movie(Iron man dies)',
    'Now you finally used Lenskart',
    'Covid Came'
  ],
  '2021': [
    'Covid Returns',
  ],
  '2022': [
    'Adventures of Saiman',
    'Adventures of Shaktiman'
  ]
}
const App = () => {
   
  const[year, setYear] = useState('')
  const[div, setDiv] = useState('No year selected')
  const [list, setList] = useState([])
  
  const handleMovieList = (e) => {
    let val = e.target.value;
    // if(val=== null) {
    //   console.log(val)
    //   setDiv('No year selected')
    //  }
    // else{
    //   console.log(val)
      setYear(e.target.value)
    setDiv(`Selected year-${val}`)
    setList(data[val])
   
  }

  return (
    <div id="main">
        <select value={year} onChange={(e) => handleMovieList(e)}>
          <option value={null} selected={true}></option>
          {
            Object.keys(data).map((year) => {
              return (
                 <option key={year}>{year}</option>
              )
            })
          }
        </select>
        <div id='selected-year'>{div}</div>
        <ul>
            {
              list.map((movies) => {
                return (
                  <li key={movies}>{movies}</li>
                )
              })
            }
        </ul>
    </div>
  )
}


export default App;
