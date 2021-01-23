const eatBtn = document.querySelectorAll('.change-devoured');

  // Set up the event listener for the create button
  if (eatBtn) {
    eatBtn.forEach((button) => {
      button.addEventListener('click', (e) => {
        // Grabs the id of the element that goes by the name, "id"
        const id = e.target.getAttribute('data-id');

        const newEatState = {
          devoured: true,
        };

        fetch(`/api/burger/${id}`, {
          method: 'PUT',
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
          },

          // make sure to serialize the JSON body
          body: JSON.stringify(newEatState),
        }).then((response) => {
          // Check that the response is all good
          // Reload the page so the user can see the new quote
          if (response.ok) {
            location.reload('/');
          } else {
            alert('something went wrong!');
          }
        });
      });
    });
  }