import "./styles.css";

var name = "";
//var personSelected = document.getElementsByName("persons");
//for (let i = 0; i < personSelected.length; i++) {}
var countAciertos = 0;
//var countFallos = 0;

function calculateScoreInformation() {
  //--------------Manejo de radio buttons

  //se colocara un mismo nombre persons y indicamos que nos brinde el valor selecionado
  //la funcion querySelector lo que hace es que devuelve el primero que cumple con los selectores CSS que le pasamos
  if (document.querySelector('input[name="persons"]:checked')) {
    let valuePersons = document.querySelector('input[name="persons"]:checked')
      .value; //<input type="radio" name="persons" value="1"/>
    console.log(valuePersons);
    //valuePersons puede ser "1" o 1
    if (parseInt(valuePersons, 10) === 3)
      // valuePersons==1? false
      countAciertos++;
    //countAciertos=countAciertos+1
    //else countFallos++;
    //entonces el usuario ha marcado correctamente, guardar ese valor y un boolean en true
    //console.log(valuePersons);
  }

  //se colocara un mismo nombre persons y indicamos que nos brinde el valor selecionado
  //la funcion querySelector lo que hace es que devuelve el primero que cumple con los selectores CSS que le pasamos
  if (document.querySelector('input[name="country"]:checked')) {
    let valueCountry = document.querySelector('input[name="country"]:checked')
      .value; //<input type="radio" name="persons" value="1"/>
    //valuePersons puede ser "1" o 1
    if (parseInt(valueCountry, 10) === 1)
      // valuePersons==1? false
      countAciertos++;
    //countAciertos=countAciertos+1
    // else countFallos++;
    //entonces el usuario ha marcado correctamente, guardar ese valor y un boolean en true
    //console.log(valuePersons);
  }

  if (document.querySelector('input[name="city"]:checked')) {
    let valueCity = document.querySelector('input[name="city"]:checked').value; //<input type="radio" name="persons" value="1"/>
    //valuePersons puede ser "1" o 1
    if (parseInt(valueCity, 10) === 1)
      // valuePersons==1? false
      countAciertos++;
    //countAciertos=countAciertos+1
    // else countFallos++;
    //entonces el usuario ha marcado correctamente, guardar ese valor y un boolean en true
    //console.log(valuePersons);
  }
}

function calculateScoreCareful() {
  if (document.querySelector('input[name="time"]:checked')) {
    let valueTime = document.querySelector('input[name="time"]:checked').value; //<input type="radio" name="persons" value="1"/>
    //valuePersons puede ser "1" o 1
    if (parseInt(valueTime, 10) === 2)
      // valuePersons==1? false
      countAciertos++;
    //countAciertos=countAciertos+1
    //else countFallos++;
    //entonces el usuario ha marcado correctamente, guardar ese valor y un boolean en true
    //console.log(valuePersons);
  }

  if (document.querySelector('input[name="implement"]:checked')) {
    let valueImplement = document.querySelector(
      'input[name="implement"]:checked'
    ).value; //<input type="radio" name="persons" value="1"/>
    //valuePersons puede ser "1" o 1
    if (parseInt(valueImplement, 10) === 1)
      // valuePersons==1? false
      countAciertos++;
    //countAciertos=countAciertos+1
    // else countFallos++;
    //entonces el usuario ha marcado correctamente, guardar ese valor y un boolean en true
    //console.log(valuePersons);
  }

  if (document.querySelector('input[name="senses"]:checked')) {
    let valueSenses = document.querySelector('input[name="senses"]:checked')
      .value; //<input type="radio" name="persons" value="1"/>
    //valuePersons puede ser "1" o 1
    if (parseInt(valueSenses, 10) === 1)
      // valuePersons==1? false
      countAciertos++;
    //countAciertos=countAciertos+1
    //else countFallos++;
    //entonces el usuario ha marcado correctamente, guardar ese valor y un boolean en true
    //console.log(valuePersons);
  }
}

//--------------Manejo de botones de la secció de preguntas de Información
document.getElementById("play").addEventListener("click", () => {
  //le pasamos por parámetro al addEventListener una función anónima () => {}
  document.getElementById("welcome").style.display = "none";
  document.getElementById("question").style.display = "block";
  name = document.getElementById("user-name").value;
  document.getElementById("display-name").innerHTML = name;
  //console.log(document.getElementById("display-name").innerHTML);
});

document.getElementById("info").addEventListener("click", () => {
  //le pasamos por parámetro al addEventListener una función anónima () => {}
  document.getElementById("question").style.display = "none";
  document.getElementById("persons").style.display = "block";
});

document.getElementById("btn-persons").addEventListener("click", () => {
  //le pasamos por parámetro al addEventListener una función anónima () => {}
  document.getElementById("persons").style.display = "none";
  document.getElementById("country").style.display = "block";
});

document.getElementById("btn-country").addEventListener("click", () => {
  //le pasamos por parámetro al addEventListener una función anónima () => {}
  document.getElementById("country").style.display = "none";
  document.getElementById("city").style.display = "block";
});

//--------------Manejo de botones de la sección de preguntas de Cuidado o Careful
document.getElementById("care").addEventListener("click", () => {
  //le pasamos por parámetro al addEventListener una función anónima () => {}
  document.getElementById("question").style.display = "none";
  document.getElementById("time").style.display = "block";
});

document.getElementById("btn-time-next").addEventListener("click", () => {
  //le pasamos por parámetro al addEventListener una función anónima () => {}
  document.getElementById("time").style.display = "none";
  document.getElementById("implement").style.display = "block";
});

document.getElementById("btn-implements-next").addEventListener("click", () => {
  //le pasamos por parámetro al addEventListener una función anónima () => {}
  document.getElementById("implement").style.display = "none";
  document.getElementById("senses").style.display = "block";
});

//document.getElementById("btn-verify-careful").addEventListener("click", () => {
//le pasamos por parámetro al addEventListener una función anónima () => {}
// document.getElementById("implement").style.display = "none";
// document.getElementById("senses").style.display = "block";
//});

//----- Acciones de los botones enviar respuestas de info y de careful
//document.getElementById("display-stats").innerHTML = countAciertos;
document
  .getElementById("btn-send-information")
  .addEventListener("click", () => {
    //console.log(document.getElementById("btn-send-information"));
    //le pasamos por parámetro al addEventListener una función anónima () => {}
    //document.getElementById("implement").style.display = "none";
    //document.getElementById("senses").style.display = "block";  stats
    //llamar calcular score
    calculateScoreInformation();
    //document.getElementById("btn-verify-information").style.display = "none";
    document.getElementById("btn-send-information").style.display = "none";
    document.getElementById("city").style.display = "none";
    document.getElementById("stats").style.display = "block";
    document.getElementById("display-stats").innerHTML = countAciertos;
    //console.log(document.getElementById("display-stats"));
  });

document.getElementById("btn-send-careful").addEventListener("click", () => {
  //console.log(document.getElementById("btn-send-information"));
  //le pasamos por parámetro al addEventListener una función anónima () => {}
  //document.getElementById("implement").style.display = "none";
  //document.getElementById("senses").style.display = "block";  stats
  //llamar calcular score
  calculateScoreCareful();
  //document.getElementById("btn-verify-careful").style.display = "none";
  // document.getElementById("btn-send-careful").style.display = "none";
  document.getElementById("senses").style.display = "none";
  document.getElementById("stats").style.display = "block";
  document.getElementById("display-stats").innerHTML = countAciertos;

  document.getElementById("btn-play-again").style.display = "block";
  //document.getElementById("care").style.display = "block";
  countAciertos = 0;

  //console.log(document.getElementById("display-stats"));
});

//-------------------acción del btn de volver a jugar----------------
document.getElementById("btn-play-again").addEventListener("click", () => {
  //le pasamos por parámetro al addEventListener una función anónima () => {}
  // document.getElementById("senses").style.display = "none";

  //ocultar todo lo que ves en ese momento
  document.getElementById("stats").style.display = "none";
  document.getElementById("btn-play-again").style.display = "none";

  //lo que quiero mostrar
  document.getElementById("question").style.display = "block";

  //limpiar todas las respuestas
  document.querySelector('input[name="time"]:checked').checked = false;
  document.querySelector('input[name="implement"]:checked').checked = false;
  document.querySelector('input[name="senses"]:checked').checked = false;

  // document.getElementById("btn-play-again").style.display = "none";
  // document.getElementById("stats").innerHTML = "none";
});

//-------------------validación del input de jugar-------------------
document.getElementById("user-name").addEventListener("keyup", () => {
  //le pasamos por parámetro al addEventListener una función anónima () => {}
  var apodoValue = document.getElementById("user-name").value;
  if (apodoValue) {
    document.getElementById("play").disabled = false;
  } else {
    document.getElementById("play").disabled = true;
  }
});
