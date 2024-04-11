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
                "title": "What's next for AI agentic workflows ft. Andrew Ng of AI Fund",
                "description": "Andrew Ng, founder of DeepLearning.AI and AI Fund, speaks at Sequoia Capital's AI Ascent about what's next for AI agentic workflows and their potential to significantly propel AI advancements—perhaps even surpassing the impact of the forthcoming generation of foundational models.",
                "type": "video",
                "url": "https://www.youtube.com/embed/sal78ACtGTc?si=H61Oyx1p4892tkOd",
            },
            {
                "title": "What's next for AI agents ft. LangChain's Harrison Chase",
                "description": "Harrison Chase, founder of LangChain, speaks at Sequoia Capital's AI Ascent about what's next for agents in AI and the evolution of using language model to interact with the external world. Harrison identifies three critical areas of development for the next generation of agents that would make them production-ready and more impactful in the real world: planning, user experience and memory.",
                "type": "video",
                "url": "https://www.youtube.com/embed/pBBe1pk8hf4?si=kU9i5J0i5QNy-KPd",
            },
            {
                title: "AI Transformation Playbook",
                description: "How to lead your company into the AI era.",
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
    });
</script>