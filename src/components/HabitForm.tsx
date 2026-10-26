import React from 'react'
import Button from './Button'

const HabitForm = () => {
  // const habits = [];

  // if(habits.length === 0){
  //   return(
  //     <p className='text-center text-zinc-500 py-12'>
  //       No habits yet. Add one above to get started.
  //     </p>
  //   );
  // }

  return (
    <form className="flex gap-2">
      <input className="flex-1 rounded-lg bg-zinc-800 px-4 py-2 outline-none focus-visible:ring-violet-500" placeholder='New habit ...' />
      <Button>Add Habit</Button>
    </form>
  )
}

export default HabitForm