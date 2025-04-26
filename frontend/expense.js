document.getElementById("expenseForm").addEventListener("submit", function (e) {
    e.preventDefault();
  
    const category = document.getElementById("category").value;
    const amount = document.getElementById("amount").value;
    const date = document.getElementById("date").value;
    const description = document.getElementById("description").value;
  
    const expenseData = {
      category,
      amount,
      date,
      description,
    };
  
    // Save to localStorage for now
    let expenses = JSON.parse(localStorage.getItem("expenses")) || [];
    expenses.push(expenseData);
    localStorage.setItem("expenses", JSON.stringify(expenses));
  
    alert("Expense added successfully!");
    this.reset();
  });
  document.getElementById("expenseForm").addEventListener("submit", function (e) {
    e.preventDefault();
  
    const category = document.getElementById("category").value;
    const amount = document.getElementById("amount").value;
    const date = document.getElementById("date").value;
    const description = document.getElementById("description").value;
  
    const expenseData = {
      category,
      amount,
      date,
      description,
    };
  
    // Save to localStorage for now
    let expenses = JSON.parse(localStorage.getItem("expenses")) || [];
    expenses.push(expenseData);
    localStorage.setItem("expenses", JSON.stringify(expenses));
  
    alert("Expense added successfully!");
    this.reset();
  });
    