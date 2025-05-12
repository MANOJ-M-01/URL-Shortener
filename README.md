# URL Shortener with Express, TypeScript, PostgreSQL, and Docker

This is a URL shortener service built with Express.js, TypeScript, PostgreSQL, and Docker. It provides a simple API to shorten long URLs and redirect them to their respective destinations.

### Features:

* **URL Shortening:** Generate a short link for any given URL.
* **URL Redirection:** Redirect users from the short URL to the original destination.
* **Database:** PostgreSQL is used for storing URLs and their corresponding short links.
* **Dockerized:** The entire application is containerized using Docker and Docker Compose for easy setup and deployment.
* **Persistent Storage:** URLs and their mappings are stored persistently in the PostgreSQL database.
* **Security:** Basic security practices to prevent abuse, including rate limiting and input validation.

### Tech Stack:

* **Backend:** Express.js, TypeScript
* **Database:** PostgreSQL
* **Containerization:** Docker, Docker Compose

### Setup:

1. Clone the repository.
2. Run `docker-compose up --build` to start the application and database.
3. Initialize DB (only first time): `docker-compose exec url-api npx prisma migrate dev --name init`
4. The app will be accessible at `http://localhost:3000`.


### Requirements
- Node `v23.11.0`
- Docker
- postgres `16.6`



### Test the API:

1. `POST /shorten` with JSON `{ "original": "https://example.com" }`
  ```
  curl -X POST http://localhost:3000/shorten \
    -H "Content-Type: application/json" \
    -d '{"original": "https://example.com"}'
  ```
2. `GET /:code` to redirect