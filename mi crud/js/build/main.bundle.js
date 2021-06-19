"use strict";

var _this = void 0;

function _newArrowCheck(innerThis, boundThis) {
  if (innerThis !== boundThis) {
    throw new TypeError("Cannot instantiate an arrow function");
  }
}

var cars = [
  {
    name: "Mazda 2",
    model: "2019",
    doors: 5,
    color: "red",
    brand: "mazda",
  },
];

//============================================ variable para cada registro ===============================
var renderListUI = document.querySelector("#newRegister");

//============================================ variable para el formulario ===============================
var saveForm = document.querySelector("#addCar");

//============================================ condicional para crear o editar ===============================
var conditionalCrud = false;
var updateIndex = null; 

//============================================ funcion principal ============================================
var principalFunction = function principalFunction() {
  var _this2 = this;

  _newArrowCheck(this, _this);

  renderListUI.innerHTML = "";
  carsList = cars;
  carsList.forEach(
    function (element, index) {
      var _this3 = this;

      _newArrowCheck(this, _this2);

      //============================================ contendedor items ==========================================
      var itemCar = document.createElement("div");
      itemCar.setAttribute("class", "carItem");
      renderListUI.appendChild(itemCar);

      //============================================ contenedor info ==============================================
      var infoCar = document.createElement("div");
      infoCar.setAttribute("class", "infoCar");
      itemCar.appendChild(infoCar);
      
      //============================================ inserta de informacion =======================================
      var nameCar = document.createElement("p");
      nameCar.innerText = "".concat(element.name);
      var modelCar = document.createElement("p");
      modelCar.innerText = "".concat(element.model);
      var doorCar = document.createElement("p");
      doorCar.innerText = "".concat(element.doors);
      var colorCar = document.createElement("p");
      colorCar.innerText = "".concat(element.color);
      var brandCar = document.createElement("p");
      brandCar.innerText = "".concat(element.brand);
      infoCar.appendChild(nameCar);
      infoCar.appendChild(modelCar);
      infoCar.appendChild(doorCar);
      infoCar.appendChild(colorCar);
      infoCar.appendChild(brandCar);
      
      //============================================ crea de botones editar y borrar ===============================
      var divButtons = document.createElement("div");
      divButtons.setAttribute("class", "buttonsAC");
      itemCar.append(divButtons);
      
      //============================================ boton de editar ===============================================
      var updateBtn = document.createElement("button");
      updateBtn.setAttribute("class", "update");
      updateBtn.setAttribute("id", "update");
      updateBtn.innerText = "Update";
      updateBtn.addEventListener(
        "click",
        function () {
          _newArrowCheck(this, _this3);

          return updateRegister(element, index);
        }.bind(this)
      );
      
      //============================================ boton de borrar ===============================================
      var deletBtn = document.createElement("button");
      deletBtn.setAttribute("class", "delete");
      deletBtn.setAttribute("id", "delete");
      deletBtn.innerText = "Delete";
      deletBtn.addEventListener(
        "click",
        function () {
          _newArrowCheck(this, _this3);

          return deleteRegister(index);
        }.bind(this)
      );
      
      //============================================ agregar botones ===============================================
      divButtons.appendChild(updateBtn);
      divButtons.appendChild(deletBtn);
    }.bind(this)
  );
}.bind(void 0);

//======================================= funcion para crear y editar registros ==============================
var createUpdateRegister = function createUpdateRegister(event) {
  _newArrowCheck(this, _this);

  event.preventDefault();

  if (conditionalCrud) {
    var updateRG = {
      name: document.querySelector("#nameCar").value,
      model: document.querySelector("#modelOfCar").value,
      doors: document.querySelector("#doors").value,
      color: document.querySelector("#colorCar").value,
      brand: document.querySelector("#brandOfCar").value,
    };
    carsList[updateIndex] = updateRG;
    conditionalCrud = false;
    updateIndex = null;
    principalFunction();
  } else {
    var car = {
      name: document.querySelector("#nameCar").value,
      model: document.querySelector("#modelOfCar").value,
      doors: document.querySelector("#doors").value,
      color: document.querySelector("#colorCar").value,
      brand: document.querySelector("#brandOfCar").value,
    };
    carsList.push(car);
    principalFunction();
  }

  saveForm.reset();
}.bind(void 0);

//======================================= funcion para editar ===============================================
var updateRegister = function updateRegister(element, index) {
  _newArrowCheck(this, _this);

  conditionalCrud = true;
  updateIndex = index;
  (document.querySelector("#nameOfCar").value = element.name),
    (document.querySelector("#modelOfCar").value = element.model),
    (document.querySelector("#doors").value = element.doors),
    (document.querySelector("#colorCar").value = element.color),
    (document.querySelector("#brandOfCar").value = element.brand);
}.bind(void 0);

//======================================= funcion de eliminar ===============================================
var deleteRegister = function deleteRegister(index) {
  _newArrowCheck(this, _this);

  carsList.splice(index, 1);
  principalFunction();
}.bind(void 0);

//==================================== eventos escuchados formulario y listas ===============================
saveForm.addEventListener("submit", createUpdateRegister);
document.addEventListener("DOMContentLoaded", principalFunction);
