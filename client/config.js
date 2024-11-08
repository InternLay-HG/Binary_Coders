const apiUrl =
	window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1'
		? 'http://localhost:5000'
		: 'https://binary-coders.onrender.com'

export default apiUrl
