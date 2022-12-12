import React, { useState } from "react";
import { Button, Col, Form, Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { saveUser } from "../controllers/Controllers";

function UserForm() {

    const navigate = useNavigate();

    const returnToUser = () => {
        navigate("/user");
    }

    const [user, setUser] = useState(
        {
            nombre: "",
            cedula: "",
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
        user.alergias = user.alergias.split(" ").join("").split(',');
        user.ubicacion = {
            departamento: user.departamento,
            ciudad: user.ciudad,
            direccion: user.direccion,
        }
        delete user.departamento;
        delete user.ciudad;
        delete user.direccion;

        const response = await saveUser(user);
        alert(response);
        returnToUser();

    }



    return (
        <Form className="mt-5" onSubmit={handleSubmit}>
            <Row className="mb-3">
                <Form.Group as={Col} controlId="nombre">
                    <Form.Label>Nombre</Form.Label>
                    <Form.Control
                        type="text"
                        name="nombre"
                        required
                        value={user.nombre}
                        onChange={handleChange}
                    />
                </Form.Group>

                <Form.Group as={Col} controlId="tipoDoc">
                    <Form.Label># Documento</Form.Label>
                    <Form.Control />
                </Form.Group>
                <Form.Group as={Col} controlId="tipoDoc">
                    <Form.Label>Tipo Documento</Form.Label>
                    <Form.Select  >
                        <option>RC</option>
                        <option>CC</option>
                        <option>TI</option>
                    </Form.Select>
                </Form.Group>
            </Row>

            <Row className="mb-3">
                <Form.Group as={Col} controlId="cedula">
                    <Form.Label>Cedula</Form.Label>
                    <Form.Control
                        type="number"
                        name="cedula"
                        required
                        value={user.cedula}
                        onChange={handleChange}
                    />
                </Form.Group>

                <Form.Group as={Col} controlId="correo">
                    <Form.Label>Correo</Form.Label>
                    <Form.Control
                        type="email"
                        name="correo"
                        required
                        value={user.correo}
                        onChange={handleChange} />
                </Form.Group>
            </Row>
            <Row className="mb-3">
                <Form.Group as={Col}>
                    <Form.Label>Contraseña</Form.Label>
                    <Form.Control
                        type="text"
                        name="pass"
                        required
                        value={user.pass}
                        onChange={handleChange} />
                </Form.Group>

                <Form.Group as={Col} controlId="ciudad">
                    <Form.Label>Ciudad</Form.Label>
                    <Form.Control
                        type="text"
                        name="ciudad"
                        required
                        value={user.ciudad}
                        onChange={handleChange} />
                </Form.Group>

                {/*   <Form.Group as={Col} >
                    <Form.Label>Alergias</Form.Label>
                    <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"
                        type="text"
                        name="alergias"
                        required
                        value={user.alergias}
                        onChange={handleChange}
                    ></textarea>

                </Form.Group>
                */}
                <Form.Group as={Col} controlId="rol">
                    <Form.Label>Rol</Form.Label>
                    <Form.Control
                        type="text"
                        name="rol"
                        required
                        value={user.rol}
                        onChange={handleChange} />
                </Form.Group>

                <Form.Group as={Col} controlId="celular">
                    <Form.Label>Celular</Form.Label>
                    <Form.Control
                        type="text"
                        name="celular"
                        required
                        value={user.celular}
                        onChange={handleChange} />
                </Form.Group>

                    <Form.Group as={Col} controlId="genero">
                        <Form.Label>Genero</Form.Label>
                        <Form.Control
                            type="text"
                            name="genero"
                            required
                            value={user.genero}
                            onChange={handleChange} />
                    </Form.Group>
                    
                    <Form.Group as={Col} controlId="fechaNacimiento">
                        <Form.Label>fechaNacimiento</Form.Label>
                        <Form.Control
                            type="text"
                            name="fechaNacimiento"
                            required
                            value={user.fechaNacimiento}
                            onChange={handleChange} />
                    </Form.Group>
                
            </Row>

            <Row className="my-3">
                <Col xs={4}><Button variant="primary" type="button" onClick={returnToUser}>Volver</Button></Col>
                <Col xs={5}><Button variant="success" type="success">Guardar</Button></Col>
                <Col xs> </Col>
            </Row>
        </Form>


    )

}
export { UserForm }