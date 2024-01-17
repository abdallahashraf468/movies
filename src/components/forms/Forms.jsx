// import React, { useState } from 'react';
// import Form from 'react-bootstrap/Form';
// import Button from 'react-bootstrap/Button';

// const initialFormState = {
//   name: '',
//   email: '',
// };

// const initialErrorsState = {
//   nameError: '',
//   emailError: '',
// };

// const Forms = (props) => {
//   const [info, setInfo] = useState(initialFormState);
//   const [errors, setErrors] = useState(initialErrorsState);

//   const handleForm = (event) => {
//     const { name, value } = event.target;
//     setInfo((prevInfo) => ({ ...prevInfo, [name]: value }));
//     setErrors((prevErrors) => ({
//       ...prevErrors,
//       [`${name}Error`]: validateInput(name, value),
//     }));
//   };

//   const validateInput = (name, value) => {
//     switch (name) {
//       case 'name':
//         return value.length === 0
//           ? 'Name is required'
//           : value.length < 3
//           ? 'Name must be at least 3 characters'
//           : '';
//       case 'email':
//         return value.length === 0
//           ? 'Email is required'
//           : value.length < 3
//           ? 'Email must be at least 3 characters'
//           : value.includes('@')
//           ? ''
//           : 'Email must include @';
//       default:
//         return '';
//     }
//   };

//   const handleSubmit = (event) => {
//     event.preventDefault();

//     // Additional logic for form submission if needed
//     console.log('Form submitted with data:', info);
//   };

//   return (
//     <>
//       <Form className="m-5" onSubmit={handleSubmit}>
//         <Form.Group className="mb-3 col-4" controlId="formGroupText">
//           <Form.Label>Name</Form.Label>
//           <Form.Control
//             className={errors.nameError ? 'border-danger shadow-none' : ''}
//             type="text"
//             placeholder="Enter Name"
//             name="name"
//             value={info.name}
//             onChange={handleForm}
//           />
//         </Form.Group>
//         <p style={{ color: 'red' }}>{errors.nameError}</p>

//         <Form.Group className="mb-3 col-4" controlId="formGroupEmail">
//           <Form.Label>Email</Form.Label>
//           <Form.Control
//             type="email"
//             placeholder="Enter email"
//             name="email"
//             value={info.email}
//             onChange={handleForm}
//           />
//         </Form.Group>
//         <p style={{ color: 'red' }}>{errors.emailError}</p>

//         <Button variant="primary" type="submit">
//           Submit
//         </Button>
//       </Form>
//     </>
//   );
// };

// export default Forms;
