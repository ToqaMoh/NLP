function handleSubmit(event) {
    debugger

    event.preventDefault();

    const format = document.querySelector("input[name=format]:checked").value;
    const input = document.getElementById("input-text").value;


    Client.formValidation(format, input);


}

  

export default handleSubmit
