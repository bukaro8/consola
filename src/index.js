import colors from 'colors';
import Task from '../models/task.js';
import Tasks from '../models/tasks.js';
import { inquirerMenu, pause, readInput } from '../helpers/inquirer.js';
import { readDB, saveDB, saveNewData } from '../helpers/saveFile.js';

// console.clear();

const main = async () => {
	let opt = '';
	const tasks = new Tasks();
	const tasksDB = readDB();
	while (opt !== '0') {
		opt = await inquirerMenu();
		switch (opt) {
			case '1':
				const desc = await readInput('Description: ');
				tasks.createTask(desc);

				break;
			case '2':
				console.log(tasks.showTasks);
				break;
			case '0':
				return;

			default:
				break;
		}
		saveDB(JSON.stringify(tasks.showTasks));
		await pause();
	}
};
main();
