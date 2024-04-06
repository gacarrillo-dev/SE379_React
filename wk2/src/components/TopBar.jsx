import SignUpForm from "./SignUpForm.jsx";
import { useState, useEffect } from 'react';

const TopBar = () => {
    const [showForm, setShowForm] = useState(false);

    useEffect(() => {
        if (showForm) {
            console.log('SignUpForm is shown');
        } else {
            console.log('SignUpForm is hidden');
        }
    }, [showForm]);

    const handleSignUpForm = () => {
        setShowForm(!showForm);
    }

    return (
        <>
            <div className={'top-bar'}>
                <h1>Week 2 - Validation Form</h1>
                <button
                    className={'top-bar-button'}
                    onClick={handleSignUpForm}
                >Sign Up</button>

            </div>
            {showForm && <SignUpForm handleForm={handleSignUpForm}/>}
        </>

    );
}

export default TopBar;