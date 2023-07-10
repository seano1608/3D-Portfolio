import React from 'react'

const Filter = () => {
    // const category = [{id: 1, label: "All"}, {id: 2, label: "Frontend"}, {id:3, label: "Fullstack"}];

    const genres = [{id: 1, lable: 'All'}, {id: 2, lable: 'Animation'}, {id: 3, lable: 'Comedy'}];
    return (
      <div className="">
        {genres.map((item, index) => (
            <button className='bg-tertiary py-3 px-8 outline-none w-fit text-white font-bold shadow-md shadow-primary rounded-xl' key={index}>{item.lable}</button>
        ))}
      </div>
    )
  }

export default Filter;