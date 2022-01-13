import React, { useEffect, useState } from 'react';
import { Button, Table, TableCell, TableHeaderCell, TableRow } from 'semantic-ui-react'
import axios from 'axios'
import { Link } from 'react-router-dom';

export default function Read() {
    const [APIData, setAPIData] = useState([])

    useEffect(() => {
        axios.get('https://61dfee320f3bdb0017934c66.mockapi.io/messages')
        .then( (response) => {
            setAPIData(response.data)
        } )
    }, [])

    const setData = (data) => {
        let { id, prénom, nom, soyeux } = data;
        localStorage.setItem('ID', id);
        localStorage.setItem('Prénom', prénom);
        localStorage.setItem('Nom', nom);
        localStorage.setItem('Soyeux', soyeux)
    }

    const getData = () => {
        axios.get(`https://61dfee320f3bdb0017934c66.mockapi.io/messages`)
            .then((getData) => {
                 setAPIData(getData.data)
             })
    }

    const onDelete = (ID) => {
        axios.delete(`https://61dfee320f3bdb0017934c66.mockapi.io/messages/${ID}`)
        .then( () => {getData()})
    }

    const TableExamplePagination = () => (
        <Table celled>
            <Table.Header>
                <Table.Row>
                    <Table.HeaderCell>Prénom</Table.HeaderCell>
                    <Table.HeaderCell>Nom</Table.HeaderCell>
                    <Table.HeaderCell>Soyeux</Table.HeaderCell>
                    <Table.HeaderCell>Update</Table.HeaderCell>
                    <Table.HeaderCell>Supprimer</Table.HeaderCell>
                </Table.Row>
            </Table.Header>
      
            <Table.Body>
                {APIData.map( (data) => {return(
                    <TableRow>
                        <TableCell>{data.prénom}</TableCell>
                        <TableCell>{data.nom}</TableCell>
                        <TableCell>{data.soyeux ? 'Oui' : 'Non'}</TableCell>
                        <Link to={'/update'}>
                            <TableCell>
                                <Button primary onClick={ () => setData(data)}>Allez</Button>
                            </TableCell>
                        </Link>
                        <TableCell>
                            <Button secondary onClick={ () => onDelete(data.id)}>Adieux</Button>
                        </TableCell>
                    </TableRow>
                )} ) }
            </Table.Body>

        </Table>
      )

    return(
        <div>
            <div>
                {TableExamplePagination()}
            </div>
        </div>
    )
}