import db from "../db.js"

export default {
    add : async (title) => {
        await db.promise().execute('INSERT INTO task (title) values (?)', [title]);
    },

    delete : async (id) => {
        await db.promise().execute('DELETE FROM task WHERE id = ?', [id]);
    },

    getAll : async () => {
        const [tasks] = await db.promise().execute('SELECT * FROM task', []);

        return tasks;
    },

    update : async (id, title) => {
        await db.promise().execute('UPDATE task SET title = ?, created_at = NOW() WHERE id = ?', [title, id]);
    },

    finishTask : async (id) => {
        await db.promise().execute('UPDATE task SET status = ?, completed_at = NOW() WHERE id = ?', ['completed',id]);
    },
}