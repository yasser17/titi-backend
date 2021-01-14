/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const CompanyCategory = use('App/Models/CompanyCategory');

class CompanyCategoryController {
	async index() {
		const categories = await CompanyCategory.query()
			.orderBy('name')
			.fetch();

		return categories;
	}
}

module.exports = CompanyCategoryController;
