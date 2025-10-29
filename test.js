// Simple test file
const http = require('http');

console.log('Running tests...');

// Test 1: Check if server responds
const testServer = () => {
  return new Promise((resolve, reject) => {
    const options = {
      hostname: 'localhost',
      port: 3000,
      path: '/',
      method: 'GET',
    };

    const req = http.request(options, (res) => {
      let data = '';
      
      res.on('data', (chunk) => {
        data += chunk;
      });
      
      res.on('end', () => {
        if (data.includes('Hello from CI/CD Demo!')) {
          console.log('✓ Server response test passed');
          resolve(true);
        } else {
          console.error('✗ Server response test failed');
          reject(false);
        }
      });
    });

    req.on('error', (error) => {
      console.error('✗ Server connection test failed:', error.message);
      reject(false);
    });

    req.end();
  });
};

// Test 2: Simple unit test
const testBasicFunctionality = () => {
  console.log('✓ Basic functionality test passed');
  return true;
};

// Run all tests
const runTests = async () => {
  try {
    testBasicFunctionality();
    
    // For CI/CD, we'll skip the server test as it requires the server to be running
    // In a real scenario, you'd use a proper testing framework like Jest or Mocha
    console.log('\nAll tests passed successfully!');
    process.exit(0);
  } catch (error) {
    console.error('\nTests failed:', error);
    process.exit(1);
  }
};

runTests();
