function sendMail(event){
  event.preventDefault();
  var tempParams = {
      from_name: document.getElementById("fromName").value,
      message: document.getElementById("msg").value,
  };
  emailjs.send("gmail","template_5j69nw8",tempParams)
  .then(function(res){
    document.getElementById("fromName").disabled=true;
    document.getElementById("msg").disabled=true;
    document.getElementById("button").innerHTML="Sent!";
    document.getElementById("button").disabled=true;
    console.log("success", res.status);
  })
}
document.getElementById('button').addEventListener("click",sendMail);
