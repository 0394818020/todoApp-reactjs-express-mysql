import React from 'react'
import './NotFound.scss'
import { useNavigate } from 'react-router'

function NotFound() {
  const navigate = useNavigate();

  const backToHomePage = () => {
    navigate('/homepage')
  }

  return (
    <div className='NotFound'> 
      <p className='title'>404</p>
      <p className='title1'>Không có gì ở đây cả!</p>
      <p className='title1'>Vui lòng quay trở lại : <span onClick={backToHomePage}>/homepage</span></p>
    </div>
  )
}

export default NotFound