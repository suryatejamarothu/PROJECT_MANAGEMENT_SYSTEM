import React from 'react';
import { Trash2, CheckCircle, Clock } from 'lucide-react';

const TaskCard = ({ task, onUpdateStatus, onDelete }) => {
    const formatDate = (dateString) => {
        const options = { year: 'numeric', month: 'short', day: 'numeric' };
        return new Date(dateString).toLocaleDateString(undefined, options);
    };

    const getStatusClass = (status) => {
        switch (status) {
            case 'Pending': return 'status-pending';
            case 'In Progress': return 'status-progress';
            case 'Completed': return 'status-completed';
            default: return '';
        }
    };

    return (
        <div className="task-card">
            <div className="task-header">
                <span className={`task-status ${getStatusClass(task.status)}`}>
                    {task.status}
                </span>
                <div className="task-actions">
                    {task.status !== 'Completed' && (
                        <button 
                            className="icon-btn complete" 
                            onClick={() => onUpdateStatus(task.id, 'Completed')}
                            title="Mark as Completed"
                        >
                            <CheckCircle size={18} />
                        </button>
                    )}
                    <button 
                        className="icon-btn delete" 
                        onClick={() => onDelete(task.id)}
                        title="Delete Task"
                    >
                        <Trash2 size={18} />
                    </button>
                </div>
            </div>
            <h3 className="task-title">{task.title}</h3>
            <p className="task-desc">{task.description}</p>
            <div className="task-footer">
                <div className="task-date">
                    <Clock size={14} style={{ marginRight: '4px', verticalAlign: 'text-bottom' }} />
                    {formatDate(task.created_at)}
                </div>
            </div>
        </div>
    );
};

export default TaskCard;
