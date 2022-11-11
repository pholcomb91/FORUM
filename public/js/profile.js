const newConvoHandler = async (event) => {
    event.preventDefault();
  
    const body = document.querySelector('#convo-body').value.trim();
    const topic = document.querySelector('#convo-topic').value.trim();
  
    if (body && topic) {
      const response = await fetch(`/api/convo`, {
        method: 'POST',
        body: JSON.stringify({ name, needed_funding, description }),
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
.querySelector('.new-convo-form')
.addEventListener('submit', newConvoHandler);
