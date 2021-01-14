/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema');

class CompanySchema extends Schema {
	up() {
		this.create('companies', (table) => {
			table.increments();
			table
				.integer('company_category_id')
				.unsigned()
				.notNullable()
				.references('id')
				.inTable('company_categories');
			table.string('name');
			table.string('longitude').nullable();
			table.string('latitude').nullable();
			table.string('place_id').nullable();
			table.string('city_id').nullable();
			table.timestamps();
		});
	}

	down() {
		this.drop('companies');
	}
}

module.exports = CompanySchema;
