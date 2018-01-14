// Add an event listener to button1
document.getElementById('button1').addEventListener('click', getText);

// Function to get a text from a local text file
function getText() {
  fetch('test.txt')
      .then(res => res.text())
      .then(data => {
        console.log(data);

        // Displaying to the UI
        document.getElementById('output').innerHTML = data;
      })
      .catch(err=> {
        console.log(err);

        // Displaying to the UI
        document.getElementById('output').innerHTML = err;
      });
}

// Add an event listener to button2
document.getElementById('button2').addEventListener('click', getJson);

// Function to get json data from a local JSON file
function getJson() {
  fetch('posts.json')
      .then(res => res.json())
      .then(data => {
        console.log(data);

        // Displaying to the UI
        let output = '';
        data.forEach(function(post) {
          output +=`<li>${post.title}: ${post.body}</li>`
        });
        document.getElementById('output').innerHTML = output;
      })
      .catch(err => {
        console.log(err);

        // Displaying to the UI
        document.getElementById('output').innerHTML = err;
      });
}

// Add an event listener to button3
document.getElementById('button3').addEventListener('click', getDataFromExternalAPI);

// Function to get the data from an external API
function getDataFromExternalAPI() {
  fetch('https://api.github.com/users')
      .then(res => res.json())
      .then(data => {
        console.log(data);

        // Displaying to the UI
        let output = '';
        data.forEach(function(user) {
          output +=`<li>${user.login}</li>`
        });
        document.getElementById('output').innerHTML = output;
      })
      .catch(err => {
        console.log(err);

        // Displaying to the UI
        document.getElementById('output').innerHTML = err;
      });

}
