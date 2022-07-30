import React from "react";
import styled from 'styled-components';

import {PRIVATE_SENSORS_HOST} from "../../variables";
import {success, denied} from '../../stylesVars';

const SensorItem = styled.div`
    position: relative;
    width: 160px;
    height: 220px;
    background-color: #fff;
    border-radius: 10px;
    border: 2px solid ${props => props.status ? success : denied };
    box-shadow: 2px 2px 5px #ddd;
    padding: 10px 14px;
    margin: 0 16px 16px;
    display: flex;
    flex-direction: column;
    align-items: stretch;
    .name {
        font-size: 16px;
        padding-right: 35px;
    }
    .samplingPeriod {
        margin-top: auto;
    }
    .description {
        font-size: 14px;
    }
    .switcher {
        position: absolute;
        right: 16px;
        top: 5px;
        overflow: hidden;
        input {
            height: 0;
            width: 0;
            visibility: hidden;
        }

        label {
            cursor: pointer;
            text-indent: -9999px;
            width: 30px;
            height: 18px;
            background: grey;
            display: block;
            border-radius: 25px;
            position: relative;
            background-color: ${denied};
        }

        label:after {
            content: '';
            position: absolute;
            top: 2px;
            left: 2px;
            width: 14px;
            height: 14px;
            background: #fff;
            border-radius: 22px;
            transition: 0.3s;
        }

        input:checked + label {
            background: ${success};
        }

        input:checked + label:after {
            left: calc(100% - 2px);
            transform: translateX(-100%);
        }

        label:active:after {
            width: 130px;
        }
    }
`;

const Remove = styled.div`
    margin-top: 10px;
    width: 100%;
    height: 24px;
    border-radius: 14px;
    background-color: ${denied};
    color: #fff;
    font-weight: bold;
    text-transform: uppercase;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    transition: 0.3s background;
    &:hover {
        background-color: #c00;
    }
`;

const Sensor = ({sensorData, handleFetch}) => {
    const handleChangeStatus = (id, status) => {
        handleFetch({
            pathLink: `${PRIVATE_SENSORS_HOST}/${id}`,
            requestData: { isActive: status },
            method: 'PUT',
        });
    };
    const handleDelete = (id) => {
        handleFetch({
            pathLink: `${PRIVATE_SENSORS_HOST}/${id}`,
            method: 'DELETE',
        });
    };
    return (
        <SensorItem status={sensorData.isActive} >
            <h2 className="name">Sensor Name</h2>
            <div className="switcher">
                <input
                    type="checkbox"
                    id="switch"
                    checked={sensorData.isActive}
                    onChange={() => handleChangeStatus(sensorData.id, sensorData.isActive)}
                    />
                <label htmlFor="switch">Toggle</label>
            </div>
            <div className="description">{sensorData.description}</div>
            <div className="samplingPeriod">Sampling Period: <span>{sensorData.samplingPeriod}</span></div>
            <Remove onClick={() => handleDelete(sensorData.id)} >remove</Remove>
        </SensorItem>
    );
}

export default Sensor;