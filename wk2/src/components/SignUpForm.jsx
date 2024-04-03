// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from 'react';

const SignUpForm = (props) =>{

    const [formState, setFormState] = useState({firstName: '', lastName: '', email: ''});

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormState({ ...formState, [name]: value });
    };

    const clearForm = () => {
        setFormState({ firstName: '', lastName: '', email: '' });
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        clearForm();
        // eslint-disable-next-line react/prop-types
        props.handleSignUpForm();
        console.log('Form submitted', formState);
    };

    return (
        <div className={'form-container'}>
            <h2>Sign Up</h2>

            <div className={'form-group'}>
                <label className={'form-label'}>First Name:</label>
                <input
                    type={'text'}
                    value={formState.firstName}
                    name={'firstName'}
                    className={'form-control'}
                    onChange={handleInputChange}
                />
            </div>

            <div className={'form-group'}>
                <label className={'form-label'}>Last Name:</label>
                <input
                    type={'text'}
                    value={formState.lastName}
                    name={'lastName'}
                    className={'form-control'}
                    onChange={handleInputChange}
                />
            </div>

            <div className={'form-group'}>
                <label className={'form-label'}>Email:</label>
                <input
                    type={'email'}
                    value={formState.email}
                    name={'email'}
                    className={'form-control'}
                    onChange={handleInputChange}
                />
            </div>

            <div className={'form-buttons'}>
                <button onClick={clearForm} className={'clear-button'}>clear</button>
                <button onClick={(e) => {
                    handleSubmit(e);
                }} className={'submit-button'}>Submit
                </button>

            </div>
        </div>
    );
}

export default SignUpForm;