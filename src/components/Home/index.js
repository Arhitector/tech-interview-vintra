import React, { useEffect, useState } from "react";
import styled from 'styled-components';

import PublicSensor from '../PublicSensor';
import Error from '../Error';
import useFetch from "../../hooks/useFetch";
import {PUBLIC_HEALTH_HOST} from "../../variables";

const Wrapper = styled.div`
    width: 92vw;
    margin: 0 auto;
`;

const Home = () => {
  const [data, setData] = useState({});
    const {data: sensorData, error} = useFetch({
        pathLink: PUBLIC_HEALTH_HOST,
    });
    useEffect(() =>{
      if (sensorData?.cpu_percent > 0) {
        
        setData(sensorData);
      }
    }, [sensorData])
  return (
    <Wrapper>
      <Error error={error} />
      { data.pid && <PublicSensor sensorData={data} />}
    </Wrapper>
  );
}

export default Home;