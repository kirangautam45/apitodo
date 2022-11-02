import React from 'react'
import TodoForm from './TodoForm';

const ToDo = () => {
 
  return (
    <>
      <section className='heading'>
        <h1>Welcome to daily task </h1>
      </section>
      <section className='container'>
      <TodoForm/>
        <div className='tasks'></div>
      </section>
    
    </>

  )
}

export default ToDo