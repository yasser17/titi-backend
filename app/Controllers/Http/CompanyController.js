/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Company = use('App/Models/Company');

class CompanyController {
	async store({ request, auth }) {
		const company = await Company.create({
			...request.only([
				'address',
				'city',
				'company_category_id',
				'country',
				'details',
				'email',
				'latitude',
				'longitude',
				'name',
				'phone',
				'place_id',
			]),
			user_id: auth.user.id,
		});

		return company;
	}
}

module.exports = CompanyController;
