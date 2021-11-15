const Manager = require('../lib/manager')

test('I am the manager', () => {
    const manager = new Manager('brandon', 13, 'kemboi2000@outlook.com', 355);
    
    expect(manager.officeNumber).toEqual(355);
});

test('gets manager officeNumber value', () => {
    const manager = new Manager('brandon', 13, 'kemboi2000@outlook.com', 355);

    expect(manager.getOfficeNumber()).toEqual(355);
});


test('gets role of employee', () => {
    const manager = new Manager('brandon', 13, 'kemboi2000@outlook.com', 355);

    expect(manager.getRole()).toEqual("Manager");
});