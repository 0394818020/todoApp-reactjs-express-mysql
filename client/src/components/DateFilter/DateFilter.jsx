import React, { useState } from 'react'
import './DateFilter.scss'

function DateFilter({mode, setMode}) {

    const [selected, setSelected] = useState(false);

    const selectMode = (mode) => {
        setMode(mode);  
        setSelected(false);
    }

  return (
    <div className='DateFilter'>
        {
            !selected ?
            <div className='DateFilter-select-box' onClick={() => setSelected(true)}>
                {mode === 'ascending' ? "Cũ nhất" : "Mới nhất"} <img src="/arrow-separate-vertical.svg"/>
            </div>
            :
            <div className='DateFilter-select-options'>
                {mode === 'ascending' ?
                    <>
                        <p className='option top' onClick={() => selectMode('ascending')}> Cũ nhất<img src="/sort-up.svg"/></p>
                        <p className='option bottom' onClick={() => selectMode('descending')}> Mới nhất<img src="/sort-down.svg"/></p>
                    </>
                    : 
                    <>
                        <p className='option top' onClick={() => selectMode('descending')}> Mới nhất<img src="/sort-down.svg"/></p>
                        <p className='option bottom' onClick={() => selectMode('ascending')}> Cũ nhất<img src="/sort-up.svg"/></p>
                    </>
                }
                
                
            </div>
        }
            
    </div>
  )
}

export default DateFilter