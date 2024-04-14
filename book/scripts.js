<script>
      // This code runs once the DOM is fully loaded
      
      document.addEventListener('DOMContentLoaded', function () {
        
        fetch('resources.json')
            .then(response => response.json())
            .then(data => {
            
            const cardsContainer = document.getElementById('cards-container');

        data.forEach(item => {
            // Creating a column div
            const colDiv = document.createElement('div');
            colDiv.className = 'col-md-4 m-4';

            // Creating the card div
            const cardDiv = document.createElement('div');
            cardDiv.className = 'card';

            // Creating the card content
            let cardContent;
            if (item.type === 'video') {
                cardContent = `
                    <div class="ratio ratio-16x9">
                    <iframe src="${item.url}" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen class="embed-responsive embed-responsive-16by9"></iframe>
                    </div>
                `;
            } else { // 'reading'
                cardContent = `
                    <a href=${item.readUrl} target="_blank"><img src=${item.imageUrl} class="card-img-top" alt="${item.title}"></a>
                `;
            }
            
            // Determine the footer class based on item.type
            let footerClass = item.type === 'video' ? 'bg-info' : 'bg-warning';
            
            cardContent += `
                <div class="card-body">
                    <h5 class="card-title">${item.title}</h5>
                    <p class="card-text">${item.description}</p>
                </div>
                <div class="card-footer ${footerClass}">
                    <small class="">${item.type.toUpperCase()}</small>
                </div>
            `;

            // Adding the content to the card and the card to the column div
            cardDiv.innerHTML = cardContent;
            colDiv.appendChild(cardDiv);

            // Adding the column to the cards container
            cardsContainer.appendChild(colDiv);
            });
              
            })
            .catch(error => console.error('Error fetching JSON:', error));
    });
</script>