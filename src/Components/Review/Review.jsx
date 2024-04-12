import { useEffect, useState } from "react";
import Marquee from "react-fast-marquee";
import ReviewItem from "./ReviewItem";


const Review = () => {
  const [reviews,setReview]=useState([])
  useEffect(()=>{
     fetch('/review.json')
     .then(res=>res.json())
     .then(data=>setReview(data))
  },[])
  console.log(reviews);
  return (
   <div className=" max-w-[1440px] w-[90%] mx-auto">
     <Marquee  className=" flex gap-5">
      {
        reviews.map(review=>(
         <ReviewItem key={review.id}></ReviewItem>
        ))
        
      }
    </Marquee>
   </div>
  );
};

export default Review;