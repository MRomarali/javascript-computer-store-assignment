const loanButtonElement = document.getElementById("loan-button");
const loanElement = document.getElementById("loan");
const paybackButtonElement = document.getElementById("payback-button");
const paybackElement = document.getElementById("payback");
const repayButtonElement = document.getElementById("repay-button");
const repayElement = document.getElementById("repay");


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

const handlePayback = e => {

    const payAmount = prompt("how much loan do you want? ");
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
            
            loanElement.innerText = loan + "kr";
            const bankElement = document.getElementById("bank");
            bankElement.innerText = money + "kr";
            return;
        
        }
        const interest = payAmount - (payAmount*0.1);
        loan -= payAmount; //  interest;
        money -= payAmount; // interest;
        console.log("loan: " + loan);
        console.log("money: " + money);
        
    }
    // if (payAmount > loan) {
    //     const interest = payAmount - (payAmount*0.1);
    //     loan -= payAmount; // interest;
    //     money -= payAmount; // interest;
    //     console.log("loan: " + loan);
    //     console.log("money: " + money);
    // }

    loanElement.innerText = loan + "kr";
    const bankElement = document.getElementById("bank");
    bankElement.innerText = money + "kr";
    
}


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
        paybackButtonElement.classList.add("show");
        repayButtonElement.classList.add("show");
        alert(`Your loan: ${ loan.toFixed(2) }`);
    }
    
    console.log(loanAmount);
    console.log(loan);
    loanElement.innerText = loan + "kr";
    
    const bankElement = document.getElementById("bank");
    bankElement.innerText = money + "kr";
}


const handleRepay = e => {

    if (payAmount === null) {
        payAmount = 0;
    }
    if (payAmount <= money) {

        console.log("first if");

        if (loan - payAmount < 0) {
            console.log("second if");
            const exessMoney = (loan - payAmount) * -1;
            money += exessMoney;
            loan = 0;
            return;
        }
        const interest = payAmount - (payAmount*0.1);
        loan -= payAmount;// interest;
        money -= payAmount; // interest;
        console.log("loan: " + loan);
        console.log("money: " + money);
        
    }
    // if (payAmount > loan) {
    //     const interest = payAmount - (payAmount*0.1);
    //     loan -= payAmount; // interest;
    //     money -= payAmount; // interest;
    //     console.log("loan: " + loan);
    //     console.log("money: " + money);
    // }
    if (loan === 0) {
        repayButtonElement.classList.add("hidden");
    }

    loanElement.innerText = (loan) + "kr";
    const bankElement = document.getElementById("bank");
    bankElement.innerText = money + "kr";
    
}


loanButtonElement.addEventListener("click", handleLoan);
loanElement.addEventListener("click", handleLoan);
paybackButtonElement.addEventListener("click", handlePayback);
