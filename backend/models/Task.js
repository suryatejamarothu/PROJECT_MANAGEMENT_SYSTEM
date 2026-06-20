const db = require('../config/db');

class Task {
    static async findAll() {
        const [rows] = await db.query('SELECT * FROM tasks ORDER BY created_at DESC');
        return rows;
    }

    static async findById(id) {
        const [rows] = await db.query('SELECT * FROM tasks WHERE id = ?', [id]);
        return rows[0];
    }

    static async create(taskData) {
        const { title, description, status } = taskData;
        const [result] = await db.query(
            'INSERT INTO tasks (title, description, status) VALUES (?, ?, ?)',
            [title, description, status || 'Pending']
        );
        return result.insertId;
    }

    static async updateStatus(id, status) {
        const [result] = await db.query(
            'UPDATE tasks SET status = ? WHERE id = ?',
            [status, id]
        );
        return result.affectedRows;
    }

    static async delete(id) {
        const [result] = await db.query('DELETE FROM tasks WHERE id = ?', [id]);
        return result.affectedRows;
    }
}

module.exports = Task;
