// Function to save budget to local storage
function saveBudget(budget) {
    localStorage.setItem('budget', budget);
}

// Function to get budget from local storage
function getBudget() {
    return parseFloat(localStorage.getItem('budget')) || 0;
}

// Function to clear expenses from local storage
function clearExpenses() {
    localStorage.removeItem('expenses');
}

// Function to render expenses on the dashboard
function renderExpenses() {
    const expenseList = document.querySelector('.recent-expenses ul');
    const totalExpenseEl = document.querySelectorAll('.card p')[0]; // Total expenses
    const budgetRemainingEl = document.querySelectorAll('.card p')[1]; // Budget remaining

    // Get expenses from local storage
    let expenses = JSON.parse(localStorage.getItem('expenses')) || [];

    // Clear current list
    expenseList.innerHTML = '';

    // Calculate total expenses
    let totalExpenses = expenses.reduce((sum, expense) => sum + expense.amount, 0);

    // Get budget from local storage
    let budget = getBudget();

    // Update the dashboard totals
    totalExpenseEl.textContent = `₹${totalExpenses}`;
    budgetRemainingEl.textContent = `₹${budget - totalExpenses}`;

    // Render each expense
    expenses.forEach(expense => {
        const listItem = document.createElement('li');
        listItem.textContent = `${expense.title}: ₹${expense.amount} - ${expense.date}`;
        expenseList.appendChild(listItem);
    });
}

function isValidTitle(title) {
    return /[a-zA-Z]/.test(title); // Check if there's at least one alphabetic character
}

// Function to check if the date is not in the future
function isValidDate(date) {
    const selectedDate = new Date(date);
    const today = new Date();
    
    // Set the time component to midnight for both dates
    selectedDate.setHours(0, 0, 0, 0);
    today.setHours(0, 0, 0, 0);
    
    return selectedDate <= today;
}



// Function to handle the addition of a new expense
function addExpense(event) {
    event.preventDefault(); // Prevent the form from refreshing the page

    const title = document.getElementById('title').value;
    const amount = parseFloat(document.getElementById('amount').value);
    const category = document.getElementById('category').value;
    const date = document.getElementById('date').value;

    if (!title || !isValidTitle(title)) {
        alert('Expense title must contain at least one letter.');
        return;
    }

    // Basic validation
    if (isNaN(amount) || amount<=0) {
        alert('Please enter a valid amount.');
        return;
    }

    if (!date || !isValidDate(date)) {
        alert('Please enter a valid date that is not in the future.');
        return;
    }

    // Get current expenses from local storage or initialize an empty array
    let expenses = JSON.parse(localStorage.getItem('expenses')) || [];

    // Add new expense to the list
    expenses.push({ title, amount, date, category });

    // Save updated expenses list to local storage
    localStorage.setItem('expenses', JSON.stringify(expenses));

    // Clear the form
    document.querySelector('.expense-form').reset();

    // Redirect to dashboard and re-render the expenses list
    alert('Expense added successfully!');
    window.location.href = 'dashboard.html';
}

// Function to handle setting the budget
function setBudget(event) {
    event.preventDefault(); // Prevent the form from refreshing the page

    const budget = parseFloat(document.getElementById('budget').value);

    // Basic validation
    if (isNaN(budget) || budget < 0) {
        alert('Please enter a valid budget.');
        return;
    }

    // Save the budget to local storage
    saveBudget(budget);

    // Clear expenses from local storage
    clearExpenses();

    // Redirect to dashboard and update the budget display
    alert('Budget set successfully! Total expenses have been reset.');
    window.location.href = 'dashboard.html';
}

// Function to handle login (simple client-side validation)
// function login(event) {
//     event.preventDefault();
//     const username = document.getElementById('username').value;
//     const password = document.getElementById('password').value;
    
//     // Simple login validation (static credentials for demo purposes)
//     if (username === 'user' && password === 'password') {
//         console.log("login good");
//         alert('Login successful!');
//         window.location.href = 'dashboard.html'; // Redirect to the dashboard
//     } else {
//         alert('Invalid username or password.');
//     }
// }

//redirecting from login page to sign up page 
document.addEventListener('DOMContentLoaded', () => {
  const signUpBtn = document.getElementById("signUp");
  if (!signUpBtn) return; // safely skip if not found
  signUpBtn.addEventListener('click', () => {
    window.location.href = 'SignUp.html';
  });
});

//redirecting from sign up page to login page
document.addEventListener('DOMContentLoaded',()=>{
    const registerbtn = document.getElementById("signUpBtnFromRegistration");
    const loginBtn = document.getElementById("loginBtnFromRegistration");
    //  console.log("Button found?", registerbtn);

  if (!registerbtn) return;
    // registerbtn.addEventListener('click', (e)=>{
    //     e.preventDefault();
    //     console.log("registration button is clicked redirecting to login page")
    //     window.location.href = 'login.html';
    // })

    //if already have an account redirect to login page
    loginBtn.addEventListener("click",()=>{
        window.location.href = 'login.html';
    })
})

// Event listeners for forms
document.addEventListener('DOMContentLoaded', function () {
    // Attach login handler if on the login page
    // if (document.querySelector('.login-form')) {
    //     document.querySelector('.login-form').addEventListener('submit', login);
    // }

    // Attach add expense handler if on the add expense page
    if (document.querySelector('.expense-form')) {
        document.querySelector('.expense-form').addEventListener('submit', addExpense);
    }

    // Attach budget setting handler if on the dashboard page
    if (document.querySelector('#budget-form')) {
        document.querySelector('#budget-form').addEventListener('submit', setBudget);
    }
    // Render expenses if on the dashboard page
    if (document.querySelector('.recent-expenses')) {
        renderExpenses();
    }
});
