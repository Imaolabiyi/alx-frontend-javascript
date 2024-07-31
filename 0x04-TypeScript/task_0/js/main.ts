// task_0/js/main.ts

interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

const student1: Student = {
  firstName: "John",
  lastName: "Doe",
  age: 20,
  location: "New York"
};

const student2: Student = {
  firstName: "Jane",
  lastName: "Smith",
  age: 22,
  location: "Los Angeles"
};

const studentsList: Student[] = [student1, student2];

// Function to render table
const renderTable = () => {
  // Create table element
  const table = document.createElement("table");
  
  // Create table header row
  const headerRow = table.insertRow();
  const headerCell1 = headerRow.insertCell();
  headerCell1.textContent = "First Name";
  const headerCell2 = headerRow.insertCell();
  headerCell2.textContent = "Location";

  // Append each student as a row to the table
  studentsList.forEach((student) => {
    const row = table.insertRow();
    const cell1 = row.insertCell();
    cell1.textContent = student.firstName;
    const cell2 = row.insertCell();
    cell2.textContent = student.location;
  });

  // Append the table to the body
  document.body.appendChild(table);
};

// Call the renderTable function to display the table
renderTable();

