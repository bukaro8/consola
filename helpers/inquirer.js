import inquirer from 'inquirer';
import colors from 'colors';

const menuOpt = [
	{
		type: 'list',
		name: 'option',
		message: 'What would you like to do?',
		choices: [
			{
				value: '1',
				name: `${'1'.green}. Create a task`,
			},
			{
				value: '2',
				name: `${'2'.green}. Show  tasks`,
			},
			{
				value: '3',
				name: `${'3'.green}. Show Completed  Tasks`,
			},
			{
				value: '4',
				name: `${'4'.green}. Show Pending Tasks`,
			},
			{
				value: '5',
				name: `${'5'.green}. Completed  Task(s)`,
			},
			{
				value: '6',
				name: `${'6'.green}. Delete  Task`,
			},
			{
				value: '0',
				name: `${'0'.green}. Quit\n`,
			},
		],
	},
];
export const inquirerMenu = async () => {
	// console.clear();
	console.log('============================='.green);
	console.log('       Select and Option'.white);
	console.log('=============================\n'.green);

	const { option } = await inquirer.prompt(menuOpt);
	return option;
};

export const pause = async () => {
	const question = [
		{
			type: 'input',
			name: 'enter',
			message: `Press ${'ENTER'.green} to continue`,
		},
	];
	await inquirer.prompt(question);
};

export const readInput = async (message) => {
	const question = [
		{
			type: 'input',
			name: 'desc',
			message,
			validate(value) {
				if (value.length === 0) {
					return 'Please enter a description';
				}
				return true;
			},
		},
	];
	const { desc } = await inquirer.prompt(question);
	return desc;
};
