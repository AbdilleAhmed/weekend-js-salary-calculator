//start with a total cost of 0;
let totalCost = 0;
//form submit function . used trim and uppercase method
function submitForm(e) {
  e.preventDefault();
  const firstName = document
    .getElementById("firstName")
    .value.trim()
    .toUpperCase();
  const lastName = document
    .getElementById("lastName")
    .value.trim()
    .toUpperCase();
  const idNumber = Number(document.getElementById("idNumber").value);
  const jobTitle = document
    .getElementById("jobTitle")
    .value.trim()
    .toUpperCase();
  const annualSalary = Number(document.getElementById("AnnualSalary").value);
// creatig employee object
  const employeeDetails = {
    firstName,
    lastName,
    idNumber,
    jobTitle,
    annualSalary,
  };
//append function and passing employee details object
  appendDom(employeeDetails);

  // clearing form inputs
  document.getElementById("firstName").value = "";
  document.getElementById("lastName").value = "";
  document.getElementById("idNumber").value = "";
  document.getElementById("jobTitle").value = "";
  document.getElementById("AnnualSalary").value = "";
}

function appendDom(employee) {
  //getting container ID from HTML document
  const container = document.getElementById("container");
//check if table exists
  let table = document.getElementById("employeeTable");
//if table doesnt exist , create new table and give an id 
  if (!table) {
    table = document.createElement("table");
    table.id = "employeeTable";

    const thead = document.createElement("thead");
    thead.innerHTML = `
      <tr>
        <th>First Name</th>
        <th>Last Name</th>
        <th>ID</th>
        <th>Job Title</th>
        <th>Annual Salary</th>
        <th>Action</th>
      </tr>
    `;
    table.appendChild(thead);

    tbody = document.createElement("tbody");
    tbody.id = "employeeTableBody";
    table.appendChild(tbody);
    container.appendChild(table);
  } else {
    tbody = document.getElementById("employeeTableBody");
  }
//method to calculate monthly salary
  const monthlySalary = employee.annualSalary / 12;
  totalCost += monthlySalary;

  //table row details

  const tableRow = document.createElement("tr");
  tableRow.innerHTML = `
    <td>${employee.firstName}</td>
    <td>${employee.lastName}</td>
    <td>${employee.idNumber}</td>
    <td>${employee.jobTitle}</td>
    <td>$${employee.annualSalary.toLocaleString()}</td>
    <td><button class="delete-btn">Delete</button></td>
  `;
//event listener to delete the whole row once button is clicked and update total cost
  tableRow.querySelector(".delete-btn").addEventListener("click", function (e) {
    tableRow.remove();
    totalCost -= monthlySalary;
    updateTotalDisplay();
  });

  tbody.appendChild(tableRow);
  updateTotalDisplay();
}
// function to check if total cost is >than 20k
function updateTotalDisplay() {
  let totalDiv = document.getElementById("total");
  if (!totalDiv) {
    totalDiv = document.createElement("div");
    totalDiv.id = "total";
    document.body.appendChild(totalDiv);
  }

  totalDiv.textContent = `Total Monthly Cost: $${totalCost.toFixed(2)}`;

  if (totalCost > 20000) {
    totalDiv.classList.add("overLimit");
  } else {
    totalDiv.classList.remove("overLimit");
  }
}
