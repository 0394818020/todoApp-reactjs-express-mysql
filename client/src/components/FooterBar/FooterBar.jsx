import React, {useEffect, useState} from 'react'
import FooterP from '../ui/FooterP/FooterP.jsx';
import './FooterBar.scss'

function FooterBar({ numberOfTask }) {

  const { active, completed } = numberOfTask;

  const [slogan, setSlogan] = useState(``)

  useEffect(() => {
    if (active === 0 && completed > 0)
      setSlogan(`Tuyệt vời! Bạn đã hoàn thành tất cả thử thách✋🥳🤚`);

    else if (active >= 0 && completed === 0)
      setSlogan(`Hãy cùng hoàn thành những thử thách đầu tiên nào 🥵`);

    else if (active > 0 && completed > 0)
      setSlogan(`Tuyệt vời! Bạn đã hoàn thành ${completed}/${active + completed} thử thách, cố lên nào 🔥`);   

  }, [active, completed])

  

  return (
    <div className='FooterBar'>
      <FooterP p={slogan}/>
    </div>
  )

  
}

export default FooterBar