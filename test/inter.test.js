const Intern = require('..//lib/intern')

test('I am an intern', () => {
    const intern = new Intern ('brandon', 13, 'kemboi2000@outlook.com', 'Osseo');

    expect(intern.school).toEqual('Osseo')
})

test('gets intern school value', () => {
    const intern = new Intern('brandon', 13, 'kemboi2000@outlook.com', 'Osseo');

    expect(intern.getSchool()).toEqual('Osseo');
});

test('gets role of employee', () => {
    const intern = new Intern('brandon', 13, 'kemboi2000@outlook.com', 'Osseo',);

    expect(intern.getRole()).toEqual("Intern");
});