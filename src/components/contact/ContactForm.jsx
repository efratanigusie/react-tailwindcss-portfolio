import { useState } from 'react';
import emailjs from 'emailjs-com';
import Button from '../reusable/Button';
import FormInput from '../reusable/FormInput';

const ContactForm = () => {
	const [formData, setFormData] = useState({
		name: '',
		email: '',
		subject: '',
		message: '',
	});

	const handleChange = (e) => {
		const { name, value } = e.target;
		setFormData((prevData) => ({ ...prevData, [name]: value }));
	};

	const sendEmail = (e) => {
		e.preventDefault();

		emailjs
			.send(
				'service_a3ipfhc', 
				'template_fn9tb0b', 
				formData,
				'veVuITY2Nz-bEEnru' // Replace with your EmailJS user ID
			)
			.then(
				(result) => {
					console.log('Email successfully sent:', result.text);
					alert('Message sent!');
				},
				(error) => {
					console.log('Failed to send email:', error.text);
					alert('Failed to send message. Please try again.');
				}
			);
	};

	return (
		<div className="w-full lg:w-1/2">
			<div className="leading-loose">
				<form onSubmit={sendEmail} className="max-w-xl m-4 p-6 sm:p-10 bg-secondary-light dark:bg-secondary-dark rounded-xl shadow-xl text-left">
					<p className="font-general-medium text-primary-dark dark:text-primary-light text-2xl mb-8">
						Contact Form
					</p>
					<FormInput
						inputLabel="Full Name"
						labelFor="name"
						inputType="text"
						inputId="name"
						inputName="name"
						placeholderText="Your Name"
						ariaLabelName="Name"
						value={formData.name}
						onChange={handleChange}
					/>
					<FormInput
						inputLabel="Email"
						labelFor="email"
						inputType="email"
						inputId="email"
						inputName="email"
						placeholderText="Your email"
						ariaLabelName="Email"
						value={formData.email}
						onChange={handleChange}
					/>
					<FormInput
						inputLabel="Subject"
						labelFor="subject"
						inputType="text"
						inputId="subject"
						inputName="subject"
						placeholderText="Subject"
						ariaLabelName="Subject"
						value={formData.subject}
						onChange={handleChange}
					/>
					<div className="mt-6">
						<label
							className="block text-lg text-primary-dark dark:text-primary-light mb-2"
							htmlFor="message"
						>
							Message
						</label>
						<textarea
							className="w-full px-5 py-2 border border-gray-300 dark:border-primary-dark border-opacity-50 text-primary-dark dark:text-secondary-light bg-ternary-light dark:bg-ternary-dark rounded-md shadow-sm text-md"
							id="message"
							name="message"
							cols="14"
							rows="6"
							aria-label="Message"
							value={formData.message}
							onChange={handleChange}
						></textarea>
					</div>
					<div className="font-general-medium w-40 px-4 py-2.5 text-white text-center font-medium tracking-wider bg-indigo-500 hover:bg-indigo-600 focus:ring-1 focus:ring-indigo-900 rounded-lg mt-6 duration-500">
						<Button
							title="Send Message"
							type="submit"
							aria-label="Send Message"
						/>
					</div>
				</form>
			</div>
		</div>
	);
};

export default ContactForm;
