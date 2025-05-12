node `v23.11.0`


- `docker-compose up --build
- Initialize DB (only first time): `docker-compose exec url-api npx prisma migrate dev --name init`


### Test the API:
```
curl -X POST http://localhost:3000/shorten \
  -H "Content-Type: application/json" \
  -d '{"original": "https://example.com"}'
```
`POST /shorten` with JSON `{ "original": "https://example.com" }`

`GET /:code` to redirect