const sut = require('./challenge5');

test('The caesar cipher helloworld shifted by 10 should return rovvygybvn', () =>
{
    expect(sut.caesarCipherShift('helloworld', 10)).toEqual('rovvygybvn');
})

test('The caesar cipher HELLOWORLD shifted by 10 should return ROVVYGYBVN', () =>
{
    expect(sut.caesarCipherShift('HELLOWORLD', 10)).toEqual('ROVVYGYBVN');
})

test('The caesar cipher HelloWorld shifted by 10 should return RovvyGybvn', () =>
{
    expect(sut.caesarCipherShift('HelloWorld', 10)).toEqual('RovvyGybvn');
})

test('The caesar cipher IamRobot shifted by 18 should return AseJgtgl', () =>
{
    expect(sut.caesarCipherShift('IamRobot', 18)).toEqual('AseJgtgl');
})

test('The caesar cipher IamRobot shifted by 0 should return IamRobot', () =>
{
    expect(sut.caesarCipherShift('IamRobot', 0)).toEqual('IamRobot');
})

test('The caesar cipher IamRobot shifted by 26 should return IamRobot', () =>
{
    expect(sut.caesarCipherShift('IamRobot', 26)).toEqual('IamRobot');
})



