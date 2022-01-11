// Import
import './Delete.css'

// variables
let delRequest = false
const message = 'Blabla blabla wesh bla bla blabla Blabla blabla wesh bla bla blabla Blabla blabla wesh bla bla blabla Blabla blabla wesh bla bla blabla Blabla blabla wesh bla bla blabla'
const emuMessage = <div className='messageDel'><p>{message}</p></div>

// Message d'alerte : Check

// Me message voulant être supprimé : Check

// le bouton "supprimer" et "annulé" : Check

function Delete() {
    if ( delRequest === true ){
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
                            <button className='cancel__btn' type='button'>Annuler</button>
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

//

// Export
export default Delete