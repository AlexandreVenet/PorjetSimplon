// Import
import React, {useCallback, useState} from 'react'
import './Delete.css'

// variables
const message = 'Blabla blabla wesh bla bla blabla Blabla blabla wesh bla bla blabla Blabla blabla wesh bla bla blabla Blabla blabla wesh bla bla blabla Blabla blabla wesh bla bla blabla'
const emuMessage = <div className='messageDel'><p>{message}</p></div>


let tampon2 = true

export function useTesMorts(){
    const [requestDel, setrequestDel] = useState(true)
    const supprimer = function(e) {
        if(requestDel == false){
            e.preventDefault()
            setrequestDel(true)
            console.log(requestDel)
        } else {
            e.preventDefault()
            setrequestDel(false)
            console.log(requestDel)
        }
    }
    return[requestDel, supprimer]
}
// Message d'alerte : Check

// Me message voulant être supprimé : Check

// le bouton "supprimer" et "annulé" : Check

function Delete() {
    const [requestDel, supprimer] = useTesMorts()
    if ( requestDel === true){
        return(
            <>
                <div className='popUpDel'>
                    <div className='popUpBG'>
                        <div>
                            <h4 className='margin__min'>Supprimer ?</h4>
                            <p className='margin__min'>Etes vous sûr de vouloir supprimer ce message ?</p>
                        </div>
                        {emuMessage}
                        <div className='btn__container'>
                            <button className='delete__btn' type='button'>Supprimer</button>
                            <button className='cancel__btn' onClick={supprimer} type='button'>Annuler</button>
                        </div>
                    </div>
                </div>
            </>
        )
    } else {
        return(
            <>
            </>
        )
    }
}


function Wesh() {
    return(
        <>
            <button onClick={Delete()}></button>
        </>
    )
}


// Export
export default Wesh