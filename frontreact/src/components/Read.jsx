// Librairie React
import React from 'react';

// Données
import userData from '../data/users.json';

// Composant au format de classe
class Read extends React.Component
{
    constructor(props)
    {
        super(props);
        this.state =
        {
            id: undefined,
            firstname: undefined,
            name: undefined,
            email: undefined,
            pass: undefined
        };

        // Afficher un élément du JSON pour vérifier que les données sont déjà parsed
        // console.log(userData[1].firstname);
    }

    // Méthode personnelles 

    SetState = (obj) => 
    {
        this.setState(
            {
                id: undefined,
                firstname: undefined,
                name: undefined,
                email: undefined,
                pass: undefined
            }
        );
    }

    ClickButton = (obj,event) => 
    {
        event.preventDefault();
        // console.log(event.target);
        this.setState(obj);
    }

    DisplayButtons = () => 
    {
        const btns = userData.map((n,i) =>
        {
            return(
                <button key={i} onClick={(e)=>this.ClickButton(n,e)}>
                    {n.firstname}
                </button>
            );
        });

        return btns;

        // source (fin de page) pour le clic : https://fr.reactjs.org/docs/handling-events.html
    }

    DisplayList = () => 
    {
        return(
            <>
                <ul>
                    <li>id : {this.state.id}</li>
                    <li>Firstname : {this.state.firstname}</li>
                    <li>Name : {this.state.name}</li>
                    <li>Email : {this.state.email}</li>
                    <li>Pass : {this.state.pass}</li>
                </ul>
                <p>State id : {this.state.id}</p>
            </>
        );
    }

    render()
    {
        return(
            <>
                <this.DisplayButtons/>
                <this.DisplayList/>
            </>
        );
    }
}

// Exporter l'élément utile
export default Read;