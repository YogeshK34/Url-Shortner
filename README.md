URL Shortener API
A simple API that allows users to shorten URLs, redirect to the original URLs, and track usage statistics.

Live Deployment
The API is deployed and accessible at:
https://url-shortner-amber-six.vercel.app/

Features
Shorten any valid URL.
Redirect to the original URL using a shortened ID.
View usage statistics, including click counts and the last access timestamp.
Endpoints

1. POST /shorten
   Creates a shortened URL for the provided original URL.

Request:

Method: POST
URL: /shorten
Headers:
Content-Type: application/json
Body:
json
Copy code
{
"originalUrl": "https://example.com"
}
Response:

Status: 201 Created
Body:
json
Copy code
{
"shortUrl": "https://url-shortner-amber-six.vercel.app/rMvstGXgt"
}
Errors:

400 Bad Request:
json
Copy code
{
"error": "Invalid URL provided"
} 2. GET /:shortId
Redirects the user to the original URL associated with the shortId.

Request:

Method: GET
URL: /:shortId (e.g., /rMvstGXgt)
Response:

Status: 302 Found
Redirects to the original URL (e.g., https://example.com).
Errors:

404 Not Found:
json
Copy code
{
"error": "URL not found"
} 3. GET /stats/:shortId
Fetches usage statistics for the specified shortId.

Request:

Method: GET
URL: /stats/:shortId (e.g., /stats/rMvstGXgt)
Response:

Status: 200 OK
Body:
json
Copy code
{
"originalUrl": "https://example.com",
"clicks": 10,
"lastAccessed": "2024-11-26T12:34:56.789Z"
}
Errors:

404 Not Found:
json
Copy code
{
"error": "URL not found"
}
Getting Started
Prerequisites
Node.js (v16 or higher)
MongoDB (local or cloud-based, e.g., MongoDB Atlas)
Vercel CLI (for deployment)
Installation
Clone the repository:

```bash
Copy code
git clone <repository-url>
cd url-shortener
Install dependencies:

~~~ bash
Copy code
npm install
Create a .env file in the project root and add the following:

makefile
Copy code
MONGO_URI=<your_mongodb_connection_string>
BASE_URL=http://localhost:5000
Start the server locally:

~~~ bash
Copy code
npm start
The API will be available at http://localhost:5000.

Deployment
Deploy to Vercel
Install Vercel CLI:

~~~ ~~~ bash
Copy code
npm install -g vercel
Deploy the app:

~~~ ~~~ bash
Copy code
vercel
Set environment variables in the Vercel dashboard:

MONGO_URI: Your MongoDB connection string.
BASE_URL: The deployed Vercel URL (e.g., https://url-shortner-amber-six.vercel.app).
Redeploy the app to apply the environment variable changes:

~~~ bash
Copy code
vercel --prod
Project Structure
~~~ bash
Copy code
project-root/
├── server.js         # Main entry point
├── routes/
│   └── url.js        # Route handlers
├── models/
│   └── Url.js        # MongoDB schema
├── package.json      # Dependencies and scripts
├── vercel.json       # Vercel configuration
├── .env              # Environment variables
Example Usage
Shorten a URL
Request:

~~~ bash
Copy code
curl -X POST https://url-shortner-amber-six.vercel.app/shorten \
-H "Content-Type: application/json" \
-d '{"originalUrl": "https://example.com"}'
Response:

json
Copy code
{
  "shortUrl": "https://url-shortner-amber-six.vercel.app/rMvstGXgt"
}
Redirect to Original URL
Visit: https://url-shortner-amber-six.vercel.app/rMvstGXgt
Get URL Stats
Request:

~~~ bash
Copy code
curl https://url-shortner-amber-six.vercel.app/stats/rMvstGXgt
Response:

json
Copy code
{
  "originalUrl": "https://example.com",
  "clicks": 10,
  "lastAccessed": "2024-11-26T12:34:56.789Z"
}
Future Enhancements
Implement rate limiting to prevent abuse.
Add support for custom aliases for shortened URLs.
Build a frontend interface for easier usage.
License
This project is licensed under the MIT License. See LICENSE for more details.
```
