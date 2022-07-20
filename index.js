const employee = {
    name: 'allen',
    streetAddress: '11 broadway'
};

const updateEmployeeWithKeyAndValue = function(employee, key, value) {
    const updEmployee = {...employee};
    updEmployee[key] = value;
    return updEmployee;
}

const destructivelyUpdateEmployeeWithKeyAndValue = function (employee, key, value) {
    employee[key] = value;
    return employee;
}

const deleteFromEmployeeByKey = function (employee, key) {
    const delEmployee = {...employee};
    delete delEmployee[key];
    return delEmployee;
}

const destructivelyDeleteFromEmployeeByKey = function (employee, key) {
    delete employee[key];
    return employee;
}