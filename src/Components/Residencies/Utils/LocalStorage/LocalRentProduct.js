// import toast from "react-hot-toast";

export const getRentInfo =()=>{
  const getRentInfoData = JSON.parse(localStorage.getItem('RentDatas')) || [];
  return getRentInfoData;
}

export const saveRentInfo =(info)=>{
  const RentDatas = getRentInfo();
  RentDatas.push(info)
    localStorage.setItem('RentDatas',JSON.stringify(RentDatas))
   alert('Congratulation, Rent Done')
}
