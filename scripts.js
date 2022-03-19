const btns = document.querySelectorAll('.btn-filter');
const cardsContainer = document.querySelectorAll('.card-container');

for (i = 0; i < btns.length; i++) {
    btns[i].addEventListener("click", (e) => {
        e.preventDefault();

        const filter = e.target.dataset.filter;
        console.log(filter);
        cardsContainer.forEach((card)=> {
            if (filter == "all") {
                card.style.display = "block"
            } else {
                if (card.classList.contains(filter)) {
                    card.style.display = "block"
                } else {
                    card.style.display = "none"
                }
            }
        })
    })
}