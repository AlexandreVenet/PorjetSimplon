// Import
import React, {useCallback, useState} from 'react'
import Menu from './logo/Menu.svg'
import './Delete.css'

// Message d'alerte : Check

// Me message voulant être supprimé : Check

// le bouton "supprimer" et "annulé" : Check
function Delete({msg}) {
    const [trigger, setTrigger] = useState(false)

    console.log(msg)

    if (trigger){
        return(
            <>
                <div className='popUpDel'>
                    <div className='popUpBG'>
                        <div>
                            <h4 className='margin__min'>Supprimer ?</h4>
                            <p className='margin__min'>Etes vous sûr de vouloir supprimer ce message ?</p>
                        </div>
                        <p className='msgSuppr'>
                            {msg}
                        </p>
                        <div className='btn__container'>
                            <button className='delete__btn' onClick={() => setTrigger(false)}>Supprimer</button>
                            <button className='cancel__btn' onClick={() => setTrigger(false)}>Annuler</button>
                        </div>
                    </div>
                </div>
            </>
        )
    } else {
        return(
            <img src={Menu} onClick={() => {
                setTrigger(true)
                }
            }>
            </img>
        )
    }
}


// Export
export default Delete