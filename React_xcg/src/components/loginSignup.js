import React, { useState } from 'react';

const LoginSignupPage = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleToggleForm = () => {
    setIsLogin(prevState => !prevState);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Perform login or signup logic here
    console.log("Email:", email);
    console.log("Password:", password);
    // Reset form fields
    setEmail('');
    setPassword('');
  };

  return (
    <div>
      <h1>{isLogin ? 'Login' : 'Sign Up'}</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit">{isLogin ? 'Login' : 'Sign Up'}</button>
      </form>
      <p>
        {isLogin ? "Don't have an account?" : "Already have an account?"}{' '}
        <button onClick={handleToggleForm}>
          {isLogin ? 'Sign up here' : 'Login here'}
        </button>
      </p>
    </div>
  );
};

export default LoginSignupPage;
