const addBtn = document.getElementById('submitBtn');
addBtn.addEventListener('click', (e) => {
  e.preventDefault();

  // All data comes from the input fields
  const newBurger = {
    burger_name: document.getElementById('name').value.trim(),
  };

  // Send POST request using the fetch API
  fetch('/api/addburger', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(newBurger),
  })
    .then((response) => {
      if (response.ok) {
        location.reload('/');
      } else {
        alert('something went wrong!');
      }
      response.json();
    })
    // .then((data) => {
    //   console.log('Success in adding burger:', data);
    // })
    .catch((error) => {
      console.error('Error:', error);
      alert(error);
    });
});


