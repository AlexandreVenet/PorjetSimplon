import React, { useState, useEffect } from 'react';
import { Button, Checkbox, Form } from 'semantic-ui-react'
import axios from 'axios'
import { Link } from 'react-router-dom';

export default function Update() {
    const [prénom, setPrénom] = useState('');
    const [nom, setNom] = useState('');
    const [soyeux, setSoyeux] = useState(false);

    const [ID, setID] = useState(null)

    useEffect(() => {
        setID(localStorage.getItem('ID'))
        setPrénom(localStorage.getItem('Prénom'))
        setNom(localStorage.getItem('Nom'))
        setSoyeux(localStorage.getItem('Soyeux'))
    }, [])

    // const postData = () => {
    //     axios.post(`https://61dfee320f3bdb0017934c66.mockapi.io/messages`, {
    //         prénom,
    //         nom,
    //         soyeux
    //     })
    // }

    const updateAPIData = () => {
        axios.put(`https://61dfee320f3bdb0017934c66.mockapi.io/messages/${ID}`, {
            prénom,
            nom,
            soyeux
        })
    }

    return (
        <div>
            <Form className="create-form">
                <Form.Field>
                    <label>Prénom</label>
                    <input placeholder='Prénom' value={prénom} onChange={(e) => setPrénom(e.target.value)}/>
                </Form.Field>
                <Form.Field>
                    <label>Nom</label>
                    <input placeholder='Nom' value={nom} onChange={(e) => setNom(e.target.value)}/>
                </Form.Field>
                <Form.Field>
                    <Checkbox label="J'accepte d'être soyeux" checked={soyeux} onChange={(e) => setSoyeux(!soyeux)}/>
                </Form.Field>
                <Button onClick={updateAPIData} type='submit'>Mettre à jour</Button>
            </Form>
        </div>
    )
}