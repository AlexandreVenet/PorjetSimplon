// Import
import React, {useCallback, useState} from 'react'
import './Delete.css'

// Message d'alerte : Check

// Me message voulant être supprimé : Check

// le bouton "supprimer" et "annulé" : Check
function Delete({msg}) {
    const [sdf, sdfer] = useState(false)
    if (sdf){
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
                            <button className='delete__btn' onClick={() => sdfer(false)}>Supprimer</button>
                            <button className='cancel__btn' onClick={() => sdfer(false)}>Annuler</button>
                        </div>
                    </div>
                </div>
            </>
        )
    } else {
        return(
            <button onClick={() => {
                sdfer(true)
                }
            }>
                Ton fiéfer grand-père
            </button>
        )
    }
}


// Export
export default Delete