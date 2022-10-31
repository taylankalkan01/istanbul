const { createApp } = require("@istanbul/app");
const { createHttpServer, createRouter } = require("@istanbul/http");

const app = createApp();
const server = createHttpServer();
app.register(server);

const router = createRouter({ prefix: "user" });

const users = [
	{
		id: 1,
		name: "Taylan",
		age: 21,
	},
	{
		id: 2,
		name: "test1",
		age: 21,
	},
	{
		id: 3,
		name: "test2",
		age: 21,
	},
];

router.get("", (req, res) => {
	res.successData("Hello world from istanbulnode", users);
});

router.get(":id", (req, res) => {
	const userById = users.find((user) => user.id === +req.params.id);
	if (userById) {
		res.successData("User By Id fetched successfully", userById);
	} else {
		res.notFound("User not found");
	}
});

router.post("", (req, res) => {
	const { name, age } = req.body;
	const newUser = {
		id: Math.trunc(Math.random() * 1000),
		name,
		age,
	};
	users.push(newUser);
	res.successData("User created successfully", newUser);
});

app.start().then(() => {
	console.log(
		`Server is running on http://${server.config.host}:${server.config.port}`
	);
});
