import React, { useState, useEffect } from 'react';
import { getTasks, updateTaskStatus, deleteTask } from '../services/taskService';
import TaskCard from '../components/TaskCard';
import { Filter } from 'lucide-react';

const Dashboard = () => {
    const [tasks, setTasks] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [filter, setFilter] = useState('All');

    useEffect(() => {
        fetchTasks();
    }, []);

    const fetchTasks = async () => {
        try {
            setLoading(true);
            const response = await getTasks();
            setTasks(response.data);
            setLoading(false);
        } catch (err) {
            setError('Failed to fetch tasks. Please try again later.');
            setLoading(false);
        }
    };

    const handleUpdateStatus = async (id, status) => {
        try {
            await updateTaskStatus(id, status);
            setTasks(tasks.map(t => t.id === id ? { ...t, status } : t));
        } catch (err) {
            alert('Error updating task');
        }
    };

    const handleDelete = async (id) => {
        if (!window.confirm('Are you sure you want to delete this task?')) return;
        try {
            await deleteTask(id);
            setTasks(tasks.filter(t => t.id !== id));
        } catch (err) {
            alert('Error deleting task');
        }
    };

    const filteredTasks = filter === 'All' 
        ? tasks 
        : tasks.filter(t => t.status === filter);

    if (loading) return <div className="loader"></div>;
    if (error) return <div className="container"><p className="error-text">{error}</p></div>;

    return (
        <div className="container">
            <header className="dashboard-header">
                <h1>Projects Tasks</h1>
                <div className="filter-group">
                    <Filter size={18} style={{ alignSelf: 'center', marginRight: '8px' }} />
                    {['All', 'Pending', 'In Progress', 'Completed'].map(f => (
                        <button 
                            key={f}
                            className={`filter-chip ${filter === f ? 'active' : ''}`}
                            onClick={() => setFilter(f)}
                        >
                            {f}
                        </button>
                    ))}
                </div>
            </header>

            {filteredTasks.length === 0 ? (
                <div className="empty-state">
                    <h2>No tasks found</h2>
                    <p>Try changing the filter or create a new task to get started.</p>
                </div>
            ) : (
                <div className="task-grid">
                    {filteredTasks.map(task => (
                        <TaskCard 
                            key={task.id} 
                            task={task} 
                            onUpdateStatus={handleUpdateStatus}
                            onDelete={handleDelete}
                        />
                    ))}
                </div>
            )}
        </div>
    );
};

export default Dashboard;
