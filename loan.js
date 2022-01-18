/**
 * what 've been working on in this file is that i've built the logic of the loan, payback and repay system.
 * in the code bellow i've declared all the buttons and all the paragraphs that i want to use.
 */
const loanButtonElement = document.getElementById("loan-button");
const loanElement = document.getElementById("loan");
const paybackButtonElement = document.getElementById("payback-button");
const paybackElement = document.getElementById("payback");
const repayButtonElement = document.getElementById("repay-button");
const repayElement = document.getElementById("repay");

/**
 * since the use of loan is repeatedly coming back in other functions i've stored the declaration
 * outside the functions
 */
let loan = 0;

const handleLoanMenuChange = e => {
    const selectedComputer = computers[e.target.selectedIndex];
    loanElement.innerText = selectedComputer.loan;
}

const handlePayBackMenuChange = e => {
    const selectedComputer = computers[e.target.selectedIndex];
    paybackElement.innerText = selectedComputer.payback;
}

const handlerepayMenuChange = e => {
    const selectedComputer = computers[e.target.selectedIndex];
    repayElement.innerText = selectedComputer.repay;
}
/**
 * added function hideButton because two buttons were to start hidden until i take a loan,
 * when there is no loan the buttons repay and payback are hidden.
 */
const hideButton = () => {
    loanElement.innerText = loan + "kr";
    const bankElement = document.getElementById("bank");
    const workElement = document.getElementById("work");
    bankElement.innerText = money + "kr";
    workElement.innerText = workMoney + "kr";
    paybackButtonElement.classList.add("hidden");
    repayButtonElement.classList.add("hidden");     
}

/**
 * 
 * @param {*} e 
 * @returns 
 * this function is for payback, a prompt shows, to enter how much you want to pay back.
 * and then there are several if statements, if the amount you want to pay back is null 
 * then we dont want anything to happen, if there is no loan the button is hidden, if there is loan 
 * you can pay with what you have in balance and on top of that is a 10% additional interest.
 */
const handlePayback = e => {

    const payAmount = prompt("how much woul'd ypu like to pay back? ");
    if (payAmount === null) {
        payAmount = 0;
    }
    if (payAmount <= money) {

        console.log("first if");

        if (loan - payAmount < 0) {
            console.log("second if");
            const exessMoney = (loan - payAmount) * -1;
            money += exessMoney - payAmount;
            loan = 0;
            
            return;
        
        }
        const interest = payAmount - (payAmount*0.1);
        loan -= payAmount +  interest;
        money -= payAmount + interest;
    }
    if (loan === 0) {
            hideButton();
            
    }

    loanElement.innerText = loan + "kr";
    const bankElement = document.getElementById("bank");
    bankElement.innerText = money + "kr";
    
}

/**
 * 
 * @param {*} e 
 * @returns 
 * handlle loan has some if statements which is if youve already taken a loan you cant borrow again until the amount is
 * paid back, if the user doesnt type amount to loan nothing happens, if typed amount is higher than double the balance 
 * the user cant loan, but if its less the loan is added to users balance and displays in the loan section
 */
const handleLoan = e => {
    
    if (loan > 0) {
        alert(" you cant take a loan, payback " + loan);
        return;
    }
    const loanAmount = prompt("how much loan do you want? ");
    if (loanAmount === null) {
        loanAmount = 0;
    }
    if (loanAmount > money*2) {
        alert(" you cant get a loan higher than " + money*2)
    }else if (loanAmount <= money*2) {
        loan += parseFloat(loanAmount);
        money += loan;
        paybackButtonElement.classList.remove("hidden");
        repayButtonElement.classList.remove("hidden");
        alert(`Your loan: ${ loan.toFixed(2) }`);
    }
    
    console.log(loanAmount);
    console.log(loan);
    loanElement.innerText = loan + "kr";
    
    const bankElement = document.getElementById("bank");
    bankElement.innerText = money + "kr";
}

/**
 * 
 * @param {*} e 
 * @returns 
 * this function is for repay.
 * There are several if statements, if there is no money to repay its set to null 
 * if there is no loan the button is hidden, if there is loan 
 * you can repay with what you have in work and on top of that is a 10% additional interest.
 * and the rest is taken from the balance if there is money there
 */
const handleRepay = e => {
    const payAmount = workMoney;
    if (payAmount === null) {
        payAmount = 0;
    }
    if (payAmount <= workMoney) {

        console.log("first if");

        if (loan - payAmount < 0) {
            console.log("second if");
            const exessMoney = (loan - payAmount) * -1;
            workMoney += exessMoney - payAmount;
            loan = 0;
            hideButton();
            return;
        }
        const interest = payAmount - (payAmount*0.1);
        loan -= payAmount;
        workMoney -= payAmount;
        console.log("loan: " + loan);
        console.log("money: " + workMoney);
        
    }
    if (payAmount > loan) {
        loan -= payAmount
    }
    if (loan === 0) {
        hideButton();
    }

    loanElement.innerText = (loan) + "kr";
    const workElement= document.getElementById("work");
    workElement.innerText = workMoney + "kr";
    
}

/**
 * added eventlisteners to all the buttons, and the eventlistener is using the functions
 * that are made.
 */

loanButtonElement.addEventListener("click", handleLoan);
loanElement.addEventListener("click", handleLoan);
paybackButtonElement.addEventListener("click", handlePayback);
repayButtonElement.addEventListener("click", handleRepay);
paybackButtonElement.classList.add("hidden");
repayButtonElement.classList.add("hidden");
