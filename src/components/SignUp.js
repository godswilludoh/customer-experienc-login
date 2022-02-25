import React, { Component } from 'react';
import Images from './../assets/images.png';
import { FaFacebook } from 'react-icons/fa';
import { AiFillTwitterCircle } from 'react-icons/ai';

class SignUp extends Component {
	state = { email: '', password: '' };

	onEmailInput = (e) => {
		this.setState({
			email: e.target.value,
		});
	};

	onPasswordInput = (e) => {
		this.setState({
			password: e.target.value,
		});
	};

	onFormSubmit = (e) => {
		console.log(`${this.state.email} ${this.state.password}`);
		e.preventDefault();
	};

	render() {
		const { email, password } = this.state;
		return (
			<div className='sign-up'>
				<div className='images'>
					<img src={Images} alt='customer' />
				</div>
				<div className='form'>
					<h2>Sign up</h2>
					<div className='form-input'>
						<form onSubmit={this.onFormSubmit}>
							<div>
								<label>Email</label>
								<input
									type='email'
									value={email}
									onChange={this.onEmailInput}
								/>
							</div>
							<div>
								<label>Password</label>
								<input
									type='password'
									value={password}
									onChange={this.onPasswordInput}
								/>
							</div>
							<button>Sign up</button>
						</form>
					</div>
				</div>
				<div>
					<h3>
						or sign up using <FaFacebook /> <AiFillTwitterCircle />
					</h3>
					<h3>Already have an account? sign in</h3>
				</div>
			</div>
		);
	}
}

export default SignUp;
