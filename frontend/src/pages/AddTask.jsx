import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { createTask } from '../services/taskService';
import { ArrowLeft, Save } from 'lucide-react';

const AddTask = () => {
    const [formData, setFormData] = useState({
        title: '',
        description: '',
        status: 'Pending'
    });
    const [errors, setErrors] = useState({});
    const [submitting, setSubmitting] = useState(false);
    const navigate = useNavigate();

    const validate = () => {
        const newErrors = {};
        if (!formData.title.trim()) newErrors.title = 'Title is required';
        if (formData.description.length < 20) {
            newErrors.description = 'Description must be at least 20 characters';
        }
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!validate()) return;

        setSubmitting(true);
        try {
            await createTask(formData);
            navigate('/');
        } catch (err) {
            alert(err.response?.data?.message || 'Error creating task');
            setSubmitting(false);
        }
    };

    return (
        <div className="container">
            <button className="btn btn-outline" onClick={() => navigate(-1)} style={{ marginBottom: '1.5rem' }}>
                <ArrowLeft size={18} />
                Back
            </button>

            <div className="form-container">
                <h2 style={{ marginBottom: '1.5rem' }}>Create New Task</h2>
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label className="label">Task Title</label>
                        <input 
                            className="input"
                            type="text" 
                            placeholder="e.g. Build Login Page"
                            value={formData.title}
                            onChange={(e) => setFormData({...formData, title: e.target.value})}
                        />
                        {errors.title && <p className="error-text">{errors.title}</p>}
                    </div>

                    <div className="form-group">
                        <label className="label">Description</label>
                        <textarea 
                            className="textarea"
                            rows="5"
                            placeholder="Provide a detailed description of the task (min 20 chars)..."
                            value={formData.description}
                            onChange={(e) => setFormData({...formData, description: e.target.value})}
                        ></textarea>
                        {errors.description && <p className="error-text">{errors.description}</p>}
                    </div>

                    <div className="form-group">
                        <label className="label">Initial Status</label>
                        <select 
                            className="select"
                            value={formData.status}
                            onChange={(e) => setFormData({...formData, status: e.target.value})}
                        >
                            <option value="Pending">Pending</option>
                            <option value="In Progress">In Progress</option>
                        </select>
                    </div>

                    <button type="submit" className="btn btn-primary" style={{ width: '100%' }} disabled={submitting}>
                        {submitting ? 'Creating...' : (
                            <>
                                <Save size={18} />
                                Create Task
                            </>
                        )}
                    </button>
                </form>
            </div>
        </div>
    );
};

export default AddTask;
