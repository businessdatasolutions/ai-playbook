<script>
    // This code runs once the DOM is fully loaded
    document.addEventListener('DOMContentLoaded', function () {
        const data = [
            {
                title: "Billion Dollar Teams: The Future of an AI Powered Workforce | SXSW 2024",
                description: "The AI honeymoon is over, but its impact has barely begun. What happens when we no longer interact with AI on discrete tasks, but it's pervasive in our work? We’ll reach that reality faster than we did with the digital revolution. We’ll explore the ability and practices of AI-enabled individuals and teams to provide exponential value; This is the era of the billion-dollar team. We’ll show examples of how new team structures, workflows, and cultures are built, including several experiments within our own organization using AI to enhance employee productivity 10x and more on specific tasks.",
                type: "video",
                url: "https://www.youtube.com/embed/1MZoxuxAfTM?si=yIGPgkvrJ2R2AgQC",
            },
            {
                title: "Read about JavaScript",
                description: "A comprehensive guide to learning JavaScript.",
                type: "reading",
                imageUrl: "https://businessdatasolutions.github.io/ai-playbook/book/docs/LandingAI_Transformation_Playbook_11-19.png",
                readUrl: "https://businessdatasolutions.github.io/ai-playbook/book/docs/LandingAI_Transformation_Playbook_11-19.pdf"
            },
            // Add more objects for each card you want to create
        ];

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
            cardContent += `
                <div class="card-body">
                    <h5 class="card-title">${item.title}</h5>
                    <p class="card-text">${item.description}</p>
                </div>
                <div class="card-footer">
                    <small class="text-muted">${item.type.toUpperCase()}</small>
                </div>
            `;

            // Adding the content to the card and the card to the column div
            cardDiv.innerHTML = cardContent;
            colDiv.appendChild(cardDiv);

            // Adding the column to the cards container
            cardsContainer.appendChild(colDiv);
        });
    });
</script>
