export {};

const router = require("express").Router();
const User = require("../models/user.model");

router.route("/").get((req: any, res: any) => {
	User.find()
		.then((users: any) => res.json(users))
		.catch((err: any) => res.status(400).json("Error: " + err));
});

router.route("/add").post((req: any, res: any) => {
	let username: string = req.body.username;
	let email: string = req.body.email;
	let password: string = req.body.password;

	let newUser = new User({ username, email, password });

	newUser
		.save()
		.then(() => res.json("User added"))
		.catch((err: any) => res.status(400).json("Error: " + err));
});

module.exports = router;
