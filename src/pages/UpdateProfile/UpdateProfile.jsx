import { useContext } from "react";
import { AuthContext } from "../../Firebase/FirebaseProvider";
import { useForm } from "react-hook-form";

const UpdateProfile = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const { user, updateprofile, signUpPass } = useContext(AuthContext);
  console.log(user);
  const onSubmit = (data) => {
    const name = data.name;
    const phone = data.phone;
    const PhotoURL = data.PhotoURL;
    updateprofile(name, phone, PhotoURL)
      .then(() => {
        // Profile updated!
        // ...
      })
      .catch((error) => {
        // An error occurred
        // ...
      });
  };
  return (
    <div className="max-w-[1440px] w-[90%] gap-6 mx-auto grid grid-cols-1 md:grid-cols-5 my-44">
      <div className=" col-span-full md:col-span-2 border-b-2 md:border-b-0 border-[#27ae60] md:border-r-2 border-dashed min-h-24 p-6">
        <div className=" w-full md:w-[80%] p-6 border-2 bg-[#eaeaead0] rounded-3xl border-[#bd2edda3] ">
          <div className=" border-b ">
            <div data-aos="zoom-in"
               data-aos-duration="2000"
              className=" flex justify-center items-center w-[150px] h-[150px] mx-auto rounded-full border-8 border-[#27ae5f96] "
            >
              <img
                className=" w-full rounded-full"
                src={user && user.photoURL}
                alt=""
              />
            </div>
            <h2 className=" text-center font-poppins text-xl font-semibold py-2">
              {user.displayName}
            </h2>
          </div>
          <div className=" flex justify-center py-3 ">
            <div className=" inline-block border-b-4 border-[#27ae60] pb-2">
              <h2 className=" text-center text-xl font-poppins font-semibold">
                Personal Information
              </h2>
            </div>
          </div>
          <div
            
            className=" space-y-4 *:font-poppins *:text-[#606e8c]"
          >
            <h3 data-aos="fade-right"
            data-aos-duration="500"
            data-aos-easing="ease-in-sine" className="">Name : {user && user.displayName}</h3>
            <h3 data-aos="fade-right"
            data-aos-duration="1000"
            data-aos-easing="ease-in-sine">
              Phone : {user.phoneNumber ? user.phoneNumber : "01*********"}
            </h3>
            <h3 data-aos="fade-right"
            data-aos-duration="1500"
            data-aos-easing="ease-in-sine">Email : {user && user.email}</h3>
          </div>
        </div>
      </div>
      <div className=" col-span-full md:col-span-3 ">
        <div className="  px-6">
          <div className=" text-center py-6">
            <h2 className=" mb-6 text-3xl">Update Profile</h2>
          </div>
          <form
            
            onSubmit={handleSubmit(onSubmit)}
            className=" space-y-8"
          >
            <label data-aos="fade-left"
            data-aos-anchor="#example-anchor"
            data-aos-offset="500"
            data-aos-duration="1000" className="input input-bordered flex items-center gap-2 py-8">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                fill="currentColor"
                className="w-4 h-4 opacity-70"
              >
                <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z" />
              </svg>
              <input
                defaultValue={`${user && user.displayName}`}
                {...register("name")}
                type="text"
                className="grow "
                placeholder="Username"
              />
            </label>
            <label data-aos="fade-left"
            data-aos-anchor="#example-anchor"
            data-aos-offset="500"
            data-aos-duration="1500" className="input input-bordered flex items-center gap-2 py-8">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                fill="currentColor"
                className="w-4 h-4 opacity-70"
              >
                <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z" />
              </svg>
              <input
                defaultValue={`${user && user.phoneNumber}`}
                {...register("phone")}
                type="text"
                className="grow"
                placeholder="Phone"
              />
            </label>
            <label data-aos="fade-left"
            data-aos-anchor="#example-anchor"
            data-aos-offset="500"
            data-aos-duration="2000" className="input input-bordered flex items-center gap-2 py-8">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                fill="currentColor"
                className="w-4 h-4 opacity-70"
              >
                <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z" />
              </svg>
              <input
                defaultValue={`${user && user.photoURL}`}
                {...register("PhotoURL")}
                type="text"
                className="grow"
                placeholder="PhotoURL"
              />
            </label>

            <div data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-easing="ease-in-sine" className="flex justify-center">
              <input
                className=" btn bg-[#27ae60] text-white"
                type="submit"
                value="Update Now"
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default UpdateProfile;
