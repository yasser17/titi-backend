/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const User = use('App/Models/User');

class LoginSnController {
	async store({ request, response, auth }) {
		const { type, id } = request.all();

		const user = await User.findBy(type, id);

		if (!user) {
			return response.status(404).send({ message: 'User not found' });
		}

		const token = await auth.generate(user);

		return { user, token };
	}
}

module.exports = LoginSnController;
