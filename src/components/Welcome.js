import React, { Component } from 'react';
import Image from './../assets/images1.png';
import { FaFacebook } from 'react-icons/fa';
import { AiFillTwitterCircle } from 'react-icons/ai';

class Welcome extends Component {
	state = { email: '', password: '' };

	onEmailChange = (e) => {
		this.setState({
			email: e.target.value,
		});
	};

	onPasswordChange = (e) => {
		this.setState({ password: e.target.value });
	};

	onFormSubmit = (e) => {
		console.log(`${this.state.email} ${this.state.password}`);
		e.preventDefault();
	};
	render() {
		const { email, password } = this.state;
		return (
			<div className='Welcome'>
				<div className='form'>
					<form onSubmit={this.onFormSubmit}>
						<h2>Welcome Back!</h2>
						<div className='email'>
							<label>Email</label>
							<input type='email' value={email} onChange={this.onEmailChange} />
						</div>
						<div className='password'>
							<label>Password</label>
							<input
								type='password'
								value={password}
								onChange={this.onPasswordChange}
							/>
						</div>
					</form>
					<h3>
						or sign in using <FaFacebook /> <AiFillTwitterCircle />
					</h3>
					<h3>Don't have an account? sign up</h3>
				</div>
				<div className='images'>
					<img src={Image} alt='customer' />
				</div>
			</div>
		);
	}
}

export default Welcome;
