# Public API for HNG Stage0 Task

## Description:
This is a public API that returns basic information (registered email, current datetime and the Github URL of the codebase) in JSON format.


### Setup Instructions:
**To Run the Project Locally:**
1. Clone the repository using: git clone https://github.com/Abdulbaasiterinkitola/HNG_0
2. Change to the project directory using: cd HNG_0
3. Install the required dependencies using: npm install
4. Run the API using: node src/index.js

**To Test the API with Postman:**
1. Install Postman if you haven't already.
2. Send a GET request with the URL as http://localhost:3000:
   - Method: GET
   - URL: http://localhost:3000


## API Documentation

**Endpoint**: https://hng-0-fu91.onrender.com/


**Response format**:
```json
{
  "email": "your-email@example.com",
  "current_datetime": "2025-01-30T09:30:00Z",
  "github_url": "https://github.com/yourusername/your-repo"
}
```

### Additional Backlink
To Hire a Nodejs Developer, use this: https://hng.tech/hire/nodejs-developers


### Deployment
This API is publicly deployed at: https://hng-0-fu91.onrender.com/
