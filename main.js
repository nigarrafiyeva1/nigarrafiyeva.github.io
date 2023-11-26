
document.querySelectorAll('.team-member-card, .team-member-card-2').forEach(card => {
    card.addEventListener('click', function() {
        this.classList.toggle('active');
    });
});

