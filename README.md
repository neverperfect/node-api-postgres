# node-api-postgres
CRUD Rest APIs with Express and Sequelize

# Testing the APIs
Postman link: http://localhost:8080/api/items

1. Create a new Item using POST /items Api:
POST -> http://localhost:8080/api/items
Body-> raw: 
{
  "title": "itemABC",
  "description": "item is an A type item."
}

2. Retrieve all items using GET /items Api:
GET -> http://localhost:8080/api/items

3. Retrieve a single Item by id using GET /items/:id Api:
GET -> http://localhost:8080/api/items/:id (example: http://localhost:8080/api/items/2)

4. Update an Item using PUT /items/:id Api:
PUT -> http://localhost:8080/api/items/:id (example: http://localhost:8080/api/items/2)
Body-> raw:
{
  "title": "itemABC",
  "description": "item is no longer available."
}

5. Find all Items which title contains 'ABC': GET /items?title=ABC:
GET -> http://localhost:8080/api/items/items?title=ABC

6. Delete an Item:
DELETE -> http://localhost:8080/api/items/:id (example: http://localhost:8080/api/items/2)
