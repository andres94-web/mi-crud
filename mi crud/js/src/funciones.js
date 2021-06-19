//============================================ funcion principal ============================================
const principalFunction = () => {
  renderListUI.innerHTML = "";
  carsList = cars;

  carsList.forEach((element, index) => {
    //============================================ contendedor items ==========================================
    let itemCar = document.createElement("div");
    itemCar.setAttribute("class", "carItem");
    renderListUI.appendChild(itemCar);

    //============================================ contenedor info ==============================================
    let infoCar = document.createElement("div");
    infoCar.setAttribute("class", "infoCar");
    itemCar.appendChild(infoCar);

    //============================================ inserta de informacion =======================================
    let nameCar = document.createElement("p");
    nameCar.innerText = `${element.name}`;

    let modelCar = document.createElement("p");
    modelCar.innerText = `${element.model}`;

    let doorCar = document.createElement("p");
    doorCar.innerText = `${element.doors}`;

    let colorCar = document.createElement("p");
    colorCar.innerText = `${element.color}`;

    let brandCar = document.createElement("p");
    brandCar.innerText = `${element.brand}`;

    infoCar.appendChild(nameCar);
    infoCar.appendChild(modelCar);
    infoCar.appendChild(doorCar);
    infoCar.appendChild(colorCar);
    infoCar.appendChild(brandCar);

    //============================================ crea de botones editar y borrar ===============================
    let divButtons = document.createElement("div");
    divButtons.setAttribute("class", "buttonsAC");
    itemCar.append(divButtons);

    //============================================ boton de editar ===============================================
    const updateBtn = document.createElement("button");
    updateBtn.setAttribute("class", "update");
    updateBtn.setAttribute("id", "update");
    updateBtn.innerText = "Update";
    updateBtn.addEventListener("click", () => updateRegister(element, index));

    //============================================ boton de borrar ===============================================
    const deletBtn = document.createElement("button");
    deletBtn.setAttribute("class", "delete");
    deletBtn.setAttribute("id", "delete");
    deletBtn.innerText = "Delete";
    deletBtn.addEventListener("click", () => deleteRegister(index));

    //============================================ agregar botones ===============================================
    divButtons.appendChild(updateBtn);
    divButtons.appendChild(deletBtn);
  });
};

//======================================= funcion para crear y editar registros ==============================
const createUpdateRegister = (event) => {
  event.preventDefault();
  if (conditionalCrud) {
    let updateRG = {
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
    let car = {
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
};

//======================================= funcion para editar ===============================================
let updateRegister = (element, index) => {
  conditionalCrud = true;
  updateIndex = index;
  (document.querySelector("#nameOfCar").value = element.name),
    (document.querySelector("#modelOfCar").value = element.model),
    (document.querySelector("#doors").value = element.doors),
    (document.querySelector("#colorCar").value = element.color),
    (document.querySelector("#brandOfCar").value = element.brand);
};

//======================================= funcion de eliminar ===============================================
let deleteRegister = (index) => {
  carsList.splice(index, 1);
  principalFunction();
};
