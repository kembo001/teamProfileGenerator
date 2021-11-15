const Employee = require('../lib/Employee')

test('I can see my profile', () => {
    const em = new Employee('brandon', 13, 'Kemboi2000@outlook.com');
    expect(em.name).toEqual('brandon');
    expect(em.id).toEqual(13);
    expect(em.email).toEqual('Kemboi2000@outlook.com')
})

test('gets employee name', () => {
    const employee = new Employee('brandon', 13, 'kemboi2000@outlook.com');

    expect(employee.getName()).toEqual('brandon');
});

test('gets employee ID', () => {
    const employee = new Employee('brandon', 13, 'kemboi2000@outlook.com');

    expect(employee.getId()).toEqual(13);
});


test('gets employee email', () => {
    const employee = new Employee('brandon', 13, 'kemboi2000@outlook.com');

    expect(employee.getEmail()).toEqual('kemboi2000@outlook.com');
});


test('gets role of employee', () => {
    const employee = new Employee('brandon', 13, 'kemboi2000@outlook.com');

    expect(employee.getRole()).toEqual("Employee");
}); 