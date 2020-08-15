import React, {Fragment, useState} from 'react';
import "./Formulario.css";
import { useForm } from "react-hook-form";


function Formulario (){

   
   const { register, handleSubmit, errors } = useForm();
   const onSubmit = (data,e) =>{ 
      console.log(data); 
      e.target.reset(); // para borrar compos al presionar el button
   }

   const [datos, setDatos] = useState ({
      nombre: '',
      apellido: ''

   })
   const handleInputChange =( event) => {
      //console.log(event.target.value);
      setDatos({
         ...datos,
         [event.target.name]: event.target.value,
      })
   }
   const enviarDatos = (event) => {
      event.preventDefault();
      console.log(datos.nombre+ ' ' + datos.apellido);
   }
   return (
      <Fragment className="wrappe">
         <div className="for-wrapper">
            <h1>Formulario</h1>
            <form className="row" onSubmit={handleSubmit(onSubmit)}>
               <div className="col-md-3">
                  <input 
                  placeholder="Ingrese su Correo"
                  className="form-control"
                  type="text"
                  name="correo"
                  onChange={handleInputChange}
                  ref={
                     register({
                        required: {
                           value: true,
                           message: 'titulo obligatorio' },
                        maxLength: {
                           value: 5, 
                           message: 'No más de 5 carácteres!'
                        },
                        minLength: {
                           value: 2, 
                           message: 'Mínimo 2 carácteres'
                        }
                     })
                     
                  }
                  ></input>
                  <span className="text-danger text-small d-block mb-2">
                     {errors?.correo?.message}
                  </span>
               </div>

               <div className="col-md-3">
                  <input 
                  placeholder="Ingrese su Contraseña"
                  className="form-control"
                  type="password"
                  name="password"
                  onChange={handleInputChange}
                  ref={
                     register({
                        required: {
                           value: true,
                           message: 'titulo obligatorio' }
                     })
                  }
                  ></input>
                  <span className="text-danger text-small d-block mb-2">
                     {errors?.password?.message}
                  </span>
               </div>
               <div className="col-mb-3"> 
                  <button className="btn btn-primary" type="submit">
                     Enviar
                  </button>
               </div>
            </form>
         </div>
         <h3>{datos.nombre} - {datos.apellido}</h3>
      </Fragment>
   )
}
export default Formulario;