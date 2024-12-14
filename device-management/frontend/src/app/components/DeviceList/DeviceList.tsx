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

    //第2引数とが空のため、初回レンダリング時のみ1
    useEffect(() => {
        fetchDevices();
    }, []);

    const fetchDevices = () => {
        axios.get('http://localhost:5000/api/devices')
            .then((response) => {
                setDevices(response.data);
            }).catch((error) => {
                console.error('Error fetching devices:', error);
            });
    }

    const handleDelete = (id: number) => {
        axios.delete(`http://localhost:5000/api/devices/${id}`)
            .then(() => {
                //削除後に再度一覧を取得
                fetchDevices();
            }).catch((error) => {
                console.error('Error deleteing device:', error);
            })
    }
    return (
        <div className={styles.container}>
            <div className={styles.header}>Device List</div>
            {devices.map((device) => (
                <div key={device.id} className={styles.deviceItem}>
                    <span>{device.name} ({device.type})</span>
                    <span>{new Date(device.created_at).toLocaleDateString()}</span>
                    {/*button処理の追加 */}
                    <button onClick={() => handleDelete(device.id)} className={styles.deleteButton}>Delete</button>
                </div>
            ))}
        </div>
    );
};

export default DeviceList;
