const getPassword = () => {
  let password = document.getElementById("password");
  let karekterler =
    "0123456789abcdefghijklmnopqrstuvwxyz!@#$%^&*()ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  let yeniPassword = "";
  let passwordUzunluk = 10;
  for (var i = 0; i < passwordUzunluk; i++) {
    var index = Math.floor(Math.random() * karekterler.length);
    yeniPassword += karekterler[index];
  }
  password.value = yeniPassword;

  console.log(yeniPassword);
};

const silPassword = () => {
  password.value = "";
};
