// import React, { useState, useEffect } from 'react';
// import axios from 'axios';

// const useAuth = (code) => {
//   const [accessToken, setaccessToken] = useState();
//   const [refreshToken, setrefreshToken] = useState();
//   const [expiresIn, setexpiresIn] = useState();

//   useEffect(() => {
//     axios.post('http://localhost:3001/login', {
//       code: code
//     }).then(res => {
//       console.log(res.data);
//     });
//   }, [code]);


//   return { accessToken, refreshToken, expiresIn };
// };

// export default useAuth;
