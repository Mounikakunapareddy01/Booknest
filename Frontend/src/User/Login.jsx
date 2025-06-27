// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import axios from 'axios';
// import Home from '../Componenets/Home';

// const Login = () => {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const navigate = useNavigate();

//   axios.defaults.withCredentials = true;

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     let payload = { email, password };
//     axios
//       .post("http://localhost:4000/login", payload)
//       .then((res) => {
//         console.log("login: " + res.data.Status);
//         if (res.data.Status === "Success") {
//           console.log(res.data.user);
//           localStorage.setItem('user', JSON.stringify(res.data.user));
//             navigate('/uhome')
//            alert("login successful")
//         } else {
//           alert("wrong credentials");
//         }
//       })
//       .catch((err) => console.log(err));
//   };

//   let formHandle1 = (e) => {
//     e.preventDefault();
//     navigate("/signup");
//   };

//   return (
//     <div>
//       <Home/>
  
//     <div className="flex items-center justify-center min-h-screen bg-gray-100">  
//       <div className="relative max-w-md w-full bg-white p-8 rounded-md shadow-md overflow-hidden">
//         {/* Front side of the card */}
     
      
//         <div className="relative z-10">  
//           <div>
//             <h2 className="text-3xl font-extrabold text-gray-900 text-center mb-4">
//               Login to user account
//             </h2>
            
//           </div>
          
      
//           <form className="space-y-6" onSubmit={handleSubmit}>
       
//           {/* <form className="space-y-6" onSubmit={handleSubmit}> */}
//             {/* Email Input */}
//             <div>
                
//               <label htmlFor="email" className="block text-sm font-medium text-gray-700">
//                 Email address
//               </label>
//               <input
//                 id="email"
//                 name="email"
//                 type="email"
//                 autoComplete="email"
//                 required
//                 value={email}
//                 onChange={(e) => setEmail(e.target.value)}
//                 className="mt-1 p-2 block w-full border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
//                 placeholder="Email address"
//               />
//             </div>

//             {/* Password Input */}
//             <div>
//               <label htmlFor="password" className="block text-sm font-medium text-gray-700">
//                 Password
//               </label>
//               <input
//                 id="password"
//                 name="password"
//                 type="password"
//                 autoComplete="current-password"
//                 required
//                 value={password}
//                 onChange={(e) => setPassword(e.target.value)}
//                 className="mt-1 p-2 block w-full border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
//                 placeholder="Password"
//               />
//             </div>

//             {/* Submit Button */}
//             <div>
//               <button
//                 type="submit"
//                 className="bg-indigo-500 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:ring focus:border-indigo-300 transition-all duration-300"
//               >
//                 Log in
//               </button>
//               <br />
//               <p className="mt-2 text-sm text-gray-600">
//                 Don't have an account? Create
//                 <button
//                   onClick={formHandle1}
//                   className="ml-2 text-indigo-500 hover:underline focus:outline-none focus:ring focus:border-indigo-300 transition-all duration-300"
//                 >
//                   Signup
//                 </button>
//               </p>
//             </div>
//           </form>
//           {/* </form> */}
//         </div>

//         {/* Backside tilted background */}
//         <div
//           className="absolute h-full w-full bg-indigo-500 transform -skew-y-6 origin-bottom-right"
//         ></div>
        
//       </div>
//       </div>
//     </div>
//   );
// };

// export default Login;


import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Home from '../Componenets/Home';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  axios.defaults.withCredentials = true;

  const handleSubmit = (e) => {
    e.preventDefault();
    let payload = { email, password };
    axios
      .post("http://localhost:4000/login", payload)
      .then((res) => {
        if (res.data.Status === "Success") {
          localStorage.setItem('user', JSON.stringify(res.data.user));
          navigate('/uhome');
          alert("Login successful");
        } else {
          alert("Wrong credentials");
        }
      })
      .catch((err) => console.log(err));
  };

  const formHandle1 = (e) => {
    e.preventDefault();
    navigate("/signup");
  };

  return (
    <div>
      <Home />

      <div className="login-container">
        <div className="login-card">
          <div className="login-content">
            <h2 className="login-title">Login to user account</h2>

            <form className="login-form" onSubmit={handleSubmit}>
              <div className="login-field">
                <label htmlFor="email" className="login-label">Email address</label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="login-input"
                  placeholder="Email address"
                />
              </div>

              <div className="login-field">
                <label htmlFor="password" className="login-label">Password</label>
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="login-input"
                  placeholder="Password"
                />
              </div>

              <div>
                <button type="submit" className="login-button">
                  Log in
                </button>
                <br />
                <p className="login-message">
                  Don't have an account? Create
                  <button onClick={formHandle1} className="login-link">
                    Signup
                  </button>
                </p>
              </div>
            </form>
          </div>

          <div className="login-skew-bg"></div>
        </div>
      </div>

      <style>{`
        .login-container {
          display: flex;
          align-items: center;
          justify-content: center;
          height: 100vh;
          background-size:contain;
          background-image:url("https://mir-s3-cdn-cf.behance.net/project_modules/1400/ac20c251510537.58efce043ed6d.jpg");
          background-repeat: no-repeat;
          background-size: 100% 100%;
          position: relative;
        }

        .login-card {
          position: relative;
          max-width: 400px;
          width: 100%;
          background-color: white;
          padding: 32px;
          border-radius: 8px;
          box-shadow: 0 0 12px rgba(0, 0, 0, 0.1);
          overflow: hidden;
        }

        .login-skew-bg {
          position: absolute;
          top: 0;
          right: 0;
          height: 100%;
          width: 100%;
          background-color: rgb(230, 200, 184);
          transform: skewY(-6deg);
          transform-origin: bottom right;
          z-index: 0;
        }

        .login-content {
          position: relative;
          z-index: 10;
        }

        .login-title {
          font-size: 24px;
          font-weight: 800;
          color: #1f2937;
          text-align: center;
          margin-bottom: 20px;
        }

        .login-form {
          display: flex;
          flex-direction: column;
          gap: 16px;
        }

        .login-field {
          display: flex;
          flex-direction: column;
        }

        .login-label {
          font-size: 14px;
          color: #4b5563;
          margin-bottom: 6px;
        }

        .login-input {
          padding: 8px;
          border: 1px solid #d1d5db;
          border-radius: 6px;
          font-size: 14px;
          outline: none;
        }

        .login-input:focus {
          border-color: rgb(151, 99, 71);
          box-shadow: 0 0 0 2px rgba(151, 99, 71, 0.2);
        }

        .login-button {
          background-color: rgb(151, 99, 71);
          color: white;
          font-weight: bold;
          padding: 10px 16px;
          border: none;
          border-radius: 6px;
          cursor: pointer;
          transition: background-color 0.3s ease;
        }

        .login-button:hover {
          background-color: rgb(130, 80, 60);
        }

        .login-message {
          margin-top: 10px;
          font-size: 14px;
          color: #4b5563;
        }

        .login-link {
          margin-left: 8px;
          color: rgb(151, 99, 71);
          background: none;
          border: none;
          cursor: pointer;
          font-weight: 500;
          text-decoration: underline;
        }
      `}</style>
    </div>
  );
};

export default Login;

