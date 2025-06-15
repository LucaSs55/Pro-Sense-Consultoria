// Accordions
const accordionItem = document.getElementsByClassName("accordion-item")
for( i = 0; i<accordionItem.length;i++){
    accordionItem[i].addEventListener('click', function()  {
        this.classList.toggle("active")
    })
}

// Contador
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

// Slider-Web
const track = document.querySelector('.slide-pass');
const slides = document.querySelectorAll('.slide');
const prev = document.querySelector('.left');
const next = document.querySelector('.right');

let index = 0;

  function updateSlide() {
    track.style.transform = `translateX(-${index * 100}%)`;
  }

  next.addEventListener('click', () => {
    if (index < slides.length - 1) {
      index++;
      updateSlide();
    }
  });

  prev.addEventListener('click', () => {
    if (index > 0) {
      index--;
      updateSlide();
    }
  });

// Slider-Mobile

const sliderMobile = document.querySelector('.slider-mobile');
const mobilePrevButton = document.getElementById('mobile-prev-btn');
const mobileNextButton = document.getElementById('mobile-next-btn');

mobilePrevButton.addEventListener('click', () => {
    sliderMobile.scrollBy({
        left: -270,
        behavior: 'smooth'
    });
});

// Touchscreen e arraste do carrossel
sliderMobile.addEventListener('touchstart', (e) => {
    isDown = true;
    startX = e.touches[0].pageX - sliderMobile.offsetLeft;
    scrollLeft = sliderMobile.scrollLeft;
});
sliderMobile.addEventListener('touchend', () => {
    isDown = false;
});
sliderMobile.addEventListener('touchmove', (e) => {
    if(!isDown) return;
    const x = e.touches[0].pageX - sliderMobile.offsetLeft;
    const walk = (x - startX) * 1.5;
    sliderMobile.scrollLeft = scrollLeft - walk;
});

mobileNextButton.addEventListener('click', () => {
    sliderMobile.scrollBy({
        left: 270,
        behavior: 'smooth'
    });
});

// Validações de formulário e pop-up
const form = document.getElementById("form-contact");
const username = document.getElementById("nome")
const enterprise = document.getElementById("empresa")
const phone = document.getElementById("telefone")
const email = document.getElementById("email");
const popup = document.getElementById("popup")
const closePopup = document.getElementById("close-btn");



closePopup.addEventListener("click", () => {
    popup.classList.add("hidden")
})

form.addEventListener("submit", (event) => {
  event.preventDefault();

  checkForm();
})

email.addEventListener("blur", () => {
  checkEmail();
})


username.addEventListener("blur", () => {
  checkUsername();
})


function checkUsername(){
    const usernameValue = username.value;
    const regexName = /^[A-Za-zÀ-ÖØ-öø-ÿ\s]+$/;

    if(usernameValue === ""){
        errorInput(username, "*Campo de preenchimento obrigatório")

    }else if(!regexName.test(usernameValue)){
        errorInput(username, "*Números e caracteres especiais não são permitidos");
        return false;

    }else{
         const formItem = username.parentElement;
        formItem.className = "form-content"
        }
}

function checkEnterprise(){
  const enterpriseValue = enterprise.value;

  if(enterpriseValue === ""){
    errorInput(enterprise, "*Campo obrigatório")

  }else{
    const formItem = enterprise.parentElement;
    formItem.className = "form-content"
  }

}

function checkPhoneNumber(){
    const phoneValue = phone.value.trim();
    const regexPhone = /^\(\d{2}\)\s9\d{4}-\d{4}$/;
    if (phoneValue === "") {
        errorInput(phone, "*Este campo é obrigatório");
        return false;
   
    }else if (!regexPhone.test(phoneValue)) {
        errorInput(phone, "*Formato inválido. Ex: (11) 91234-5678");
        return false;

    }else{
        const formItem = enterprise.parentElement;
        formItem.className = "form-content"
  }

}

function formatPhoneNumber(value) {
     value = value.replace(/\D/g, "");

     if (value.length <= 2) {
        return `(${value}`;
    } else if (value.length <= 6) {
         return `(${value.slice(0, 2)}) ${value.slice(2)}`;
    } else if (value.length <= 10) {
        return `(${value.slice(0, 2)}) ${value.slice(2, 7)}-${value.slice(7)}`;
    } else {
        return `(${value.slice(0, 2)}) ${value.slice(2, 7)}-${value.slice(7, 11)}`;
    }
 }

phone.addEventListener("input", (e) => {
    e.target.value = formatPhoneNumber(e.target.value);
});

function checkEmail(){
    const emailValue = email.value.trim();
    const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (emailValue === "") {
        errorInput(email, "*Este campo é obrigatório");
        return false;
    } else if (!regexEmail.test(emailValue)) {
        errorInput(email, "*Use um domínio válido; ex:@gmail.com");
        return false;
    }else{
        const formItem = enterprise.parentElement;
        formItem.className = "form-content"
    }

}

function checkForm(){
  checkUsername();
  checkEnterprise();
  checkPhoneNumber();
  checkEmail();
  const formItems = form.querySelectorAll(".form-content")
  const isValid = [...formItems].every( (item) => {
    return item.className === "form-content"
  });

  if(isValid){
    const popup = document.getElementById("popup");
    popup.classList.remove("hidden");
    }

}
// Manipula o dom para os casos de erro
function errorInput(input, message){
  const formItem = input.parentElement;
  const textMessage = formItem.querySelector("a")
  textMessage.innerText = message;
  formItem.className = "form-content error"
}

/* Menu hamburger */
const hamburger = document.querySelector(".hamburger");
const menu = document.querySelector(".menu");
const menuItem = document.querySelectorAll(".menu-item")

hamburger.addEventListener("click", () => {
    menu.classList.toggle("active")});
menuItem.forEach (link => { /* Desativa a função ao clickar em cada link */
    link.addEventListener("click", () => {
        menu.classList.remove("active");
    })
})



