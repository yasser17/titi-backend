'use strict';

/*
|--------------------------------------------------------------------------
| DatoSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

// /** @type {import('@adonisjs/lucid/src/Factory')} */
// const Factory = use('Factory');

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const User = use('App/Models/User');

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const CompanyCategory = use('App/Models/CompanyCategory');

class DatoSeeder {
	async run() {
		await User.create({
			name: 'Yasser',
			email: 'yasser.mussa@gmail.com',
			password: 'secret',
		});

		await CompanyCategory.create({ name: 'Restaurante' });
		await CompanyCategory.create({ name: 'Agencias de Viaje' });
		await CompanyCategory.create({ name: 'Transportes' });
		await CompanyCategory.create({ name: 'Herramientas' });
		await CompanyCategory.create({ name: 'Ropa' });
		await CompanyCategory.create({ name: 'Cine' });
		await CompanyCategory.create({ name: 'Mecánico' });
		await CompanyCategory.create({ name: 'Hotel' });
		await CompanyCategory.create({ name: 'Famacia' });
		await CompanyCategory.create({ name: 'Centro Comerciale' });
		await CompanyCategory.create({ name: 'Salone de Belleza' });
		await CompanyCategory.create({ name: 'Librería' });
		await CompanyCategory.create({ name: 'Supermercado' });
	}
}

module.exports = DatoSeeder;
