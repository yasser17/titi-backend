/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const User = use('App/Models/User');

class LoginController {
	async store({ request, response, auth }) {
		const { email, password } = request.all();

		try {
			const token = await auth.attempt(email, password);

			const user = await User.query().where('email', email).first();

			return { token: token.token, user };
		} catch (err) {
			return response.status(404).send([
				{
					message: 'El usuario o la contraseña no es correcto',
					field: 'email',
				},
			]);
		}
	}

	async me({ auth }) {
		return auth.user;
	}
}

module.exports = LoginController;
