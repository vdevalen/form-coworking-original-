function si_pc() {
    document.getElementById("mensaje").style.display = "none"; //none= esconde
    document.getElementById("modalidad").style.display = "block";  //block visible   
    document.getElementById("dispuesto").style.display = "none"; 

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
}

function presencial(){
    document.getElementById("mensaje_exito").style.display = "block";
    document.getElementById("productivo").style.display = "none";
    document.getElementById("internet").style.display = "none";
    document.getElementById("reqvpn").style.display = "none";   
    document.getElementById("personal").style.display = "none";
    document.getElementById("dispuesto").style.display = "none"; 

}
function remoto_alternacia(){
    document.getElementById("mensaje_exito").style.display = "none";
    document.getElementById("productivo").style.display = "block";
    document.getElementById("internet").style.display = "block";
    document.getElementById("dispuesto").style.display = "none"; 
    document.getElementById("reqvpn").style.display = "block";
}

// function internet(){
//     document.getElementById("internet").style.display = "block";
//     document.getElementById("dispuesto").style.display = "none"; 

// }
// function necesita_vpn(){
//     document.getElementById("reqvpn").style.display = "block";
//     document.getElementById("dispuesto").style.display = "none"; 
// }

function personal_pc(){
    document.getElementById("personal").style.display = "block";
    document.getElementById("dispuesto").style.display = "none"; 

}

function si_dispuesto(){
    document.getElementById("dispuesto").style.display = "block" ;  //block visible   
}

function no_dispuesto(){
    document.getElementById("dispuesto").style.display = "none";  
}