import React, { useEffect, useState } from "react";
import { Button, Table } from "react-bootstrap";
import { deleteUserById, loadUser } from "../controllers/Controllers"

function TableUser() {
    const [listUsers, setListUser] = useState([])

    async function listaUsers() {
        try {
            const res = await loadUser();
            setListUser(res);
        } catch (error) {
            console.log(error);
        }
    };
    useEffect(() => {
        listaUsers();
    }, [setListUser]);

    async function requestDelete(id) {
        let result = window.confirm("Seguro de Eliminar");
        if (result) {
            const res = await deleteUserById(id);
        alert(res);
        setListUser(listUsers.filter(user=>user.id!==id))
        }
    }
    let contador = 0;
    return (
        
        <Table className='striped bordered hover'>
            <thead>
                <tr>
                <th>#</th>
                    <th>Nombre</th>
                    <th>Tipo documento</th>
                    <th>Cedula</th>
                    <th>Correo</th>
                    <th>Contraseña</th>
                    <th>Ciudad</th>
                    <th>Rol</th>
                    <th>Celular</th>
                    <th>Genero</th>
                    <th>Fecha de nacimiento</th>
                    <th>Direccion</th>
                    <th>Opcion</th>
                </tr>
            </thead>
            <tbody className="font">
                {
                    
                    listUsers.map((user) => (
                        <tr key={user.id}>
                            <td>{++contador}</td>
                            <td>{user.nombre}</td>
                            <td>{user.tipoDoc}</td>
                            <td>{user.cedula}</td>
                            <td>{user.correo}</td>
                            <td>{user.pass}</td>
                            <td>{user.ciudad.nombre}</td>
                            <td>{user.rol}</td>
                            <td>{user.celular}</td>
                            <td>{user.genero}</td>
                            <td>{user.fechaNacimiento}</td> 
                            <td>{user.direccion}</td> 
                            <td><Button variant="danger" type="submit" onClick={()=>requestDelete(user.id)}>Eliminar</Button></td>
                        </tr>
                    ))
                }
            </tbody>
        </Table>


    )
}
export { TableUser }