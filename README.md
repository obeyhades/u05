# Restful API - Financal tracker

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
    "user"; {
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
};

____________________________________fix me____________________________________________________

cURL: DDD

refine me 2 thanks
