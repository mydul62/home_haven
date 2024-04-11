import { useEffect, useState } from 'react';
import { useParams, useLoaderData } from 'react-router-dom';
import Detail from './Detail';

const Details = () => {
  const [loadedData, setLoadedData] = useState([]);
  const datas = useLoaderData();
  const { id } = useParams();
  useEffect(() => {
    const newData = datas.filter(data => data.id === parseInt(id));
    setLoadedData(newData);
  }, [datas, id]);

console.log(loadedData);
 

  return (
    <div>
      {
        loadedData.map(dt=>(
           <Detail data={dt} key={dt.id}></Detail>
        ))
      }
    </div>
  );
};

export default Details;
