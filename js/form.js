    
    const idIdex = document.querySelector('#register-link');
    const oneForm = document.querySelector('#one');
    const thwooForm = document.querySelector('#thwoo');
    const nextForm = document.querySelector('#register-kirish');


    idIdex.addEventListener('click', () => {
      console.log(1)
      oneForm.style.display = 'none';
      thwooForm.style.display = 'block';
    })

    nextForm.addEventListener('click', () => {
      console.log(1)
      oneForm.style.display = 'block ';
      thwooForm.style.display = 'none';
    })

    //====== Error input

    const form = document.querySelector('.form'),
      userName = document.querySelector('.username'),
      password = document.querySelector('.password'),
      email = document.querySelector('.email'),
      Phone = document.querySelector('.phone'),
      error = document.querySelector('.error__email'),
      succes = document.querySelector('.succes'),
      errorPassword = document.querySelector('.error__password');

    form.addEventListener('submit', (e) => {
      let message = [];
      if (email.value === '' || email.value == null) {
        message.push(`Email kiritilmagan `)
        email.style.border = '3px solid rgba(218, 36, 36, 0.747)'

      } else {
        message.push(` `)
        email.style.border = '1px solid #000'
      }
      if (password.value.length <= 6) {
        errorPassword.innerText = '6 xonalik kod kiriting'
        password.style.border = '3px solid rgba(218, 36, 36, 0.747)'

      } else if (password.value.length >= 20) {
        errorPassword.innerText = 'Kod 20 xonadan oshmasligi'
        password.style.border = '3px solid rgba(218, 36, 36, 0.747)'

      } else {
        password.style.border = '1px solid  #000'
        errorPassword.innerText = ''
        succes.style.display = 'block'
      }

      if (message.length > 0) {
        e.preventDefault();
        error.innerText = message.join(',')
      }

    });
  
  