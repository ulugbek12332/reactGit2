import React from 'react'

const App = () => {
  return (
    <div className='flex-col flex items-center inset-12'>
      <h1 className=''>Dive into Delights Of Delectable <span className='bg-green-500'>Food</span></h1>
      <p>Where Each Plate Weaves a Story of Culinary
         Mastery and Passionate Craftsmanship</p>
      <button className='bg-emerald-500 rounded-sm'>Order Now</button>
      <div className='top-1/4'>
        <h1>Popular Categories</h1>
        <div className='flex gap-7'>

        <div className='bg-amber-200 rounded-sm'><h1>Main Dish</h1><p>(86 dishes)</p></div>
        <div className='bg-amber-200 rounded-sm'><h1>Break Fast</h1><p>(12 break fast)</p></div>   
        <div className='bg-amber-200 rounded-sm'><h1>Dessert</h1><p>(48 dessert)</p></div>

        </div>
      </div>
    </div>
  )
}

export default App
