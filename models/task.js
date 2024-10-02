const uuid = crypto.randomUUID();
class Task {
	id = '';
	desc = '';
	completed = null;
	constructor(desc) {
		this.id = crypto.randomUUID();
		this.desc = desc;
		this.completed = null;
	}
}
export default Task;
