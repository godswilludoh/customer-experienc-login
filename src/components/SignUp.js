import React from 'react';
import Images from './../assets/images.png';

const SignUp = () => {
	return (
		<div>
			<div className='images'>
				<img src={Images} alt='customer' />
			</div>
			<div className='form'>
				<label>Sign up</label>
				<div className='form-input'>
					<label>Email</label>
					<input type='email' />
					<label>Password</label>
					<input type='password' />
				</div>
				<button>Sign up</button>
			</div>
			<h3>or sign up using </h3>
		</div>
	);
};

export default SignUp;
