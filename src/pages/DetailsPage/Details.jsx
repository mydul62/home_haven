import { useEffect, useState } from 'react';
import { useParams, useLoaderData } from 'react-router-dom';
import Detail from './Detail';
import Residencies from '../../Components/Residencies/Residencies';

const Details = () => {
  const [loadedData, setLoadedData] = useState([]);
  const datas = useLoaderData();
  const { id } = useParams();
  useEffect(() => {
    const newData = datas.filter(data => data.id === parseInt(id));
    setLoadedData(newData);
  }, [datas, id]);
 

  return (
    <div>
      <div className='mt-44'>
      {
        loadedData.map(dt=>(
           <Detail data={dt} key={dt.id}></Detail>
        ))
      }
    </div>
     <div className=' max-w-[1440px] w-[90%] mb-16 mx-auto pt-24'>
      <h2 className=' text-orange-400 font-poppins text-3xl font-semibold'>Our More Popuklar services</h2>
     </div>
     <div>
      <Residencies loadData={datas}></Residencies>
     </div>
    </div>
  );
};

export default Details;
