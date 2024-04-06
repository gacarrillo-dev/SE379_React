// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from 'react';
import PropTypes from "prop-types";

const SignUpForm = ({ handleForm }) =>{

    const [formData, setFormData] = useState({firstName: '', lastName: '', email: ''});
    const [errors, setErrors] = useState({});
    const [emailValid, setEmailValid] = useState(true);
    const emailRegex = /\S+@\S+\.\S+/;

    const validateEmail = (email) => emailRegex.test(email);

    const validateForm = () => {

        let isValid = true;
        let errors = {};

        // check if first name is empty
        if (!formData.firstName.trim()) {
            errors.firstName = '** First Name is required';
            isValid = false;
        }
        // check if last is empty
        if (!formData.lastName.trim()) {
            errors.lastName = '** Last Name is required';
            isValid = false;
        }
        // check if email is empty
        if (!formData.email.trim()) {
            errors.email = '** Email is required';
            isValid = false;
        }

        setErrors(errors);
        return isValid;
    };

    const handleInputChange = (e) => {

        if (e.target.name === 'email') {
            const isValid = validateEmail(e.target.value);
            setErrors({ ...errors, email: isValid ? '' : '** Email is not valid' } );
            setEmailValid(isValid);
        }

        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const clearForm = () => {
        setFormData({ firstName: '', lastName: '', email: '' });
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!validateForm()) {
            return;
        }
        handleForm();
        console.log('Form submitted', formData);
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
                    value={formData.firstName}
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
                    value={formData.lastName}
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
                    value={formData.email}
                    name={'email'}
                    className={`form-control`}
                    onChange={handleInputChange}
                />
                {!emailValid && <p id="emailError" className={'error'}>{errors.email}.</p>}
            </div>

            {/*Form Buttons*/}
            <div className={'form-buttons'}>
                <button type={'button'} onClick={clearForm} className={'clear-button'}>clear</button>
                <button type={'submit'} className={'submit-button'}>Submit</button>
            </div>
        </form>

    );
}

SignUpForm.propTypes = {
    handleForm: PropTypes.func,
};

export default SignUpForm;