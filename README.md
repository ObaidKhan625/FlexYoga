# FlexYoga

**Tech Stack**
* React
* Material UI
* Python
* Django
* Django REST
* PostgreSQL
* Docker
* Render.com(Backend API and DB) 
* Netlify(Frontend) 

## Setup ER Diagram:

![Some](https://user-images.githubusercontent.com/72970106/207161571-872b8b96-4502-4cf0-8e24-92ab08040697.png)

| Field  | Type     | Description          |
| :--------- | :------- | :------------------- |
| `firstName`    | `string` | Required. Length > 0|
| `lastName` | `string` | Required. Length > 0 |
| `phone_number`    | `string` | Required. Primary Key. Length = 10    |
| `age`     | `int` | Required. 18 <= Value <= 65    |
| `last_paid`     | `int` | Required. 0 <= Value <= 11    |
| `batch`     | `int` | Required. 0 <= Value <= 11     |
| `address`     | `string` |     |

## Working:

On the main page, the form is displayed,

Validations are done in the form on the age(18-65), number and names. The batches have been added in a select input and they cannot be empty.

As shown in the diagram above, the phone_number is the primary key. Hence, a user is identified user their phone_number.

On adding the details in the form user's data will be sent to the backend.

The backend checks if the phone_number provided has registered before, if yes, the backend checks whenw as the last month the 
user paid(user.last_paid from the table), as mentioned earlier this is a value between 0 and 11.

Then we take the current_month, and check if user.last_paid == current_month.
If this is true it means that the user has paid this month and cannot change their batch.

Else,

Else we can conclude that either this is a new user or current_month! = user.last_paid, thus the frontend than asks or the payment details,
Also first time users get a 50% discount :).
After the transaction the backend sets user.last_paid = current_month and update it in the DB. 

I feel like  having a form like this that identifies on the basis of phone_number is a way cleaner approach than creating an entire auth system and making the user login everytime :). 
Though that would probably be necassary if there's more needed than just a simple form

I have minimized the DB calls as much as possible and also containerized the frontend and backend on my local system and made them communicate using docker networks. 
The docker files and docker-compose is also availible in the repo.





















