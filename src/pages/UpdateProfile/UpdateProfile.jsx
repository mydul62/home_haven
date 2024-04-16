import { useContext } from "react";
import { AuthContext } from "../../Firebase/FirebaseProvider";
import { useForm } from "react-hook-form";

const UpdateProfile = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const { user, updateprofile } = useContext(AuthContext);

  const onSubmit = (data) => {
    const name = data.name;
    const phone = data.phone;
    const photoURL = data.photoURL;
    updateprofile(name, phone, photoURL)
      .then(() => {
        // Profile updated successfully
      })
      .catch((error) => {
        // An error occurred while updating profile
      });
  };

  return (
    <div className="max-w-4xl mx-auto mt-44">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 bg-white rounded-xl shadow-lg p-8">
        <div className="md:border-r-2 md:border-gray-200">
          <div className="text-center mb-8">
            <div className="relative inline-block w-24 h-24 rounded-full overflow-hidden bg-gray-200">
              <img className="object-cover w-full h-full" src={user && user.photoURL} alt={user && user.displayName} />
            </div>
            <h2 className="text-2xl font-bold mt-4">{user && user.displayName}</h2>
            <p className="text-gray-600">{user && user.email}</p>
          </div>
          <div className="border-b border-gray-200 pb-4 mb-4">
            <h3 className="text-lg font-semibold mb-2">Personal Information</h3>
            <p className="text-gray-700">Name: {user && user.displayName}</p>
            <p className="text-gray-700">Phone: {user && user.phoneNumber ? user.phoneNumber : "Not provided"}</p>
          </div>
        </div>
        
        <div>
          <h2 className="text-2xl font-bold mb-6 text-center md:text-left">Update Profile</h2>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            <input
              {...register("name")}
              type="text"
              placeholder="Enter your name"
              className="input input-bordered w-full"
              defaultValue={user && user.displayName}
            />
            <input
              {...register("phone")}
              type="text"
              placeholder="Enter your phone number"
              className="input input-bordered w-full"
              defaultValue={user && user.phoneNumber ? user.phoneNumber : ""}
            />
            <input
              {...register("photoURL")}
              type="text"
              placeholder="Enter your photo URL"
              className="input input-bordered w-full"
              defaultValue={user && user.photoURL ? user.photoURL : ""}
            />
            <button type="submit" className="btn bg-blue-500 text-white w-full">Update Profile</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default UpdateProfile;
