import VanillaTester from '../plugins/VanillaTester';

tester = new VanillaTester();

tester.test('This test passes', () => {
    tester.assert(1 == 1);
});

tester.test('This test fails', () => {
    tester.assert(1 != 1);
});
