import React from "react";
import styled from 'styled-components';

import Sensor from './Sensor';
import { useFetchFunc } from "../../hooks/useFetch";

const SensorWrapper = styled.div`
    display: flex;
    flex-direction: column;
    .errors {
        display: flex;
        justify-content: center;
        border: 3px solid #f00;
        padding: 0.75rem;
        margin: 0 20px 30px;
        color: #f00;
        font-weight: bold;
        text-align: center;
    }
    .list {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-around;
    }
`;

const Sensors = ({sensorsData}) => {
    const { handleFetch, error } = useFetchFunc();
    console.log(error?.error);
    return (
        <SensorWrapper >
        {error &&<div className="errors">{JSON.stringify(error)}</div>}
            <div className="list">
                {
                    sensorsData.map(el => <Sensor key={el.id} sensorData={el} handleFetch={handleFetch} />)
                }
            </div>
        </SensorWrapper>
    );
}

export default Sensors;