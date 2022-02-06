'use strict'
// TASK 1
let user = {
    name: 'PYLYP',
    surname: 'SCHEVCHENKO'
}
console.log(user);

user.name = 'SERGIY';
delete user.surname;
console.log(user);

//TASK 2
console.log();

let employeeSalaries = {
    employee_1: 800,
    employee_2: 500,
    employee_3: 402,
    employee_4: 250,
    employee_5: 300

}
if (Object.keys(employeeSalaries).length === 0) {
    console.log('Object employeeSalaries is empty');
} else {
    console.log(+employeeSalaries.employee_1 + employeeSalaries.employee_2 +
        employeeSalaries.employee_3 + employeeSalaries.employee_4 + employeeSalaries.employee_5);
}