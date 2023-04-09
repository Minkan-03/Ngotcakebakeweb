const form = document.getElementById('myForm');
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const numberInput = document.getElementById('number');
const addressInput = document.getElementById('address');

form.addEventListener('submit', (event) => {
  event.preventDefault();
  
  if (nameInput.value === '') {
    alert('Bạn chưa nhập tên');
    return;
  }
  
  if (emailInput.value === '') {
    alert('Bạn chưa nhập email');
    return;
  }
  
  if (numberInput.value === '') {
    alert('Bạn chưa nhập số điện thoại');
    return;
  }
  
  if (numberInput.value.length < 10) {
    alert('Số điện thoại phải có ít nhất 10 ký tự');
    return;
  }

  if (addressInput.value === '') {
    alert('Bạn chưa nhập địa chỉ');
    return;
  }
  
  // Nếu không có lỗi, gửi biểu mẫu
  form.submit();
});
