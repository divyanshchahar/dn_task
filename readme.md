# Data Neuron Task

## Abnout Project

This monorepo was built in reponse to the coding challenge put forward by DataNEuron for the position of Fullstack Develoepr (MERN)

## Prerequisite

1. [Node](https://nodejs.org/en)
2. [MongoDB](https://www.mongodb.com/)

## Setting up the app locally

### 1. Populate the data base

Insert three documents in the database in a collection named **entries** (the database in developement environment was called **dn_task**).

Schema of rthe entries is as follows:

```js
{
    "name" : "Entry Name",
    "content" : "Some random content"
}
```

The developer needs to make 3 such entries and caputre thier `_id` field for the next step

### 2. Setup the client environmnet

To setup the client environment we will need the `_id` filed from the previous step. Please see the `./client/.env.example` for further instructions. The file is heavily commented for easier understanding. TO run the client locally `./client/.env.local` needs to be created by the developer

### 3. Setup the server environment

Please see the `./server/.env.example` for further instructions. The file is heavily commented for easier understanding

### 4. Build the app locally

```
yarn
```

### 5. Run the app locally

```
yarn run dev
```
