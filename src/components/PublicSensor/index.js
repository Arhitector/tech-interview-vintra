import React from "react";

import styled from 'styled-components';

const SensorWrapper = styled.div`
    position: relative;
    width: 160px;
    height: 220px;
    background-color: #fff;
    border-radius: 10px;
    border: 2px solid ${props => props.status ? '#0a0' : '#f00' };
    box-shadow: 2px 2px 5px #ddd;
    padding: 10px 14px;
    display: flex;
    flex-direction: column;
    align-items: stretch;
    .name {
        font-size: 16px;
    }
    .pid, .cpu, .connections, .users {
        display: flex;
        justify-content: space-between;
    }
    .status {
        position: absolute;
        right: 20px;
        top: 20px;
        border-radius: 50%;
        width: 10px;
        height: 10px;
        background-color: ${props => props.status ? '#0a0' : '#f00'};
    }
`;

const PublicSensor = ({sensorData}) => {
    const {
        cpu_percent,
        db_status_ok,
        num_connections,
        num_users,
        pid,
        // rss_bytes,
    } = sensorData;
  return (
    <SensorWrapper status={db_status_ok}>
        <h2 className="name">Sensor Name</h2>
        <div className="status"></div>
        <div className="pid">PID: <span>#{pid}</span></div>
        <div className="cpu">CPU: <span>{cpu_percent}</span></div>
        <div className="connections">Connections: <span>{num_connections}</span></div>
        <div className="users">Users: <span>{num_users}</span></div>
      
    </SensorWrapper>
  );
}

export default PublicSensor;