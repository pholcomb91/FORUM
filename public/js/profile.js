const newConvoHandler = async (event) => {
    // event.preventDefault();
  
    const body = document.querySelector('#convo-body').value.trim();
    const topic_id = document.querySelector('#topics-list').value;
    if (topic_id === "+ Add a Topic") {
      newTopicHandler();
    };
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
        alert('Failed to create a new conversation');
      };
    };
};

const newTopicHandler = async (event) => {
  let name = prompt("Please enter a new topic:");
  const response = await fetch('/api/newtopic', {
    method: 'POST',
    body: JSON.stringify({ name }),
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

document
.querySelector('.new-convo-form')
.addEventListener('submit', newConvoHandler);

