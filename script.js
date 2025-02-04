let students = [
    { name: "Sofie", age: 25, course: "Webudvikler"},
    { name: "Lukas", age: 22, course: "Mediegrafiker"},
    { name: "Emil", age: 28, course: "Teknisk Designer"},
];

let studentListDiv = document.querySelector(".student-list")

students.forEach(student => {
    let studentDiv = document.createElement("div");
    studentDiv.classList.add("student")
    studentDiv.textContent = `${student.name}, Alder: ${student.age}, Uddannelse: ${student.course}`;
    studentListDiv.appendChild(studentDiv);
})

console.log(studentListDiv);
