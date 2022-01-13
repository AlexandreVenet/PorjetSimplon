import React, { useState } from 'react';
import { Button, Checkbox, Form } from 'semantic-ui-react'
import axios from 'axios'

export default function Create() {
    const [prénom, setPrénom] = useState('');
    const [nom, setNom] = useState('');
    const [soyeux, setSoyeux] = useState(false);

    const postData = () => {
        axios.post(`https://61dfee320f3bdb0017934c66.mockapi.io/messages`, {
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
                    <input placeholder='Prénom' onChange={(e) => setPrénom(e.target.value)}/>
                </Form.Field>
                <Form.Field>
                    <label>Nom</label>
                    <input placeholder='Nom' onChange={(e) => setNom(e.target.value)}/>
                </Form.Field>
                <Form.Field>
                    <Checkbox label="J'accepte d'être soyeux" onChange={(e) => setSoyeux(!soyeux)}/>
                </Form.Field>
                <Button onClick={postData} type='submit'>Envoyer</Button>
            </Form>
        </div>
    )
}