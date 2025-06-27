// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import axios from 'axios';

// const Signup = () => {
//   const [name, setName] = useState('');
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');

//   const navigate = useNavigate();

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     let payload = { name, email, password };

//     axios
//       .post("http://localhost:4000/signup", payload)
//       .then((result) =>{
//         alert('Account created')
//         console.log(result)
//         navigate('/login')
//       })
//       .catch((err) => {
//         console.log(err);
//         alert("Failed to create an account");
//       });
//   };

//   let formHandle1 = (e) => {
//     e.preventDefault();
//     navigate("/");
//   };

//   return (
//     <div className="flex items-center justify-center min-h-screen bg-gray-100">
//       <div className="max-w-md w-full bg-white p-8 rounded-md shadow-md overflow-hidden relative">
   

      

//       {/* <div className=" h-5  w-full  bg-indigo-500 transform skew-y-6 origin  "></div> */}
//         <div className="text-center mb-4">
        
          
         
//           <h2 className="text-3xl font-extrabold text-gray-900">Signup</h2>
          
//         </div>

//         <form className="space-y-6" onSubmit={handleSubmit}>
//           <div>
//             <label htmlFor="name" className="block text-sm font-medium text-gray-700">
//               Name
//             </label>
//             <input
//               name="name"
//               type="name"
//               autoComplete="email"
//               value={name}
//               onChange={(e) => setName(e.target.value)}
//               className="mt-1 p-2 block w-full border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
//               placeholder="Name"
//             />
//           </div>
//           <div>
//             <label htmlFor="email" className="block text-sm font-medium text-gray-700">
//               Email address
//             </label>
//             <input
//               name="email"
//               type="email"
//               autoComplete="email"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//               className="mt-1 p-2 block w-full border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
//               placeholder="Email address"
//             />
//           </div>
//           <div>
//             <label htmlFor="password" className="block text-sm font-medium text-gray-700">
//               Password
//             </label>
//             <input
//               id="password"
//               name="password"
//               type="password"
//               autoComplete="current-password"
//               required
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//               className="mt-1 p-2 block w-full border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
//               placeholder="Password"
//             />
//           </div>

//           <div>
//             <button
//               type="submit"
//               className="bg-indigo-500 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:ring focus:border-indigo-300 transition-all duration-300"
//             >
//               Signup
//             </button>
//           </div>

//           <p className="text-sm text-gray-600">
//             Already have an account{' '}
//             <button
//               onClick={formHandle1}
//               className="text-indigo-500 hover:underline focus:outline-none focus:ring focus:border-indigo-300 transition-all duration-300"
//             >
//               Login
//             </button>
//           </p>
//         </form>

//         <div className="absolute h-full w-full bg-indigo-500 transform -skew-y-6 origin-bottom-right"></div>
       
//       </div>
//     </div>
//   );
// };

// export default Signup;

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Signup = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    let payload = { name, email, password };

    axios
      .post("http://localhost:4000/signup", payload)
      .then((result) => {
        alert('Account created');
        console.log(result);
        navigate('/login');
      })
      .catch((err) => {
        console.log(err);
        alert("Failed to create an account");
      });
  };

  const formHandle1 = (e) => {
    e.preventDefault();
    navigate("/");
  };

  return (
    <div>
      <style>
        {`
          .signup-container {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100vw;                      /* Ensures full width */
  height: 100vh;                     /* Ensures full height */
  background-color: #f3f4f6;
  background-image: url("https://i.etsystatic.com/isla/7aea7d/25159282/isla_fullxfull.25159282_3k36689s.jpg?version=0");
    background-size: 100% 100%;          /* Keeps image ratio but fills the screen */
  background-repeat: no-repeat;
  background-position: center center;
  animation: zoomFade 20s ease-in-out infinite alternate;
  overflow: hidden;
}

@keyframes zoomFade {
  0% {
    transform: scale(1);
    opacity: 1;
  }
  100% {
    transform: scale(1.05);
    opacity: 0.95;
  }
}
          .signup-box {
            max-width: 400px;
            width: 100%;
            background-color: #ffffff;
            padding: 2rem;
            border-radius: 8px;
            box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
            position: relative;
            overflow: hidden;
          }
          .signup-box h2 {
            font-size: 24px;
            font-weight: bold;
            color: #1f2937;
            text-align: center;
            margin-bottom: 1rem;
          }
          .signup-form {
            display: flex;
            flex-direction: column;
            gap: 1rem;
          }
          .signup-form label {
            font-size: 14px;
            font-weight: 500;
            color: #374151;
            margin-bottom: 0.3rem;
          }
          .signup-form input {
            padding: 8px;
            border: 1px solid #d1d5db;
            border-radius: 4px;
            font-size: 14px;
            outline: none;
          }
          .signup-form input:focus {
            border-color: #6366f1;
            box-shadow: 0 0 0 2px rgba(99, 102, 241, 0.3);
          }
          .signup-button {
            background-color: rgb(151, 99, 71);
            color: #fff;
            font-weight: bold;
            padding: 8px 16px;
            border: none;
            border-radius: 4px;
            cursor: pointer;
            transition: all 0.3s;
          }
          .signup-button:hover {
            background-color: rgb(126, 78, 56);
          }
          .signup-footer {
            font-size: 14px;
            color: #6b7280;
            margin-top: 0.5rem;
            text-align: center;
          }
          .signup-footer button {
            color: rgb(151, 99, 71);
            background: none;
            border: none;
            cursor: pointer;
            text-decoration: underline;
            font-weight: 500;
            margin-left: 5px;
          }
          .skew-background {
            position: absolute;
            height: 100%;
            width: 100%;
            background-color: #6366f1;
            transform: skewY(-6deg);
            transform-origin: bottom right;
            z-index: -1;
          }
        `}
      </style>

      <div className="signup-container">
        <div className="signup-box">
          <div className="text-center mb-4">
            <h2>Signup</h2>
          </div>

          <form className="signup-form" onSubmit={handleSubmit}>
            <div>
              <label htmlFor="name">Name</label>
              <input
                name="name"
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Name"
              />
            </div>

            <div>
              <label htmlFor="email">Email address</label>
              <input
                name="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email address"
              />
            </div>

            <div>
              <label htmlFor="password">Password</label>
              <input
                name="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Password"
              />
            </div>

            <div>
              <button type="submit" className="signup-button">
                Signup
              </button>
            </div>

            <p className="signup-footer">
              Already have an account?
              <button onClick={formHandle1}>Login</button>
            </p>
          </form>

          <div className="skew-background"></div>
        </div>
      </div>
    </div>
  );
};

export default Signup;

