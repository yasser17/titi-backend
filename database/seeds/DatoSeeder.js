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

class DatoSeeder {
	async run() {
		await User.create({
			name: 'Yasser',
			email: 'yasser.mussa@gmail.com',
			password: 'secret',
		});
	}
}

module.exports = DatoSeeder;
