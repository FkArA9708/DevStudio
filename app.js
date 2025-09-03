
        document.addEventListener('DOMContentLoaded', function() {
            // Voortgangsbalken animeren
            const progressBars = document.querySelectorAll('.progress');
            progressBars.forEach(bar => {
                const width = bar.style.width;
                bar.style.width = '0';
                setTimeout(() => {
                    bar.style.transition = 'width 1s ease-in-out';
                    bar.style.width = width;
                }, 500);
            });
            
            // Cursuskaart interactie
            const courseCards = document.querySelectorAll('.course-card');
            courseCards.forEach(card => {
                card.addEventListener('mouseenter', () => {
                    card.style.boxShadow = '0 15px 30px rgba(0, 0, 0, 0.2)';
                });
                
                card.addEventListener('mouseleave', () => {
                    card.style.boxShadow = '0 5px 15px rgba(0, 0, 0, 0.1)';
                });
            });
        });