const newConvoHandler = async (event) => {
  
    const body = document.querySelector('#convo-body').value.trim();
    const topic_id = document.querySelector('#topics-list').value;
 
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
};

const newTopicHandler = async (event) => {
  let name = document.querySelector('#topic-input').value;
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
.querySelector('#new-convo-btn')
.addEventListener('click', newConvoHandler);

document
.querySelector('#new-topic-btn')
.addEventListener('click', newTopicHandler);

