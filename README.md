# IstanbulJS example
* https://github.com/istanbulnode
* https://www.istanbuljs.org

## Clone
```bash
git clone https://github.com/taylankalkan01/istanbul.git
```

## Install

```bash
npm install
```

## Usage

```bash
npm start
```

## Routes

This example offers 3 different api

### List

With this endpoint you can view all users.

| Path | Methods | Description | Params |
|------|---------|-------------|--------|
| `/user` | `GET` | View all users | |

Example Request:

```http-request
GET http://localhost:3000/user/
```

Example Response:

```json
{
    "success": true,
    "message": "Hello world from istanbulnode",
    "data": [
    {
      "id": 1,
      "name": "Taylan",
      "age": 21
    },
    {
      "id": 2,
      "name": "test1",
      "age": 21
    },
    {
      "id": 3,
      "name": "test2",
      "age": 21
    }  
  ]
}
```

### Detail

With this endpoint you can view user by id

| Path | Methods | Description | Params |
|------|---------|-------------|--------|
| `/user/:id` | `GET` | View User By Id  | `id` |

Example Request:

```http-request
GET http://localhost:3000/user/1
```

Example Response:

```json
{
    "success": true,
    "message": "User By Id fetched successfully",
    "data": {
        "id": 1,
        "name": "Taylan",
        "age": 21
    }
}
```

### Create

With this endpoint you can create a user.

| Path | Methods | Description |
|------|---------|-------------|
| `/user/` | `POST` | Create a user |

Request Body:

| Field | Type | Example |
|-------|------|---------|
| `name` | any | "Hello World!" |
| `age` | any | 25 |

Example Request:

```http-request
POST http://localhost:3000/user/
Content-Type: application/json

{
    "name": "Hello World!",
    "age": 25
}
```

Example Response:

```json
{
    "success": true,
    "message": "User created successfully",
    "data": {
        "id": 994,
        "name": "Hello World!",
        "age": 25
    }
}
```
