document.getElementById("loginForm").addEventListener("submit", function (e) {
    e.preventDefault();
  
    const email = this.querySelector("input[type='email']").value;
    const password = this.querySelector("input[type='password']").value;
  
    if (email === "admin@example.com" && password === "admin123") {
      alert("Login successful!");
      window.location.href = "dashboard.html"; // change to your actual dashboard page
    } else {
      alert("Invalid email or password!");
    }
  });
  