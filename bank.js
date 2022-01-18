/**
 * what 've been working on in this file is that i've built the logic of the bank and work buttons.
 * in the code bellow i've declared the buttons and paragraphs that i want to use.
 */
const workButtonElement = document.getElementById("work-button");
const workElement = document.getElementById("work");
const bankElement = document.getElementById("bank");
const bankButtonElement = document.getElementById("bank-button");


/**
 * since the use of workmoney and money is repeatedly coming back in other functions i've stored the declarations
 * outside the functions
 */
let workMoney = 0;
let money = 0;


/**
 * 
 *  
 */
const handleWorkMenuChange = e => {
    const selectedComputer = computers[e.target.selectedIndex];
    workElement.innerText = selectedComputer.work;
}

const handleBankMenuChange = e => {
    const selectedComputer = computers[e.target.selectedIndex];
    bankElement.innerText = selectedComputer.bank;
}

/**
 * 
 * so as i click in work button i earn 100 kr and i add that to my work section and prevent it from returning 
 * float value and than display it in my work paragraph 
 */
const handleWork = e => {
    const ernedMoney = 100;
    workMoney += parseFloat(ernedMoney);
    workElement.innerText = (workMoney) + "kr";
}

/**
 * 
 * what happens is iam adding the value of what i earned to my bank account my balance and reset 
 * earned money to zero and display my earned amount which is set to zero and also display my balance
 * 
 */
const handleBank = e => {
	money += workMoney;
	workMoney = 0;
    bankElement.innerText = (money) + "kr";
	workElement.innerText = (workMoney) + "kr";
}

/**
 * added eventlisteners to buttons earned money and my balance, and the eventlistener is using the functions
 * that are made above.
 */
workButtonElement.addEventListener("click", handleWork);
bankButtonElement.addEventListener("click", handleBank);