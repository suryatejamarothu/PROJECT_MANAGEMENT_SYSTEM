const Task = require('../models/Task');

exports.getAllTasks = async (req, res) => {
    try {
        const tasks = await Task.findAll();
        res.json(tasks);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.createTask = async (req, res) => {
    const { title, description, status } = req.body;

    if (!title) {
        return res.status(400).json({ message: 'Title is required' });
    }

    if (description && description.length < 20) {
        return res.status(400).json({ message: 'Description must be at least 20 characters long' });
    }

    try {
        const taskId = await Task.create({ title, description, status });
        const newTask = await Task.findById(taskId);
        res.status(201).json(newTask);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.updateTaskStatus = async (req, res) => {
    const { id } = req.params;
    const { status } = req.body;

    if (!status) {
        return res.status(400).json({ message: 'Status is required' });
    }

    try {
        const updated = await Task.updateStatus(id, status);
        if (updated === 0) {
            return res.status(404).json({ message: 'Task not found' });
        }
        const updatedTask = await Task.findById(id);
        res.json(updatedTask);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.deleteTask = async (req, res) => {
    const { id } = req.params;
    try {
        const deleted = await Task.delete(id);
        if (deleted === 0) {
            return res.status(404).json({ message: 'Task not found' });
        }
        res.json({ message: 'Task deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
