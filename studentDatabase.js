//studentDatabase.js
let students = [
    { 
        name: "John",
        age: 21, 
        marks: { math: 65, science: 60, english: 58 } 
    },  
    { 
        name: "Parker",
        age: 22, 
        marks: { math: 55, science: 50, english: 68 } 
    } 

]

// Step 1: Calculate the average marks for each student
students.forEach(student => {
    const { math, science, english } = student.marks;
    student.average = (math + science + english) / 3;
});

// Step 2: Find the student with the maximum average
let maxAverageStudent = students.reduce((max, current) => 
    (current.average > max.average ? current : max), students[0]);

// Step 3: Print the result
console.log("Student with maximum average marks:");
console.log(`Name: ${maxAverageStudent.name}, Average Marks: ${maxAverageStudent.average.toFixed(2)}`);

