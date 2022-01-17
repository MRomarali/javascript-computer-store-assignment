const computersElement = document.getElementById("computers");
const computerDescription = document.getElementById("description");
const computerSpec = document.getElementById("specs");
const priceElement = document.getElementById("price");
//const addElement = document.getElementById("add");
const cartElement = document.getElementById("cart");
const quantityElement = document.getElementById("quantity");
const payElement = document.getElementById("pay");
const totalDuoElement = document.getElementById("totalDuo");
const imgElement = document.getElementById("img");
let computers = [];
let cart = [];
let totalDuo = 0.0;

fetch("https://noroff-komputer-store-api.herokuapp.com/computers")
.then(Response => Response.json())
.then(data => computers = data)
.then(computers => addComputersToMenu(computers))
const addComputersToMenu = (computers) => {
    computers.forEach(x => addTitleToMenu(x));
    
 computerDescription.innerText = computers[0].description;
 computerSpec.innerText = computers[0].specs;
 priceElement.innerText = computers[0].price;
imgElement.src = "https://noroff-komputer-store-api.herokuapp.com/assets/images/1.png";

}
const addTitleToMenu = (computer) => {
    const computerElement = document.createElement("option");
    computerElement.value = computer.id;
    computerElement.appendChild(document.createTextNode(computer.title));
    computersElement.appendChild(computerElement);
}
const addDescriptionToMenu = (computer) => {
    const computerElement = document.createElement("option");
    computerElement.value = computer.id;
    computerElement.appendChild(document.createTextNode(computer.description));
    computersElement.appendChild(computerElement);
}

const addSpecToMenu = (computer) => {
    const computerElement = document.createElement("option");
    computerElement.value = computer.id;
    computerElement.appendChild(document.createTextNode(computer.specs));
    computersElement.appendChild(computerElement);
}

const handleComputerMenuChange = e => {
    const selectedComputer = computers[e.target.selectedIndex];
    priceElement.innerText = selectedComputer.price;
    imgElement.src = "https://noroff-komputer-store-api.herokuapp.com/" + selectedComputer.image;
}
const handleDescriptionMenuChange = e => {
    const selectedComputer = computers[e.target.selectedIndex];
    computerDescription.innerText = selectedComputer.description;
}

const handleSpecsMenuChange = e => {
    const selectedComputer = computers[e.target.selectedIndex];
    computerSpec.innerText = selectedComputer.specs;
}
const handleAddComputer = () => {
    const selectedComputer = computers[computersElement.selectedIndex];
    const quantity = parseInt(quantityElement.value);
    const cartItem = document.createElement("li");
    const lineTotal = quantity * selectedComputer.price;
    cartItem.innerText = `${selectedComputer.title} ${selectedComputer.description} ${selectedComputer.specs} ${selectedComputer.price} ${quantity} ${lineTotal.toFixed(2)}`;
    cartElement.appendChild(cartItem);
    totalDuo += lineTotal;
    totalDuoElement.innerText = `Total Duo: ${totalDuo.toFixed(2)}`;

}
let paidAmount = 0;
const handlePay = () => {
    paidAmount = parseFloat(computers[computersElement.selectedIndex].price) - money;
    if (paidAmount <= 0) {
        money -= parseFloat(computers[computersElement.selectedIndex].price);
        //loanElement.innerText = money + "kr";
        bankElement.innerText = money + "kr";
        alert("Thank you for shopping with us! and welcome back ");
    }else{
        alert("you can't afford "); 
    }
}

computersElement.addEventListener("change", handleComputerMenuChange);
computersElement.addEventListener("change", handleDescriptionMenuChange);
computersElement.addEventListener("change", handleSpecsMenuChange);
//addElement.addEventListener("click", handleAddComputer);
payElement.addEventListener("click", handlePay);


