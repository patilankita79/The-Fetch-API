# The-Fetch-API
Learning about fetch API<br>
This project is to explore the fetch API. In this project, fetching the data from local text file, local json file and external API are demonstrated.

For demonstrating fetching data from external API, https://api.github.com/users API is used.
<hr>

- Fetch API is a newer standard for dealing with HTTP requests
- The Fetch API provides a JavaScript interface for accessing and manipulating parts of the HTTP pipeline, such as requests and responses. It also provides a global fetch() method that provides an easy, logical way to fetch resources asynchronously across the network.
- It is now a part of window object
- Fetch returns promises. 
- When you get a response from a promise, you have to use .then()
- If there is some kind of error, then we can do .catch()

<hr>

# Example

### Getting a data from a text file which is located locally
<img src="https://github.com/patilankita79/The-Fetch-API/blob/master/Screenshots/GetDataFromTextFile.png">

### Getting data from a JSON file which is located locally
<img src="https://github.com/patilankita79/The-Fetch-API/blob/master/Screenshots/GetDataFromJSONFile.png">

### Getting data from an external API
<img src="https://github.com/patilankita79/The-Fetch-API/blob/master/Screenshots/GetDataFromExternalAPI.png">

<hr>

## Update to the project
- In app.js, arrow functions are used.
- Arrow functions use lexical this. So you don't have to worry about the scope of the function
