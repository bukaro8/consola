import colors from 'colors';
import * as readline from 'node:readline/promises';
import { stdin as input, stdout as output } from 'node:process';

export const showMenu = async () => {
	console.clear();
	console.log('============================='.green);
	console.log('       Select and Option'.green);
	console.log('=============================\n'.green);

	console.log(`${'1'.green}. Create a task`);
	console.log(`${'2'.green}. Show  tasks`);
	console.log(`${'3'.green}. Show Completed  Tasks`);
	console.log(`${'4'.green}. Show Pending Tasks`);
	console.log(`${'5'.green}. Completed  Task(s)`);
	console.log(`${'6'.green}. Delete  Task`);
	console.log(`${'0'.green}. Quit\n`);

	const rl = readline.createInterface({ input, output });

	const answer = await rl.question('Select and Option ');
	console.log(`You selected ${answer}`);
	rl.close();
	return answer;
};

export const pause = async () => {
	const rl = readline.createInterface({ input, output });
	const enterNext = await rl.question(`Press ${'ENTER'.green}`);

	rl.close();
};
