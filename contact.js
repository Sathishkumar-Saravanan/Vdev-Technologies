function submitform(){
  const name = document.getElementById("name").value;
  const mail = document.getElementById("email").value;
  const number = document.getElementById("num").value;
  const subject = document.getElementById("content").value;
  const message = document.getElementById("message");

  if(name === "" || mail === "" || number === "" || subject === "" || message === ""){
    alert("Please fill the fields");
    return;
  }
  alert("Our team will contact you shortly")
}