import db from "../db.js"

export default {
    add : async (title) => {
        const [result] = await db.promise().execute('INSERT INTO task (title) values (?)', [title]);
    
        const task = {
            id : result.insertId,
            title,
            status: 'active',
            created_at: new Date(),
        }

        return task;
    },

    delete : async (id) => {
        await db.promise().execute('DELETE FROM task WHERE id = ?', [id]);
    },

    getAll : async () => {
        const [tasks] = await db.promise().execute('SELECT * FROM task', []);

        return tasks;
    },

    update : async (id, title) => {
        await db.promise().execute('UPDATE task SET title = ? WHERE id = ?', [title, id]);

        const task = {
            id,
            title,
            status : 'active',
        }

        return task;
    },

    finishTask : async (id) => {
        await db.promise().execute('UPDATE task SET status = ?, completed_at = NOW() WHERE id = ?', ['completed',id]);
    },
}