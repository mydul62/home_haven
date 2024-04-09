import React, { useEffect, useState } from 'react';
import { useParams, useLoaderData } from 'react-router-dom';

const Details = () => {
  const [loadedData, setLoadedData] = useState([]);
  const datas = useLoaderData();
  const { loadId } = useParams();
  const {id}=loadedData;
  useEffect(() => {
    const newData = datas.filter(data => data.id === parseInt(loadId));
    setLoadedData(newData);
  }, [datas, loadId]);

  console.log(loadedData);

  return (
    <div>
      <h1>id is here {id}</h1>
    </div>
  );
};

export default Details;
