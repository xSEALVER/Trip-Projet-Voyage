import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth, db } from "./auth/Firebase";
import { setDoc, doc } from "firebase/firestore";
import { useNavigate } from "react-router-dom"; // Import the useNavigate hook
import googleIcon from "../Assets/google.png";

function SignInwithGoogle() {
  const navigate = useNavigate(); // Initialize the navigate function

  function googleLogin() {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider).then(async (result) => {
      console.log(result);
      const user = result.user;
      if (user) {
        await setDoc(doc(db, "Users", user.uid), {
          email: user.email,
          firstName: user.displayName,
          photo: user.photoURL,
          lastName: "",
        });
        toast.success("User logged in Successfully", {
          position: "top-center",
        });
        // Navigate to the /trips route after login
        navigate("/trips"); // Programmatically navigate to /trips
      }
    }).catch((error) => {
      toast.error("Error logging in with Google", {
        position: "top-center",
      });
      console.error("Error during Google login:", error);
    });
  }

  return (
    <div>
      <p className="continue-p">--Or continue with--</p>
      <div
        style={{ display: "flex", justifyContent: "center", cursor: "pointer" }}
        onClick={googleLogin}
      >
        <img src={googleIcon} width={"20%"} alt="Google Sign In" />
      </div>
    </div>
  );
}

export default SignInwithGoogle;
