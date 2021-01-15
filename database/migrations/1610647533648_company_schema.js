/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema');

class CompanySchema extends Schema {
	up() {
		this.create('companies', (table) => {
			table.increments();
			table
				.integer('user_id')
				.unsigned()
				.notNullable()
				.references('id')
				.inTable('users');
			table
				.integer('company_category_id')
				.unsigned()
				.notNullable()
				.references('id')
				.inTable('company_categories');
			table.string('name');
			table.text('details').nullable();
			table.string('email').nullable();
			table.string('phone').nullable();
			table.string('longitude').nullable();
			table.string('latitude').nullable();
			table.string('place_id').nullable();
			table.string('address').nullable();
			table.string('city').nullable();
			table.string('country').nullable();
			table.string('image').nullable();
			table.string('cover').nullable();
			table.timestamps();
		});
	}

	down() {
		this.drop('companies');
	}
}

module.exports = CompanySchema;
