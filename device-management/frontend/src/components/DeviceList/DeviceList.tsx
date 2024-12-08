import React, { useEffect, useState } from 'react';
import styles from './DeviceList.module.scss';
import axios from 'axios';

type Device = {
    id: number;
    name: string;
    type: string;
    created_at: string;
};

const DeviceList: React.FC = () => {
    const [devices, setDevices] = useState<Device[]>([]); //<Device[]>([])はTypescriptのアノテーション, []は状態の初期値

    useEffect(() => {
        axios.get('http://localhost:5000/api/devices')
            .then((response) => {
                setDevices(response.data);
            })
            .catch((error) => {
                console.error('Error fetching devices:', error);
            });
    }, []);

    return (
        <div className={styles.container}>
            <div className={styles.header}>Device List</div>
            {devices.map((device) => (
                <div key={device.id} className={styles.deviceItem}>
                    <span>{device.name} ({device.type})</span>
                    <span>{new Date(device.created_at).toLocaleDateString()}</span>
                </div>
            ))}
        </div>
    );
};

export default DeviceList;
