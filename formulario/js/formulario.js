const formularioPr = document.getElementById('formulariopr')
const url = 'http://localhost:3001/api/form'
const namePreguntas = [
    "havePc",
    "workModality",
    "productiveAtHome",
    "internetConnection",
    "requireVpn",
    "doYouHavePersonalPc",
    "wouldYouWorkYourPc"]
    
let dispuestoPCPersonal = true
let esRemoto = true
let completed = new Object

function si_pc() {
    document.getElementById("mensaje").style.display = "none"; //none= esconde
    document.getElementById("modalidad").style.display = "block";  //block= visible   
    document.getElementById("dispuesto").style.display = "none"; 
    document.getElementById("boton-enviar-no").style.display = "none"; 
    document.getElementById("boton-enviar-si").style.display = "block";
}

function boton_enviar_si(){
    swal ( " ¡Buen trabajo! " , " ¡Datos enviados con exito! " , "success" )   ;
}


function no_pc() {
    document.getElementById("mensaje").style.display = "block";
    document.getElementById("modalidad").style.display = "none";
    document.getElementById("productivo").style.display = "none";
    document.getElementById("internet").style.display = "none";
    document.getElementById("reqvpn").style.display = "none";   
    document.getElementById("personal").style.display = "none";
    document.getElementById("dispuesto").style.display = "none"; 
    document.getElementById("mensaje_exito").style.display = "none";
    document.getElementById("boton-enviar-si").style.display = "none";
    document.getElementById("boton-enviar-no").style.display = "block";
}

function boton_enviar_no(){
    swal ( " ¡Espera! " , " ¡Solicitar al lider que le asigne uno para completar el proceso de enrolamiento en la compañia! " , "warning" );
}





function presencial(){
    document.getElementById("mensaje_exito").style.display = "block";
    document.getElementById("productivo").style.display = "none";
    document.getElementById("internet").style.display = "none";
    document.getElementById("reqvpn").style.display = "none";   
    document.getElementById("personal").style.display = "none";
    document.getElementById("dispuesto").style.display = "none"; 
    esRemoto = false
    enviarFormPresencial()
}

function remoto_alternacia(){
    document.getElementById("mensaje_exito").style.display = "none";
    document.getElementById("productivo").style.display = "block";
    document.getElementById("internet").style.display = "block";
    document.getElementById("dispuesto").style.display = "none"; 
    document.getElementById("reqvpn").style.display = "block";
    esRemoto = true
    enviarFormRemotoAlterno()
}

function personal_pc(){
    document.getElementById("personal").style.display = "block";
    document.getElementById("dispuesto").style.display = "none"; 

}

function si_dispuesto(){
    document.getElementById("dispuesto").style.display = "block" ;   
}

function no_dispuesto(){
    document.getElementById("dispuesto").style.display = "none";  
    dispuestoPCPersonal = false
    for (let index = 0; index < document.getElementsByName('wouldYouWorkYourPc').length; index++) {
        const element = document.getElementsByName('wouldYouWorkYourPc')[index];
        element.removeAttribute('required')

    } 
}

formularioPr.addEventListener('submit', (e) => {
    e.preventDefault()
    const data = validarRadioPc()
    console.log("desde el evento", data);
    
    let req = {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
        'Content-Type':'application/json'
        },
    }
    
    fetch(url,req)
    .then(res => console.log(res))
    .catch(err => console.log(err) )
})


function validarRadioPc() {
    if (esRemoto && dispuestoPCPersonal) {
        return validarRemotoAlternancia()
    }else if(esRemoto && !dispuestoPCPersonal){    
        return validarRemotoAlternanciaSinPc()
    } else {
        return validarPresencial()
    }
}


function validarRemotoAlternancia() {
        const preguntas = namePreguntas
        for (const pregunta of preguntas) {
            document.getElementsByName(pregunta).forEach(element => {
                if (element.checked) {
                    completed[element.name] = element.value
                }
            });
        }
        console.log("desde remoto ", completed);
        return completed
}

function validarRemotoAlternanciaSinPc() {
    const preguntas = namePreguntas
    for (const pregunta of preguntas) {
        document.getElementsByName(pregunta).forEach(element => {
            if (element.checked) {
                completed[element.name] = element.value
            }
        });
    }
    const i = namePreguntas.indexOf("wouldYouWorkYourPc")
    completed[namePreguntas[i]]="no"
    console.log("desde remoto ", completed);
    return completed
}

function validarPresencial() {
    const preguntas = namePreguntas
        for (const pregunta of preguntas) {
            document.getElementsByName(pregunta).forEach(element => {
                    completed[element.name] = "no"
            });
        }
        completed[namePreguntas[0]] = "si"
        completed[namePreguntas[1]] = "presencial"
        console.log("desde presencial ", completed);
        
        return completed
}
function enviarFormPresencial() {
    let preguntas = namePreguntas
    for (const pregunta of preguntas) {
        for (let index = 0; index < document.getElementsByName(pregunta).length; index++) {
            const element = document.getElementsByName(pregunta)[index];
            element.removeAttribute('required')
            console.log(document.getElementsByName(pregunta));
        }
    }
}

function enviarFormRemotoAlterno() {
    let preguntas = namePreguntas
    for (const pregunta of preguntas) {
        for (let index = 0; index < document.getElementsByName(pregunta).length; index++) {
            const element = document.getElementsByName(pregunta)[index];
            element.required = 'true'
            console.log(document.getElementsByName(pregunta));
        }
    }
}

