
document.getElementById("saveDataBtn").addEventListener("click", function (e) {
  e.preventDefault();
  var type_id = document.getElementById("type_id").value;
  var ident = document.getElementById("ident").value;
  var name = document.getElementById("name").value;
  var email = document.getElementById("email").value;
  var mobile = document.getElementById("mobile").value;
  var age = document.getElementById("age").value;
  if (
    type_id == "" ||
    ident == "" ||
    name == "" ||
    email == "" ||
    mobile == ""||
    age == ""
  ) {
      alert("Debe completar todos los campos!");
  } else {
    localStorage.setItem(ident, [
      type_id,
      ident,
      name,
      email, 
      mobile,
      age,
    ]);
    alert("Sus datos quedaron guardados");
  }
});

