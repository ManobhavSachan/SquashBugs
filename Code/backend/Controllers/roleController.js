const ADMIN = "admin";
const EMPLOYEE = "employee";
const USER = "user";

function authRole(mrole) {
	return (req, res, next) => {
		if (req.user.role !== mrole) {
			res.status(401);
			return res.send("Not allowed");
		}

		next();
	};
}

module.exports = { authRole, ADMIN, EMPLOYEE, USER };
