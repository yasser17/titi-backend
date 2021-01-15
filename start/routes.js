'use strict';

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URL's and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.1/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route');

Route.on('/').render('welcome');

Route.post('login', 'LoginController.store');
Route.post('login-with-social-networking', 'LoginSnController.store');
Route.post('register', 'RegisterController.store');

Route.group(() => {
	Route.get('me', 'LoginController.me');

	Route.get('company-categories', 'CompanyCategoryController.index');

	Route.post('bussiness', 'CompanyController.store');
}).middleware(['auth']);
