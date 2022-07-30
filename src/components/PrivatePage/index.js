import React from "react";
import styled from 'styled-components';

import Sensors from '../Sensors';
// import useFetch from "../../hooks/useFetch";
// import {PRIVATE_SENSORS_HOST} from "../../variables";

const Wrapper = styled.div`
    
`;

const PrivatePage = () => {
    // const sensorsData11 = useFetch({
    //     pathLink: PRIVATE_SENSORS_HOST,
    // });
    const sensorsData = [
      {
        id: 0,
        description: "string",
        samplingPeriod: 5,
        isActive: false,
      },
      {
        id: 1,
        description: "Some not very long text Some not very long text Some",
        samplingPeriod: 5,
        isActive: true,
      },
      {
        id: 2,
        description: "Some not very long Some not very long text text Some not very long text Some not very long text", 
        samplingPeriod: 5,
        isActive: false,
      },
      {
        id: 3,
        description: "Some not very long text",
        samplingPeriod: 5,
        isActive: true,
      },
      {
        id: 4,
        description: "Some not very long text",
        samplingPeriod: 5,
        isActive: true,
      },
    ]
  return (
    <Wrapper>
      <Sensors sensorsData={sensorsData}/>
    </Wrapper>
  );
}

export default PrivatePage;