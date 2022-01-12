import React, {useCallback} from 'react'
import Delete from './Delete';
import './Read.css'

function Read({msg}) {
    return(
        <div className='messageBox'>
            <div>
                {msg}
            </div>
            <Delete msg={msg}/>
        </div>
    )
  }

export default Read;