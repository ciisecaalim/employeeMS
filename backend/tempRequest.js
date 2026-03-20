const http = require('http'
const options = {hostname: 'localhost', port: 5000, path: '/api/employee/69bcb443a00384ee3651e9b2', method: 'GET'};  
const req = http.request(options, res = 
  console.log('status code', res.statusCode);  
  res.setEncoding('utf8');  
  res.on('data', chunk =, chunk));  
  res.on('end', () = 
});  
req.on('error', err =, err));  
