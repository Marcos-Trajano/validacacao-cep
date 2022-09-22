const cep = document.querySelector("#cep")

const showData = (result) => {
    for(const campo in result){
        if(document.querySelector("#"+campo))
            document.querySelector("#"+campo).value = result[campo]
    }
}

cep.addEventListener("blur",(e)=>{

    let search = cep.value.replace("-","")

    const options = {
        method: 'GET',
        mode: 'cors',
        cache: 'default'
    }

    let url = `https://viacep.com.br/ws/${search}/json/`

    fetch(url, options)
    .then(Response => {Response.json()
        .then( data => showData(data))
    })
    .catch(e => console.log("Deu erro" + e, message))
})

const button = document.querySelector(".button_send")

button.addEventListener('click', event =>{

    alert("Seu cep foi validado!") 

})

function erro(){

    if(cep < 8){
        alert("Seu cep é invalido!")
    }
}