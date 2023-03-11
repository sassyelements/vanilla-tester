import VanillaTester from '../plugins/VanillaTester';
import ajaxios from '../plugins/Ajaxios';

const tester = new VanillaTester();

ajaxios.get('https://restcountries.com/v2/name/germany')
    .then((data) => {

        tester.test('Ajaxios. Should fetch data from Rest API', () => {
            tester.assert(data[0].name.toLowerCase() == 'germany');
            tester.assert(data[0].alpha2Code == "DE");
            tester.assert(data[0].alpha3Code == "DEU");
            tester.assert(data[0].borders.includes('AUT', 'BEL', 'CZE'));
        });

    });

