import React from 'react';
import {Dna} from "react-loader-spinner";
const Loader = (data) => {
  return (
    <center >
    <Dna
        visible={data.visible}
        height="80"
        width="80"
        ariaLabel="dna-loading"
        wrapperStyle={{}}
        wrapperClass="dna-wrapper"
      />
    </center>
  )
}

export default Loader
