/**
 * what 've been working on in this file is that i've built the logic of the loan, payback and repay system.
 * in the code bellow i've declared all the buttons and all the paragraphs that i want to use.
 */
const computersElement = document.getElementById("computers");
const computerDescription = document.getElementById("description");
const computerSpec = document.getElementById("specs");
const priceElement = document.getElementById("price");
const cartElement = document.getElementById("cart");
const quantityElement = document.getElementById("quantity");
const payElement = document.getElementById("pay");
const totalDuoElement = document.getElementById("totalDuo");
const imgElement = document.getElementById("img");

/**
 * since the use of theese declarations is repeatedly coming back in other functions i've stored the declarations
 * outside the functions
 */
let computers = [];
let cart = [];
let totalDuo = 0.0;
let paidAmount = 0;


/**
 * here i use the fetch to locate the API and what i get from it is 
 * the necessary data such as the computers description, specifications, title, price and image
 * and it also loops thru the title and thats necessary for the select option
 */

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

/**
 * 
 * @param {*} computer 
 * the three functions bellow is taking computers data and printing it out.
 * it takes the computer data using the ID and displaying title, description and specification,
 * creating a textnode and appending the comp element
 */
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

/**
 * 
 * @param {*} e 
 * these functions is changed based on selected computer, the user sees selected computer,
 * price, image, description and specification.
 */
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

/**
 * this functiom adds the computer to the cart so the user can buy the item
 */
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

/**
 * this function allow the user to pay for the item and only what the user has in balance is withdrawn
 * otherwise an alert of you cant affort os shown
 */
const handlePay = () => {
    paidAmount = parseFloat(computers[computersElement.selectedIndex].price) - money;
    if (paidAmount <= 0) {
        item = computers[computersElement.selectedIndex].title;
        money -= parseFloat(computers[computersElement.selectedIndex].price);
        bankElement.innerText = money + "kr";
        alert("you bought " + item + " welcome back!");
    }else{
        alert("you can't afford "); 
    }
}

/**
 * added eventlisteners to button pay and for the select option so that it displays the necessary
 * info when selecting computer, like description, specification, image and price, and the eventlistener is using the functions
 * that are made above.
 */
computersElement.addEventListener("change", handleComputerMenuChange);
computersElement.addEventListener("change", handleDescriptionMenuChange);
computersElement.addEventListener("change", handleSpecsMenuChange);
payElement.addEventListener("click", handlePay);


