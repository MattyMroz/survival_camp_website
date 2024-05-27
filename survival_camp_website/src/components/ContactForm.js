import React, { useState } from 'react';
import Input from './Input';
import Textarea from './Textarea';
import Button from './Button';
import './ContactForm.css';
import validator from 'validator';

const ContactForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: '',
    });

    const [success, setSuccess] = useState(false);
    const [errors, setErrors] = useState([]);
    const [isSubmitting, setIsSubmitting] = useState(false);

    const validateForm = () => {
        const errorsList = [];

        if (validator.isEmpty(formData.name)) {
            errorsList.push('Name is required!');
        } else if (!validator.isAlpha(formData.name.replace(/\s/g, ''), 'pl-PL')) {
            errorsList.push('Name must be letters only!');
        } else if (!validator.isLength(formData.name, { min: 2 })) {
            errorsList.push('Name is too short!');
        } else if (validator.isLength(formData.name, { max: 50 }) === false) {
            errorsList.push('Name is too long!');
        } else if (/^[A-Z]/.test(formData.name) === false) {
            errorsList.push('Name must start with a capital!');
        }

        if (validator.isEmpty(formData.email)) {
            errorsList.push('Email is required!');
        } else if (!validator.isEmail(formData.email)) {
            errorsList.push('Email is not valid!');
        }

        if (validator.isEmpty(formData.subject)) {
            errorsList.push('Subject is required!');
        } else if (!validator.isLength(formData.subject, { min: 5 })) {
            errorsList.push('Subject is too short!');
        } else if (validator.isLength(formData.subject, { max: 100 }) === false) {
            errorsList.push('Subject is too long!');
        }

        if (validator.isEmpty(formData.message)) {
            errorsList.push('Message is required!');
        } else if (!validator.isLength(formData.message, { min: 10 })) {
            errorsList.push('Message is too short!');
        } else if (validator.isLength(formData.message, { max: 5000 }) === false) {
            errorsList.push('Message is too long!');
        }

        return errorsList;
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        if (isSubmitting) {
            return;
        }
        setIsSubmitting(true);
        const validationErrors = validateForm();
        if (validationErrors.length > 0) {
            setErrors(validationErrors);
            setTimeout(() => {
                setSuccess(false);
                setErrors([]);
                setIsSubmitting(false);
            }, 3000);
        } else {
            console.log('Form Data:', formData);
            setSuccess(true);
            setErrors([]);
            event.target.reset();
            setFormData({
                name: '',
                email: '',
                subject: '',
                message: '',
            });
            setTimeout(() => {
                setSuccess(false);
                setIsSubmitting(false);
            }, 3000);
        }
    };

    return (
        <div className="contact__form__container">
            <form className="contact__form" onSubmit={handleSubmit}>
                <h2>Contact Us</h2>
                <div className="form__group">
                    <Input
                        placeholder="Name"
                        name="name"
                        value={formData.name}
                        onChange={e => setFormData(prevFormData => ({ ...prevFormData, name: e.target.value }))}
                        autoComplete="name"
                    />
                    <Input
                        placeholder="Email address"
                        name="email"
                        value={formData.email}
                        onChange={e => setFormData(prevFormData => ({ ...prevFormData, email: e.target.value }))}
                        autoComplete="email"
                    />
                    <Input
                        placeholder="Subject"
                        name="subject"
                        value={formData.subject}
                        onChange={e => setFormData(prevFormData => ({ ...prevFormData, subject: e.target.value }))}
                        autoComplete="off"
                    />
                    <Textarea
                        placeholder="Message"
                        name="message"
                        value={formData.message}
                        onChange={e => setFormData(prevFormData => ({ ...prevFormData, message: e.target.value }))}
                        autoComplete="off"
                    />
                </div>
                <Button text="Submit" type="submit" />
                {errors.length > 0 && (
                    <span className="error__text">{errors[0]}</span>
                )}
                {success && <span className="success__text">Success!</span>}
            </form>
        </div>
    );
};

export default ContactForm;