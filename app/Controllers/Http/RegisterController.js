/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const User = use('App/Models/User');

const { validateAll } = use('Validator');

const Antl = use('Antl');
class RegisterController {
	async store({ request, auth, response }) {
		const rules = {
			name: 'required|max:100',
			email: 'required|max:100|unique:users,email',
			password: 'required|min:6|confirmed',
		};

		const validation = await validateAll(
			request.all(),
			rules,
			Antl.list('validation')
		);

		if (validation.fails()) {
			return response.status(422).send(validation.messages());
		}

		const user = await User.create(
			request.only(['name', 'email', 'password'])
		);

		const token = await auth.generate(user);

		return { user, token };
	}
}

module.exports = RegisterController;
