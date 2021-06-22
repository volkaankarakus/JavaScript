const name_="Volkan";
const department="Software";
const salary=5000;

const a="İsim: " + name_ + "\n" + "Department: " + department + "\n" + "Salary: " + salary;

console.log(a);

// Bu sekilde uzun uzun yazmaktansa, Template Literal kullanabiliriz.
const b=`İsim:${name_} \nDepartment:${department} \nSalary:${salary}`
console.log(b);

function b(){
    return "Merhaba";
}

const html = `
    <ul>
        <li>${name_}</li>
        <li>${department}</li>
        <li>${salary}</li>
        <li>${10/4}</li>
        <li>${b()}</li>
    </ul>
    `;
document.body.innerHTML=html;