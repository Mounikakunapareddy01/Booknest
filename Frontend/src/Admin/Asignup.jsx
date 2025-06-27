// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import axios from 'axios';

// const Asignup = () => {
//   const [name, setName] = useState('');
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');

//   const navigate = useNavigate();

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     let payload = { name, email, password };

//     axios
//       .post("http://localhost:4000/asignup", payload)
//       .then((result) =>{
//         alert('Account created')
//         console.log(result)
//         navigate('/alogin')
//       })
//       .catch((err) => {
//         console.log(err);
//         alert("Failed to create an account");
//       });
//   };

//   let formHandle1 = (e) => {
//     e.preventDefault();
//     navigate("/alogin");
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

// export default Asignup;

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Asignup = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    let payload = { name, email, password };

    axios
      .post("http://localhost:4000/asignup", payload)
      .then((result) => {
        alert('Account created');
        console.log(result);
        navigate('/alogin');
      })
      .catch((err) => {
        console.log(err);
        alert("Failed to create an account");
      });
  };

  const formHandle1 = (e) => {
    e.preventDefault();
    navigate("/alogin");
  };

  return (
    <div className="signup-container">
      <style>{`
        .signup-container {
          display: flex;
          align-items: center;
          justify-content: center;
          min-height: 100vh;
          width: 100vw;
          background-color: #f3f4f6;
          background-image: url("https://static.vecteezy.com/system/resources/thumbnails/026/604/621/original/boy-with-many-books-sitting-with-cloud-background-video.jpg");
          background-repeat: no-repeat;
          background-position: center;
          background-size: cover;
        }
        .signup-box {
          background: white;
          padding: 30px;
          border-radius: 10px;
          width: 100%;
          max-width: 400px;
          box-shadow: 0 0 10px rgba(0,0,0,0.1);
          position: relative;
        }
        .signup-box h2 {
          text-align: center;
          font-size: 24px;
          color: #1f2937;
          margin-bottom: 20px;
        }
        .form-group {
          margin-bottom: 15px;
        }
        .form-group label {
          display: block;
          margin-bottom: 5px;
          font-size: 14px;
          color: #374151;
        }
        .form-group input {
          width: 100%;
          padding: 8px;
          border: 1px solid #d1d5db;
          border-radius: 4px;
          font-size: 14px;
        }
        .submit-btn {
          width: 100%;
          padding: 10px;
          background-color:rgb(123, 83, 18);
          color: white;
          border: none;
          font-weight: bold;
          border-radius: 5px;
          cursor: pointer;
          transition: background-color 0.3s ease;
        }
        .submit-btn:hover {
          background-color: #4f46e5;
        }
        .login-link {
          margin-top: 10px;
          font-size: 14px;
          color: #6b7280;
          text-align: center;
        }
        .login-link button {
          background: none;
          border: none;
          color: #6366f1;
          cursor: pointer;
          text-decoration: underline;
        }
      `}</style>

      <div className="signup-box">
        <h2>Admin Registration</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Name</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Enter your name"
            />
          </div>

          <div className="form-group">
            <label>Email address</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
            />
          </div>

          <div className="form-group">
            <label>Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter password"
            />
          </div>

          <button type="submit" className="submit-btn">Signup</button>

          <div className="login-link">
            Already have an account?{' '}
            <button onClick={formHandle1}>Login</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Asignup;

