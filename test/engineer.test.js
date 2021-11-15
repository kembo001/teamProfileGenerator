const Engineer = require('../lib/Engineer')

test('I am the engineer', () => {
    const engineer = new Engineer ('brandon', 13, 'kemboi2000@outlook.com', 'kembo001')

    expect(engineer.github).toEqual('kembo001')
})

test('gets engineer github value', () => {
    const engineer = new Engineer('brandon', 13, 'kemboi2000@outlook.com', 'kembo001');

    expect(engineer.getGithub()).toEqual('kembo001');
});


test('gets role of employee', () => {
    const engineer = new Engineer('brandon', 13, 'kemboi2000@outlook.com', 'kembo001');

    expect(engineer.getRole()).toEqual("Engineer");
});




