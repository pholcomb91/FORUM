const newCommHandlerId = async (event) => {
    event.preventDefault();
    console.log(event.target);
    var body = document.querySelector('input').value;
    var conversation_id = event.target.getAttribute("con-id");
    
    if (body && conversation_id) {
      const response = await fetch(`/api/comm`, {
        method: 'POST',
        body: JSON.stringify({ body, conversation_id }),
        headers: {
          'Content-Type': 'application/json',
        },
      });
  
      if (response.ok) {
        document.location.reload();
      } else {
        alert('Failed to create project');
      }
    }
  };

document
.querySelector('.new-comm-id')
.addEventListener('submit', newCommHandlerId);