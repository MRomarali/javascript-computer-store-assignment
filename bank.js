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

let workMoney = 0;
const handleWork = e => {
    const ernedMoney = 100;
    workMoney += parseFloat(ernedMoney);
    workElement.innerText = (workMoney) + "kr";
}
let money = 0;
const handleBank = e => {
	money += workMoney;
	workMoney = 0;
    bankElement.innerText = (money) + "kr";
	workElement.innerText = (workMoney) + "kr";
	console.log(money);
}

workButtonElement.addEventListener("click", handleWork);
bankButtonElement.addEventListener("click", handleBank);