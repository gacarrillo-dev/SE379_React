// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from 'react';

const SignUpForm = (props) =>{

    const [formState, setFormState] = useState({firstName: '', lastName: '', email: ''});
    const [errors, setErrors] = useState({});
    const [emailValid, setEmailValid] = useState(true);

    const emailRegex = /\S+@\S+\.\S+/;
    const validateEmail = (email) => emailRegex.test(email);
    const validateForm = () => {

        let isValid = true;
        let errors = {};

        // check if first name is empty
        if (!formState.firstName) {
            errors.firstName = '** First Name is required';
            isValid = false;
        }
        // check if last is empty
        if (!formState.lastName) {
            errors.lastName = '** Last Name is required';
            isValid = false;
        }
        // check if email is empty
        if (!formState.email) {
            errors.email = '** Email is required';
            isValid = false;
        }

        setErrors(errors);
        return isValid;
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;

        if (name === 'email') {
            const isValid = validateEmail(value);
            setEmailValid(isValid);
        }
        setFormState({ ...formState, [name]: value });
    };

    const clearForm = () => {
        setFormState({ firstName: '', lastName: '', email: '' });
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!validateForm()) {
            return;
        }
        // eslint-disable-next-line react/prop-types
        props.handleSignUpForm();
        console.log('Form submitted', formState);
        clearForm();
    };

    return (

        <form onSubmit={handleSubmit} className={'form-container'}>

            {/*Title*/}
            <h2>Sign-Up Form</h2>

            {/*First Name*/}
            <div className={'form-group'}>
                <label className={'form-label'}>First Name:</label>
                <input
                    type={'text'}
                    value={formState.firstName}
                    name={'firstName'}
                    className={'form-control'}
                    onChange={handleInputChange}
                />
                {errors.firstName && <p className={'error'}>{errors.firstName}</p>}
            </div>

            {/*Last Name*/}
            <div className={'form-group'}>
                <label className={'form-label'}>Last Name:</label>
                <input
                    type={'text'}
                    value={formState.lastName}
                    name={'lastName'}
                    className={'form-control'}
                    onChange={handleInputChange}
                />
                {errors.lastName && <p className={'error'}>{errors.lastName}</p>}
            </div>

            {/*Email*/}
            <div className={'form-group'}>
                <label className={'form-label'}>Email:</label>
                <input
                    type={'email'}
                    value={formState.email}
                    name={'email'}
                    className={`form-control ${!emailValid ? 'invalid-email' : ''}`}
                    onChange={handleInputChange}
                />
                {!emailValid && <p id="emailError" className={'error'}>Please enter valid email address.</p>}
            </div>

            {/*Form Buttons*/}
            <div className={'form-buttons'}>
                <button type={'button'} onClick={clearForm} className={'clear-button'}>clear</button>
                <button type={'submit'} className={'submit-button'}>Submit</button>
            </div>
        </form>

    );
}

export default SignUpForm;