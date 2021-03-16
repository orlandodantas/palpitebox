import React from 'react'

const Footer = () => {
  return (
    <div className='bg-gray-700 p4'>
      <div className='container mx-auto text-center font-bold text-white'>
        Projeto desenvolvido por: {' '}
        <a className='hover:underline' href='https://brightsoftware.com.br'> Orlando Dantas </a> / {' '}
        <a className='hover:underline' href='#'> Linkedin </a> / {' '}
        <a className='hover:underline' href='#'> Github </a>
        <div className='mt-2'>
          <img className='inline p-4' src='/logo_semana_fsm.png' alt='Semana Fullstack' />
          <img className='inline p-4' src='logo_devpleno.png' alt='DevPleno' />
        </div>
      </div>
    </div>
  )
}

export default Footer