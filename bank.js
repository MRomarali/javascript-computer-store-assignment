const workButtonElement = document.getElementById("work-button");
const workElement = document.getElementById("work");
const bankElement = document.getElementById("bank");
const bankButtonElement = document.getElementById("bank-button");

const handleWorkMenuChange = e => {
    const selectedComputer = computers[e.target.selectedIndex];
    workElement.innerText = selectedComputer.work;
}

const handleBankMenuChange = e => {
    const selectedComputer = computers[e.target.selectedIndex];
    bankElement.innerText = selectedComputer.bank;
}

let change = 0;
const handleWork = e => {
    const ernedMoney = 100;
    loan += parseFloat(ernedMoney);
    workElement.innerText = (loan) + "kr";
}
let money = 0;
const handleBank = e => {
	money += loan;
	loan = 0;
    bankElement.innerText = (money) + "kr";
	workElement.innerText = (loan) + "kr";
	console.log(money);
}

workButtonElement.addEventListener("click", handleWork);
bankButtonElement.addEventListener("click", handleBank);