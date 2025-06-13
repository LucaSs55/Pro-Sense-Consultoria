const accordionItem = document.getElementsByClassName("accordion-item")

for( i = 0; i<accordionItem.length;i++){
    accordionItem[i].addEventListener('click', function()  {
        this.classList.toggle("active")
    })
}

const counters = document.querySelectorAll(".counter span");
const container = document.querySelector(".counter-container");

let activated = false;
window.addEventListener("scroll", () => { /* Garante que a função so será ativida no momento certo */
    if (
        pageYOffset > container.offsetTop - container.offsetHeight - 200
        && activated === false
    ) {
        activated = true
        counters.forEach(counter => { /* Função que faz a animação no site */
            let count = 0;
            const target = parseInt(counter.dataset.count);
            const step = Math.ceil(target / 100);
            function updateCount() {
                const target = parseInt(counter.dataset.count);
                if(count < target) {
                    count += step;
                    counter.innerText = count;
                    setTimeout(updateCount, 6);
                } else {
                    counter.innerText = target;
                }
            }
            updateCount();
        });
    } else if( /* Garante que a função possa ser reativada */
        pageYOffset < container.offsetTop - container.offsetHeight - 500
        || pageYOffset === 0
        && activated === true
        ) {
            counters.forEach(counter => {
                counter.innerText = 0;
            });
            activated = false;
        }
    });
