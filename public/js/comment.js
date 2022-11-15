const newCommHandler = async (event) => {
    event.preventDefault();
  
    const body = document.querySelector('#comment-input').value.trim();
  
    if (body) {
      const response = await fetch(`/api/comm`, {
        method: 'POST',
        body: JSON.stringify({ body }),
        headers: {
          'Content-Type': 'application/json',
        },
      });
  
      if (response.ok) {
        document.location.replace('/profile');
      } else {
        alert('Failed to create project');
      }
    }
  };

document
.querySelector('.new-comm')
.addEventListener('submit', newCommHandler);
