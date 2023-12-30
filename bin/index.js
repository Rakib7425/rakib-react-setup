#!/usr/bin/env node

import { fileURLToPath } from "url";
import { dirname, join } from "path";
import fs from "fs";
import inquirer from "inquirer";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const questions = [
	{
		type: "input",
		name: "projectName",
		message: "Enter your new project's name:",
		default: "rakib-react-app",
	},
];

inquirer.prompt(questions).then((answers) => {
	const projectPath = join(__dirname, answers.projectName);

	if (fs.existsSync(projectPath)) {
		console.error(`Error: The directory "${answers.projectName}" already exists.`);
		process.exit(1);
	}

	fs.mkdirSync(projectPath);

	// Copy public folder
	fs.mkdirSync(join(projectPath, "public"));
	fs.copyFileSync(
		join(__dirname, "../app/public", "vite.svg"),
		join(projectPath, "../app/public", "vite.svg")
	);

	// Copy root level files
	[
		"index.html",
		"package.json",
		"yarn.lock",
		"postcss.config.js",
		"vite.config.js",
		"README.md",
		".gitignore",
		".eslintrc.cjs",
	].forEach((fileName) => {
		fs.copyFileSync(join(__dirname, fileName), join(projectPath, fileName));
	});

	// Copy src folder and its contents
	fs.mkdirSync(join(projectPath, "src"));
	fs.mkdirSync(join(projectPath, "src", "assets"));
	fs.copyFileSync(
		join(__dirname, "src", "components", "Counter.jsx"),
		join(projectPath, "src", "components", "Counter.jsx")
	);
	fs.copyFileSync(
		join(__dirname, "src", "components", "ToggleDarkMode.jsx"),
		join(projectPath, "src", "components", "ToggleDarkMode.jsx")
	);

	// Copy pages folder and its contents
	fs.mkdirSync(join(projectPath, "src", "pages"));
	fs.copyFileSync(
		join(__dirname, "src", "pages", "index.jsx"),
		join(projectPath, "src", "pages", "index.jsx")
	);

	// Copy store folder and its contents
	fs.mkdirSync(join(projectPath, "src", "store"));
	fs.copyFileSync(
		join(__dirname, "src", "store", "rootReducer.js"),
		join(projectPath, "src", "store", "rootReducer.js")
	);
	fs.copyFileSync(
		join(__dirname, "src", "store", "rootSaga.js"),
		join(projectPath, "src", "store", "rootSaga.js")
	);
	fs.copyFileSync(
		join(__dirname, "src", "store", "store.js"),
		join(projectPath, "src", "store", "store.js")
	);

	// Copy store slices folder and its contents
	fs.mkdirSync(join(projectPath, "src", "store", "slices"));
	fs.copyFileSync(
		join(__dirname, "src", "store", "slices", "counterSlice.js"),
		join(projectPath, "src", "store", "slices", "counterSlice.js")
	);
	fs.copyFileSync(
		join(__dirname, "src", "store", "slices", "themeSlice.js"),
		join(projectPath, "src", "store", "slices", "themeSlice.js")
	);

	console.log(`Success! Project "${answers.projectName}" created at ${projectPath}`);
});
