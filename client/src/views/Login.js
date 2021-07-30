import React from 'react';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import BookService from '../services/BookService'

const Login = () => {
    const bookService = new BookService()

 
 const SignupSchema = Yup.object().shape({
   firstName: Yup.string()
     .min(2, 'Too Short!')
     .max(50, 'Too Long!')
     .required('Required'),
   lastName: Yup.string()
     .min(2, 'Too Short!')
     .max(50, 'Too Long!')
     .required('Required'),
   email: Yup.string().matches(!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,'Formato de email es incorrecto'),
   //Yup.string().email('Invalid email').required('Required'),
   password: Yup.string()
   .equals([Yup.ref('confirmPassword'), null], 'Ambas contraseñas deben coincidir')
   .required('Campo requerido'),
   confirmPassword: Yup.string()
   .equals([Yup.ref('password'), null], 'Ambas contraseñas deben coincidir')
 });


 return (
     <div>
       <h1>Inicia Sesión</h1>
       <div className="form-container">
       <Formik
         initialValues={{
           firstName: '',
           lastName: '',
           email: '',
           password: '',
         }}
         validationSchema={SignupSchema}
         onSubmit={values => {
           console.log(values);
         }}>
         {({ errors, touched }) => (
           <Form>
            <label htmlFor="">Nombre</label>
             <Field name="firstName" />
             {errors.firstName && touched.firstName ? (
               <div>{errors.firstName}</div>
             ) : null}
             <label htmlFor="">Apellido</label>
             <Field name="lastName" />
             {errors.lastName && touched.lastName ? (
               <div>{errors.lastName}</div>
             ) : null}
             <label htmlFor="">Email</label>
             <Field name="email" type="email" />
             {errors.email && touched.email ? <div>{errors.email}</div> : null}
             <label htmlFor="">Contraseña</label>
             <Field name="password" type="password" />
             {errors.password && touched.password ? <div>{errors.password}</div> : null}
             <label htmlFor="">Confirmar Contraseña</label>
             <Field name="password" type="password" />
             {errors.password && touched.password ? <div>{errors.password}</div> : null}
             <button type="submit">Registrar</button>
           </Form>
         )}
       </Formik>
     </div>
     </div>

)
}

export default Login;