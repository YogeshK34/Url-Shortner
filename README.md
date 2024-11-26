# Create the updated README.md content

readme_content = """

# **URL Shortener API**

A simple API that allows users to shorten URLs, redirect to the original URLs, and track usage statistics.

---

## **Live Deployment**

The API is deployed and accessible at:  
**[https://url-shortner-amber-six.vercel.app/](https://url-shortner-amber-six.vercel.app/)**

---

## **Features**

- Shorten any valid URL.
- Redirect to the original URL using a shortened ID.
- View usage statistics, including click counts and the last access timestamp.

---

## **Endpoints**

### **1. POST /shorten**

Creates a shortened URL for the provided original URL.

- **Request**:

  - **Method**: `POST`
  - **URL**: `/shorten`
  - **Headers**:
    - `Content-Type: application/json`
  - **Body**:
    ```json
    {
      "originalUrl": "https://example.com"
    }
    ```

- **Response**:

  - **Status**: `201 Created`
  - **Body**:
    ```json
    {
      "shortUrl": "https://url-shortner-amber-six.vercel.app/rMvstGXgt"
    }
    ```

- **Errors**:
  - `400 Bad Request`:
    ```json
    {
      "error": "Invalid URL provided"
    }
    ```

---

### **2. GET /:shortId**

Redirects the user to the original URL associated with the `shortId`.

- **Request**:

  - **Method**: `GET`
  - **URL**: `/:shortId` (e.g., `/rMvstGXgt`)

- **Response**:

  - **Status**: `302 Found`
    - Redirects to the original URL (e.g., `https://example.com`).

- **Errors**:
  - `404 Not Found`:
    ```json
    {
      "error": "URL not found"
    }
    ```

---

### **3. GET /stats/:shortId**

Fetches usage statistics for the specified `shortId`.

- **Request**:

  - **Method**: `GET`
  - **URL**: `/stats/:shortId` (e.g., `/stats/rMvstGXgt`)

- **Response**:

  - **Status**: `200 OK`
  - **Body**:
    ```json
    {
      "originalUrl": "https://example.com",
      "clicks": 10,
      "lastAccessed": "2024-11-26T12:34:56.789Z"
    }
    ```

- **Errors**:
  - `404 Not Found`:
    ```json
    {
      "error": "URL not found"
    }
    ```

---

## **Getting Started**

### **Prerequisites**

- Node.js (v16 or higher)
- MongoDB (local or cloud-based, e.g., MongoDB Atlas)
- Vercel CLI (for deployment)

---

### **Installation**

1. Clone the repository:

   ```bash
   git clone <repository-url>
   cd url-shortener

   ```

2. Install dependencies:

   ```bash
   npm install

   ```

3. Create a .env file in the project root and add the following:

   ```bash
   MONGO_URI=<your_mongodb_connection_string>
   BASE_URL=http://localhost:5000

   ```

4. Start the server locally:

````bash
npm start.

##  The API will be available at http://localhost:5000.


## Project Structure
```bash
project-root/
├── server.js         # Main entry point
├── routes/
│   └── url.js        # Route handlers
├── models/
│   └── Url.js        # MongoDB schema
├── package.json      # Dependencies and scripts
├── vercel.json       # Vercel configuration
├── .env              # Environment variables

````
