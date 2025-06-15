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

// Slider
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

function errorInput(input, message){
  const formItem = input.parentElement;
  const textMessage = formItem.querySelector("a")
  textMessage.innerText = message;
  formItem.className = "form-content error"
}

// Evento de envio tirar essa porra
// form.addEventListener("submit", (event) => {
//     event.preventDefault();

//     const isFormValid =
//         checkUsername() &&
//         checkEnterpriseName() &&
//         checkPhoneNumber() &&
//         checkEmail();

//     if (isFormValid) {
//         openPopup();
//         form.reset();
//         clearAllSuccess();
//     }
// });

// // Funções de validação
// function checkUsername() {
//     const usernameValue = username.value.trim();
//     const regexName = /^[A-Za-zÀ-ÖØ-öø-ÿ\s]+$/;
//     if (usernameValue === "") {
//         errorInput(username, "*Este campo é obrigatório");
//         return false;

//     } else if (!regexName.test(usernameValue)) {
//         errorInput(username, "*Números e caracteres especiais não são permitidos");
//         return false;

//     } else {
//         successInput(username);
//         return true;
//     }
// }

// function checkEnterpriseName() {
//     const enterpriseValue = enterprise.value.trim();

//     if (enterpriseValue === "") {
//         errorInput(enterprise, "*Este campo é obrigatório");
//         return false;

//     } else {
//         successInput(enterprise);
//         return true;
//     }
// }

// function checkPhoneNumber() {
//     const phoneValue = phone.value.trim();
//     const regexPhone = /^\(\d{2}\)\s9\d{4}-\d{4}$/;
//     if (phoneValue === "") {
//         errorInput(phone, "*Este campo é obrigatório");
//         return false;
//     } else if (!regexPhone.test(phoneValue)) {
//         errorInput(phone, "*Formato inválido. Ex: (11) 91234-5678");
//         return false;
//     } else {
//         successInput(phone);
//         return true;
//     }
// }

// function formatPhoneNumber(value) {
//     value = value.replace(/\D/g, "");

//     if (value.length <= 2) {
//         return `(${value}`;
//     } else if (value.length <= 6) {
//         return `(${value.slice(0, 2)}) ${value.slice(2)}`;
//     } else if (value.length <= 10) {
//         return `(${value.slice(0, 2)}) ${value.slice(2, 7)}-${value.slice(7)}`;
//     } else {
//         return `(${value.slice(0, 2)}) ${value.slice(2, 7)}-${value.slice(7, 11)}`;
//     }
// }



// function checkEmail() {
//     const emailValue = email.value.trim();
//     const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//     if (value === "") {
//         errorInput(email, "*Este campo é obrigatório");
//         return false;
//     } else if (!regexEmail.test(emailValue)) {
//         errorInput(email, "*Email inválido");
//         return false;
//     } else {
//         successInput(email);
//         return true;
//     }
// }

// // Funções de erro e sucesso
// function errorInput(input, message) {
//     const formItem = input.parentElement;
//     const a = formItem.querySelector("a");
//     a.innerText = message;
//     formItem.classList.add("error");
// }

// function successInput(input) {
//     const formItem = input.parentElement;
//     const a = formItem.querySelector("a");
//     a.innerText = "";
//     formItem.classList.remove("error");
// }

// function clearAllSuccess() {
//     [username, enterprise, phone, email].forEach((input) => {
//         const formItem = input.parentElement;
//         formItem.classList.remove("error");
//     });
// }

// // 🟩 Popup
// function openPopup() {
//      const popup = document.getElementById("popup");
//      popup.classList.remove("hidden");
// // }

// function closePopup() {
//     const popup = document.getElementById("popup");
//     popup.classList.add("hidden");
// }

// // 🟦 Formatação do número de celular em tempo real
// phone.addEventListener("input", (e) => {
//     e.target.value = formatPhoneNumber(e.target.value);
// });

//  function formatPhoneNumber(value) {
//      value = value.replace(/\D/g, "");

//      if (value.length <= 2) {
//         return `(${value}`;
//     } else if (value.length <= 6) {
//          return `(${value.slice(0, 2)}) ${value.slice(2)}`;
//     } else if (value.length <= 10) {
//         return `(${value.slice(0, 2)}) ${value.slice(2, 7)}-${value.slice(7)}`;
//     } else {
//         return `(${value.slice(0, 2)}) ${value.slice(2, 7)}-${value.slice(7, 11)}`;
//     }
//  }