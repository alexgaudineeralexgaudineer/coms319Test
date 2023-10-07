fetch('data.json')
    .then(response => response.json())
    .then(data => {
        const contentDiv = document.getElementById('content');
        data.forEach(item => {
            const img = document.createElement('img');
            img.src = item.imagePath;
            contentDiv.appendChild(img);
            
            const text = document.createElement('p');
            text.textContent = item.text;
            contentDiv.appendChild(text);
        });
    })
    .catch(error => console.error('Error fetching data:', error));