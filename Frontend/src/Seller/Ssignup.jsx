// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import axios from 'axios';

// const Ssignup = () => {
//   const [name, setName] = useState('');
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');

//   const navigate = useNavigate();

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     let payload = { name, email, password };

//     axios
//       .post("http://localhost:4000/ssignup", payload)
//       .then((result) =>{
//         alert('Account created')
//         console.log(result)
//         navigate('/slogin')
//       })
//       .catch((err) => {
//         console.log(err);
//         alert("Failed to create an account");
//       });
//   };

//   let formHandle1 = (e) => {
//     e.preventDefault();
//     navigate("/slogin");
//   };

//   return (
//     <div className="flex items-center justify-center min-h-screen bg-gray-100">
//       <div className="max-w-md w-full bg-white p-8 rounded-md shadow-md overflow-hidden relative">
   

      

//       {/* <div className=" h-5  w-full  bg-indigo-500 transform skew-y-6 origin  "></div> */}
//         <div className="text-center mb-4">
        
          
         
//           <h2 className="text-3xl font-extrabold text-gray-900">Seller Registration</h2>
          
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

// export default Ssignup;

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Ssignup = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    let payload = { name, email, password };

    axios
      .post("http://localhost:4000/ssignup", payload)
      .then((result) => {
        alert('Account created');
        console.log(result);
        navigate('/slogin');
      })
      .catch((err) => {
        console.log(err);
        alert("Failed to create an account");
      });
  };

  const formHandle1 = (e) => {
    e.preventDefault();
    navigate("/slogin");
  };

  return (
    <div className="signup-container">
      <style>
        {`
          .signup-container {
            display: flex;
            align-items: center;
            justify-content: center;
            min-height: 100vh;
            width: 100vw;
                      background-image:url("https://mir-s3-cdn-cf.behance.net/project_modules/1400/ac20c251510537.58efce043ed6d.jpg");

            background-size: cover;
            background-position: center;
            background-repeat: no-repeat;
            animation: bgZoom 20s ease-in-out infinite alternate;
          }

          @keyframes bgZoom {
            0% {
              transform: scale(1);
              opacity: 1;
            }
            100% {
              transform: scale(1.02);
              opacity: 0.97;
            }
          }

          .signup-box {
            background-color: white;
            padding: 30px;
            border-radius: 10px;
            box-shadow: 0 0 15px rgba(0,0,0,0.1);
            max-width: 400px;
            width: 100%;
            position: relative;
            z-index: 1;
          }

          .signup-box h2 {
            text-align: center;
            margin-bottom: 20px;
            font-size: 26px;
            color: #333;
          }

          .form-group {
            margin-bottom: 15px;
          }

          .form-group label {
            display: block;
            font-size: 14px;
            margin-bottom: 5px;
            color: #555;
          }

          .form-group input {
            width: 100%;
            padding: 8px 10px;
            border: 1px solid #ccc;
            border-radius: 6px;
            font-size: 14px;
          }

          .form-group input:focus {
            border-color: #975f47;
            outline: none;
          }

          .submit-btn {
            background-color: rgb(151, 99, 71);
            color: white;
            font-weight: bold;
            padding: 10px 20px;
            border: none;
            border-radius: 6px;
            cursor: pointer;
            transition: background-color 0.3s ease;
          }

          .submit-btn:hover {
            background-color: rgb(122, 73, 51);
          }

          .redirect-msg {
            margin-top: 10px;
            font-size: 14px;
            color: #666;
          }

          .redirect-msg button {
            background: none;
            border: none;
            color: rgb(151, 99, 71);
            cursor: pointer;
            text-decoration: underline;
            padding-left: 5px;
          }

          .redirect-msg button:hover {
            color: rgb(122, 73, 51);
          }
        `}
      </style>

      <div className="signup-box">
        <h2>Seller Registration</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input
              name="name"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Name"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="email">Email address</label>
            <input
              name="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email address"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              name="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
              required
            />
          </div>

          <button type="submit" className="submit-btn">Signup</button>

          <p className="redirect-msg">
            Already have an account?
            <button onClick={formHandle1}>Login</button>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Ssignup;

