import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { AuthContext } from "../../Firebase/FirebaseProvider";
import { RxEyeOpen } from "react-icons/rx";
import { GoEyeClosed } from "react-icons/go";
import { FcGoogle } from "react-icons/fc";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
import * as React from "react";
import Alert from "@mui/material/Alert";
import Stack from "@mui/material/Stack";
import PageTitle from "../../Components/Banner/PageTitle/PageTitle";

const Login = () => {
  const [show, setShow] = useState(false);
  const [succsess, setSuccsess] = useState(false);
  const { signInPass, googleSignIn } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  const form = location?.state || "/";
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    setSuccsess(false)
    const email = data.email;
    const password = data.password;
    signInPass(email, password)
      .then((result) => {
        setSuccsess(true)
        if (result.user) {
          navigate(form);
        }
      })
      .catch((error) => {
        console.log(error.message);
      });
  };
  const handleGoogleLogin = () => {
    googleSignIn()
      .then((result) => {
        toast("Sign In sucsessfully");
        if (result.user) {
          navigate(form);
        }
      })
      .catch((error) => {
        console.log(error.message);
      });
  };
  const passShow = () => {
    setShow(!show);
  };

  return (
    <div className="max-w-[1440px] w-[95%] mx-auto flex flex-col items-center justify-center min-h-[calc(100vh-128px)] mt-24">
      <PageTitle title={"Login"}></PageTitle>
      <div className="w-[90%] md:w-4/6 lg:w-2/6 mx-auto bg-[#aeaeae35] py-10 p-6 rounded-xl border-[3px] border-[#82589F]">
        <form onSubmit={handleSubmit(onSubmit)}>
          <h2 className="text-[#2ed573] font-plyfair text-center text-3xl md:text-4xl pb-6 font-bold">
            Login Now
          </h2>
          <div className=" my-4">
            {
              succsess && <Stack sx={{ width: "100%" }} spacing={2}>
              <Alert variant="filled" severity="success">
                Login Successfull.
              </Alert>
            </Stack>
            }
          
          </div>

          <div className="flex flex-col gap-8">
            <div>
              <input
                {...register("email", { required: true })}
                type="email"
                name="email"
                placeholder="Your email"
                id="email"
                className="transition-transform input-feild block w-full outline-none border-none bg-[#aeaeae5a] py-5 px1 rounded-xl text-[#090909da] placeholder:text-black font-semibold pl-2"
              />
              {errors.email && <span>This field is required</span>}
            </div>
            <div className="relative">
              <input
                {...register("password")}
                type={show ? "text" : "password"}
                name="password"
                placeholder="Password"
                className="transition-transform input-feild block w-full outline-none border-none bg-[#aeaeae5a] py-5 px1 rounded-xl text-[#090909da] placeholder:text-black font-semibold pl-2"
              />
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
            <p className=" text-xl font-bold">or</p>
            <p className="mb-3" onClick={handleGoogleLogin}>
              <FcGoogle size={30} />{" "}
            </p>
            <input
              className="bg-[#2ed573] py-2 rounded-xl w-1/3 text-xl"
              type="submit"
              value={"Login"}
            />
          </div>
        </form>
        <h4 className="pt-4">
          Already have an account?{" "}
          <Link to={"/register"} className="text-xl underline">
            Register
          </Link>
        </h4>
      </div>
    </div>
  );
};

export default Login;
