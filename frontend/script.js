const API_BASE_URL = "http://127.0.0.1:8000/employees/";

// Fetch all employees
async function fetchEmployees() {
  try {
    const response = await fetch(API_BASE_URL, { method: "GET" });
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const employees = await response.json();
    console.log(employees);
  } catch (error) {
    console.error("Error fetching employees:", error);
  }
}

// Add a new employee
document.getElementById("add-employee-form").addEventListener("submit", async (event) => {
  event.preventDefault();

  const name = document.getElementById("name").value;
  const position = document.getElementById("position").value;
  const salary = document.getElementById("salary").value;

  try {
    const response = await fetch(API_BASE_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, position, salary }),
    });
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    alert("Employee added successfully!");
    fetchEmployees(); // Refresh employee list
  } catch (error) {
    console.error("Error adding employee:", error);
  }
});

fetchEmployees();
