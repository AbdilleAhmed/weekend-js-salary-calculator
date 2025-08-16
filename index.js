

let totalCost = 0;
function submitForm(e) {
  e.preventDefault();

  const firstName = document.getElementById('firstName').value
  const lastName = document.getElementById('lastName').value
  const idNumber = document.getElementById('idNumber').value;
  const jobTitle = document.getElementById('jobTitle').value;
  const annualSalary = document.getElementById('AnnualSalary').value;

let employeeDetails = {
  firstName: firstName.trim().toLowerCase(),
  lastName: lastName.trim().toLowerCase(),
  idNumber: Number(idNumber),
  jobTitle: jobTitle.trim().toLowerCase(),
  annualSalary: Number(annualSalary)
};

  document.getElementById('firstName').value = '';
  document.getElementById('lastName').value = '';
  document.getElementById('idNumber').value = '';
  document.getElementById('jobTitle').value = '';
  document.getElementById('AnnualSalary').value = '';
}

