const newConvoHandler = async (event) => {
    event.preventDefault();
  
    const body = document.querySelector('#convo-body').value.trim();
    const topic_id = document.querySelector('#topics-list').value;
    const newTopic = document.querySelector('#newTopic');
  
    if (body && topic_id) {
      const response = await fetch('/api/conversation', {
        method: 'POST',
        body: JSON.stringify({ body, topic_id }),
        headers: {
          'Content-Type': 'application/json',
        },
      });
  
      if (response.ok) {
        document.location.replace('/profile');
      } else {
        alert('Failed to create project');
      };
    };
  // } else if (body && newTopic) {

  // }
};

document
.querySelector('.new-convo-form')
.addEventListener('submit', newConvoHandler);
