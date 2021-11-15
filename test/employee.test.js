const Employee = require('../lib/Employee')

test('I can see my profile', () => {
    const em = new Employee('brandon', 13, 'Kemboi2000@outlook.com');
    expect(em.name).toEqual('brandon');
    expect(em.id).toEqual(13);
    expect(em.email).toEqual('Kemboi2000@outlook.com')
})