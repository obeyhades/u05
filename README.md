# Restful API - Financal tracker

I have chosen to create an API that is a finance tracker. In the API, users will be able to create an account (register). They will be able to add their income, expenses, and saving goals.

## 1. Objekt Modeling

### Databasstruktur

- userId (unik ID för user)
- name
- Email & password (Hashed)
- createdAt (timestamp)

### Income

- incomeId
- userId (reference for user)
- amount
- category (salary, investment, etc...)
- date (?)

### Expenses

- expenseId
- userId (reference for user)
- amount
- category (food, rent, transport, etc... )
- date (?)

### Savings Goals

- goalId
- userId (reference for user)
- targetAmount
- currentSavings
- deadline (?)

## 2. Create Resource URIs/ Assign HTTP Methods





### Income

| POST   |   /income   |      Make a new transaktion |
| :----- | :---------: | --------------------------: |
| GET    |   /income   |        Gets all transaktion |
| GET    | /income/:id | Gets a specific transaktion |
| PUT    | /income/:id |        Update a transaktion |
| DELETE | /income/:id |       Removes a transaktion |

### Expenses

| POST   |   /expenses    |        Create a new expense |
| :----- | :------------: | --------------------------: |
| GET    |   /expenses    |       Retrieve all expenses |
| GET    | /expensess/:id | Retrieve a specific expense |
| PUT    | /expenses/:id  |           Update an expense |
| DELETE | /expenses/:id  |           Delete an expense |

### Expenses

| POST   |   /goals   |            Create a saving goal |
| :----- | :--------: | ------------------------------: |
| GET    |   /goals   |       Retrieve all saving goals |
| GET    | /goals/:id | Retrieve a specific saving goal |
| PUT    | /goals/:id |            Update a saving goal |
| DELETE | /goals/:id |            Delete a saving goal |


## 3. Resource Representations

```json
{
    "user": {
        "userId": "1",
        "name": "abdu",
        "email": "abdu@gmail.com",
        "password": "Hellworld (**HASHED**) will look like -> ewpoigfhAWEPOIGFH...",
        "createdAt": "Today maybe tomorrow but today",
        },
    
    "income": {
        "incomeId": "1income",
        "userId": "1",
        "amount": "5000$",
        "category": "Salary, Investment",
        "date": "Today maybe tomorrow but lets say today"
    },

    "expense": {
        "expenseId": "1expense",
        "userId": "1",
        "amount": 1200$,
        "category": "Rent, Phone, utility, car, transport",
        "date": "Tomorrow but lets say today"
    },

    "savingsGoal": {
        "goalId": "1goal",
        "userId": "1",
        "targetAmount": "30$",
        "currentSaving" "1$",
        "date": "Today at 09:00 but today"
    }
}:
```
---
API cURL Documentation
This documentation provides an example on how cURL could be used and how to interact with my API. 

Register a new user
```
curl -X POST "https://moneytracker-hw96.onrender.com/user" \
     -H "Content-Type: application/json" \
     -d '{"username": "testuser", "password": "password123", "email": "testuser@gmail.com"}' 
```

Loging in
```
curl -X POST http://localhost:8080/user/login \
     -H "Content-Type: application/json" \
     -d '{"username": "hej123", "password": "Hejsan123" }'
```
Get user
```
curl -X GET "https://moneytracker-hw96.onrender.com/user/67e2b83d8af4b08ff53f8cb8" \
     -H "Authorization: Bearer <Your_Access_Token>"
```

Delete user
```
usercurl -X DELETE "https://moneytracker-hw96.onrender.com/user/67e2b83d8af4b08ff53f8cb8" \
     -H "Authorization: Bearer <Your_Access_Token>"
```

Update user
```
curl -X PUT "https://moneytracker-hw96.onrender.com/user/67e29ff7a3d70fa73b95142a" \
     -H "Content-Type: application/json" \
     -H "Authorization: Bearer <Your_Access_Token>" \
     -d '{"username":"testuser1"}'
```


