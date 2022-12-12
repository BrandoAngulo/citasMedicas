import React, { useState } from "react";
import { Button } from "react-bootstrap";
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
//import { Link } from "react-router-dom";
import { saveUser } from "../controllers/Controllers";

function UserForm() {

  //boton desactivado del modal
  const [show, setShow] = useState(false);
  //botones de abrir y cerrar modal
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  //const para el formulario
  const [user, setUser] = useState(
    {
      nombre: "",
      cedula: "",
      tipoDoc: "",
      correo: "",
      pass: "",
      ciudad: "",
      rol: "",
      celular: "",
      genero: "",
      fechaNacimiento: "",

    }
  );
  function handleChange({ target }) {
    setUser({
      ...user,
      [target.name]: target.value

    });
  }

  async function handleSubmit(e) {
    e.preventDefault();
    /* user.alergias = user.alergias.split(" ").join("").split(',');
    user.ubicacion = {
      departamento: user.departamento,
      ciudad: user.ciudad,
      direccion: user.direccion,
    }
    delete user.departamento;
    delete user.ciudad;
    delete user.direccion; */

    const response = await saveUser(user);
    alert(response);
    //returnToUser();

  }

  return (

    <>
      <div style={{ marginTop: '50px', display: 'flex', justifyContent: 'end' }}>
        <Button variant="primary" onClick={handleShow}>
          Registrar usuario
        </Button>
      </div>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Registrar de usuario</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSubmit}>

            <Form.Group className="mb-3" controlId="nombre">
              <Form.Label>Nombre</Form.Label>
              <Form.Control type="text" placeholder="Ingresa el nombre" name="nombre" required value={user.nombre} onChange={handleChange} />
            </Form.Group>

            <Form.Group className="mb-3" controlId="tidoDoc">
              <Form.Label>Tidpo de documento</Form.Label>
                    <Form.Select  >
                        <option value = "Bogota">Cedula</option>
                        <option value = "Cali">Pasaporte</option>
                        <option value = "Medellin">T. Identidad</option>
                    </Form.Select> 
            </Form.Group>

            <Form.Group className="mb-3" controlId="cedula">
              <Form.Label>Numero de documento</Form.Label>
              <Form.Control type="number" placeholder="Numero de documento" name="cedula" required value={user.cedula} onChange={handleChange} />

            </Form.Group>
            <Form.Group className="mb-3" controlId="correo">
              <Form.Label>Correo</Form.Label>
              <Form.Control type="email" placeholder="Correo" name="correo" required value={user.correo} onChange={handleChange} />
            </Form.Group>

            <Form.Group className="mb-3" controlId="pass" >
              <Form.Label>Contraseña</Form.Label>
              <Form.Control type="password" placeholder="Contraseña" name="pass" required value={user.pass} onChange={handleChange} />
            </Form.Group>

            <Form.Group className="mb-3" controlId="ciudad">
              <Form.Label>Ciudad</Form.Label>
                    <Form.Select  >
                        <option value = "Bogota">Bogota</option>
                        <option value = "Cali">Cali</option>
                        <option value = "Medellin">Medellin</option>
                    </Form.Select> 
            </Form.Group>

            <Form.Group className="mb-3" controlId="rol">
              <Form.Label>Rol</Form.Label>
              <Form.Control type="text" placeholder="Rol" name="rol" required value={user.rol} onChange={handleChange} />
            </Form.Group>

            <Form.Group className="mb-3" controlId="celular">
              <Form.Label>Celular</Form.Label>
              <Form.Control type="number" placeholder="Celular" name="celular" required value={user.celular} onChange={handleChange} />
            </Form.Group>

            <Form.Group className="mb-3" controlId="genero">
              <Form.Label>Genero</Form.Label>
                    <Form.Select  >
                        <option value = "Femenino">Femenino</option>
                        <option value = "Masculino">Masculino</option>
                    </Form.Select> 
            </Form.Group>

            <Form.Group className="mb-3" controlId="fechaNacimiento">
              <Form.Label>Fecha de nacimiento</Form.Label>
              <Form.Control type="date" placeholder="Fecha de nacimiento" name="fechaNacimiento" required value={user.fechaNacimiento} onChange={handleChange} />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicCheckbox">
              <Form.Check type="checkbox" label="Check me out" />
            </Form.Group>

            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );

}
export { UserForm };