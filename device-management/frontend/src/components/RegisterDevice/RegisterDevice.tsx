import React, { useState } from 'react';
import axios from 'axios';
import styles from './RegisterDevice.module.scss';

const RegisterDevice: React.FC = () => {
    const [name, setName] = useState('');
    const [type, setType] = useState('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        axios.post('http://localhost:5000/api/devices', { name, type })
            .then(() => {
                alert('Device registerd');
                setName('');
                setType('');
            }).catch((error) => {
                console.error('Error registering device:', error);
            });
    };

    return (
        <div className={styles.container}>
            <h1>Register a New Device</h1>
            <form onSubmit={handleSubmit}>
                <label>
                    Device Name:
                    <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
                </label>
                <label>
                    Device Type:
                    <input type="text" value={type} onChange={(e) => setType(e.target.value)} />
                </label>
                <button type="submit"> Register</button>
            </form>
        </div>
    );
};
export default RegisterDevice;