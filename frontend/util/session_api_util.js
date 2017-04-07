import { receiveCurrentUser, receiveErrors } from '../actions/session_actions';

export const login = function(user, success, error) {
	console.log("login");
	$.ajax({
		method: 'POST',
		url: '/api/session',
		data: user,
		success,
		error
	});
};

export const signup = function(user, success, error) {
	console.log("signup");
	$.ajax({
		method: 'POST',
		url: '/api/users',
		data: user,
		success,
		error
	});
};

export const logout = function(success){
	console.log("logout");
	$.ajax({
		method: 'delete',
		url: '/api/session',
		success,
		error: () => {
		  console.log("Logout error in SessionApiUtil#logout");
		}
	});
};
