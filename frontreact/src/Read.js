import React, {useCallback} from 'react'
import './Read.css'

function Read({msg}) {
    return(
        <div className='messageBox'>
            {msg}
        </div>
    )
  }

export default Read;