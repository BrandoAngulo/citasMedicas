package com.edu.unab.model.collection;

import java.util.Date;
import java.util.List;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document("user")
public class User {
	@Id
	private String id;
	private String nombre;
	private List<String> tipoDoc;
	private Integer cedula;
	private String correo;
	private String pass;
	private Object ciudad;
	private List<String> rol;
	private String celular;
	private List<String> genero;
	private Date fechaNacimiento;
	private String direccion;
	
	public User() {
	
	}

	public User(String id, String nombre, List<String> tipoDoc, Integer cedula, String correo, String pass, Object ciudad,
			List<String> rol, String celular, List<String> genero, Date fechaNacimiento, String direccion) {
		
		this.id = id;
		this.nombre = nombre;
		this.tipoDoc = tipoDoc;
		this.cedula = cedula;
		this.correo = correo;
		this.pass = pass;
		this.ciudad = ciudad;
		this.rol = rol;
		this.celular = celular;
		this.genero = genero;
		this.fechaNacimiento = fechaNacimiento;
		this.direccion = direccion;
	}

	public String getid() {
		return id;
	}

	public void setid(String id) {
		this.id = id;
	}

	public String getNombre() {
		return nombre;
	}

	public void setNombre(String nombre) {
		this.nombre = nombre;
	}

	public List<String> gettipoDoc() {
		return tipoDoc;
	} 

	public void settipoDoc(List<String> tipoDoc) {
		this.tipoDoc = tipoDoc;
	}
	
	public Integer getCedula() {
		return cedula;
	}
	
	public void setCedula(Integer cedula) {
		this.cedula = cedula;
	}

	public String getCorreo() {
		return correo;
	}

	public void setCorreo(String correo) {
		this.correo = correo;
	}

	public String getPass() {
		return pass;
	}

	public void setPass(String pass) {
		this.pass = pass;
	}

	public Object getCiudad() {
		return ciudad;
	}

	public void setCiudad(Object ciudad) {
		this.ciudad = ciudad;
	}

	public List<String> getRol() {
		return rol;
	}

	public void setRol(List<String> rol) {
		this.rol = rol;
	}

	public String getCelular() {
		return celular;
	}

	public void setCelular(String celular) {
		this.celular = celular;
	}

	public List<String> getGenero() {
		return genero;
	}

	public void setGenero(List<String> genero) {
		this.genero = genero;
	}

	public Date getfechaNacimiento() {
		return fechaNacimiento;
	}

	public void setfechaNacimiento(Date fechaNacimiento) {
		this.fechaNacimiento = fechaNacimiento;
	}

	public String getDireccion() {
		return direccion;
	}

	public void setDireccion(String direccion) {
		this.direccion = direccion;
	}

	@Override
	public String toString() {
		return "User [id=" + id + ", nombre=" + nombre + ", tipoDoc=" + tipoDoc + ", correo=" + correo
				+ ", pass=" + pass + ", ciudad=" + ciudad + ", rol=" + rol + ", celular=" + celular + ", genero="
				+ genero + ", fechaNacimiento=" + fechaNacimiento + ", direccion=" + direccion + "]";
	}
	
	
	
	
}
