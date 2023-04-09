const wrapper = document.querySelector('.wrapper');
const loginLink = document.querySelector('.login-link');
const registerLink = document.querySelector('.register-link');

registerLink.addEventListener('click', ()=> {
    wrapper.classList.add('active');
});

loginLink.addEventListener('click', ()=> {
    wrapper.classList.remove('active');
});

//validate form 
const form = document.getElementById('myForm');

const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');

form.addEventListener('submit', (event) => {
  event.preventDefault();
  
  if (emailInput.value === '') {
    alert('Bạn chưa nhập email');
    return;
  }
  
  if (passwordInput.value === '') {
    alert('Bạn chưa nhập mật khẩu');
    return;
  }
  
  if (passwordInput.value.length < 6) {
    alert('Mật khẩu phải có ít nhất 6 ký tự');
    return;
  }
  
  // Nếu không có lỗi, gửi biểu mẫu
  form.submit();
});

