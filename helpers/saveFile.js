import fs from 'fs';
const file = './db/data.json';

export const saveDB = (data) => {
	fs.writeFileSync(file, data);
};

export const readDB = () => {
	if (!fs.existsSync(file)) {
		return null;
	}
	const info = fs.readFileSync(file, { encoding: 'utf-8' });
	if (info.length > 0) {
		return true;
	}
};
