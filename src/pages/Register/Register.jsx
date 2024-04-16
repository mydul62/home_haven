import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { AuthContext } from "../../Firebase/FirebaseProvider";
import { updateProfile } from "firebase/auth";
import auth from "../../Firebase/Firebase-config";
import { RxEyeOpen } from "react-icons/rx";
import { GoEyeClosed } from "react-icons/go";
const Register = () => {
  const [show, setShow] = useState(false);
  const [error,setError]=useState(null)
  const [passError,setPassError]=useState(null)
  const { signUpPass } = useContext(AuthContext);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    const email = data.email;
    const name = data.name;
    const PhotoUrl = data.PhotoUrl;
    const password = data.password;
    if(!/^(?=.*[a-z])(?=.*[A-Z]).{6,}$/.test(password)){
      setPassError("You have to put uppercase,lowecase & minimum 6 degit")
      return;
    }
    setPassError(null)
    signUpPass(email, password)
      .then((result) => {
        updateProfile(auth.currentUser, {
          displayName: name,
          photoURL: PhotoUrl,
        })
          .then(() => {
            // Profile updated!
            // ...
          })
          .catch((error) => {
            // An error occurred
            console.log();(error.message);
          });
          
      })
      .catch((error) => {
        setError("This email Already used");
      });
  };

  const passShow = () => {
    setShow(!show);
  };

  return (
    <div className="max-w-[1440px] w-[90%] mx-auto grid grid-cols-1 md:grid-cols-6 bg-no-repeat bg-cover bg-right p-6 mt-44">
      <div className="col-span-full md:col-span-3 border-r-2 border-dashed">
        <div className="flex flex-col items-center justify-center min-h-[calc(100vh-128px)]">
          <div className="w-full lg:w-[70%] mx-auto bg-[#aeaeae35] py-10 p-6 rounded-xl border-[3px] border-[#82589F]">
            <form onSubmit={handleSubmit(onSubmit)}>
              <h2 className="text-[#2ed573] font-plyfair text-center text-4xl pb-6 font-bold">
                Register Now
              </h2>
              <div className="flex flex-col gap-8">
                <div className="w-full">
                  <input
                    type="text"
                    name="name"
                    placeholder="Your name"
                    id="name"
                    {...register("name")} // Registering the input field
                    className="transition-transform input-feild block w-full outline-none border-none bg-[#aeaeae5a] py-5 px1 rounded-xl text-[#090909da] placeholder:text-black font-semibold pl-2"
                  />
                </div>
                <div className="w-full">
                  <input
                    type="text"
                    name="photo"
                    placeholder="PhotoUrl"
                    id="PhotoUrl"
                    {...register("PhotoUrl")}
                    className="transition-transform input-feild block w-full outline-none border-none bg-[#aeaeae5a] py-5 px1 rounded-xl text-[#090909da] placeholder:text-black font-semibold pl-2"
                  />
                </div>
                <div>
                  <input
                    type="email"
                    name="email"
                    placeholder="Your email"
                    id="email"
                    {...register("email")} // Registering the input field
                    className="transition-transform input-feild block w-full outline-none border-none bg-[#aeaeae5a] py-5 px1 rounded-xl text-[#090909da] placeholder:text-black font-semibold pl-2"
                  />
                  {errors.email && <span>This field is required</span>}
                  {error && <span className=" text-red-500">{error}</span>}
                </div>
                <div className="relative">
                  <input
                    type={show ? "text" : "password"}
                    name="password"
                    placeholder="Password"
                    {...register("password")} // Registering the input field
                    className="transition-transform input-feild block w-full outline-none border-none bg-[#aeaeae5a] py-5 px1 rounded-xl text-[#090909da] placeholder:text-black font-semibold pl-2"
                    
                  />
                  {errors.password && <span className="text-red-900">This field is required</span>}
                  {passError && <span className="text-red-500">{passError}</span>}
                  <div
                    onClick={passShow}
                    className="absolute top-5 cursor-pointer right-3"
                  >
                    {show ? (
                      <span>
                        <RxEyeOpen />
                      </span>
                    ) : (
                      <span>
                        <GoEyeClosed />
                      </span>
                    )}
                  </div>
                </div>
              </div>
              <div className="flex gap-3 flex-col items-center justify-center pt-6">
                <p className="text-xl font-bold">or</p>
                <input
                  className="bg-[#2ed573] py-2 rounded-xl w-1/3 text-xl"
                  type="submit"
                  value={"Register"}
                />
              </div>
            </form>
            <h4 className="pt-4">
              Already have an account?{" "}
              <Link to={"/login"} className="text-xl underline">
                Login
              </Link>
            </h4>
          </div>
        </div>
      </div>
      <div className="flex  flex-col items-center col-span-full md:col-span-3 md:w-[70%] mx-auto">
      <h2 className=" text-3xl mt-10 py-6">Privicy Policy</h2>
        <ul>
          
  <li>
    <h3 className="text-lg font-semibold mb-2">
      <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">1.</span> Use of Information:
    </h3>
    <p>After registration, clarify how you will use the information collected during the registration process. This may include using the provided contact details to communicate with the user about their account, property listings, or relevant updates.</p>
  </li>
  <li>
    <h3 className="text-lg font-semibold mb-2">
      <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">2.</span> Data Security:
    </h3>
    <p>Reiterate the measures you take to safeguard the personal information provided during registration. Emphasize your commitment to protecting user data from unauthorized access, disclosure, or misuse.</p>
  </li>
  <li>
    <h3 className="text-lg font-semibold mb-2">
      <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">3.</span> Data Retention:
    </h3>
    <p>Explain how long you will retain the information collected during registration. Specify the purposes for which the data will be retained and the criteria used to determine the retention period.</p>
  </li>

  <li>
    <h3 className="text-lg font-semibold mb-2">
      <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">4.</span> Updates to the Privacy Policy:
    </h3>
    <p>Notify users that your privacy policy may be updated periodically, and explain how you will communicate changes to registered users. Encourage users to review the policy regularly for any updates or modifications.</p>
  </li>
</ul>
      </div>
    </div>
  );
};

export default Register;
