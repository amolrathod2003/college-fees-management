
const feeForm = document.getElementById('feeform');
const feeLogTable = document.getElementById('feeLog').getElementsByTagName('tbody')[0];

feeForm.addEventListener('submit', function(event) {
  event.preventDefault(); 


  const studentName = document.getElementById('studentName').value;
  const rollNumber = document.getElementById('rollNumber').value;
  const feeAmount = document.getElementById('feeAmount').value;

  if (studentName && rollNumber && feeAmount) {
    
    const currentDate = new Date().toLocaleDateString();

    
    const newRow = feeLogTable.insertRow();

    
    const nameCell = newRow.insertCell(0);
    const rollCell = newRow.insertCell(1);
    const feeCell = newRow.insertCell(2);
    const dateCell = newRow.insertCell(3);

    
    nameCell.textContent = studentName;
    rollCell.textContent = rollNumber;
    feeCell.textContent = feeAmount;
    dateCell.textContent = currentDate;

    
    feeForm.reset();
  } else {
    alert("Please fill in all fields.");
  }
});
