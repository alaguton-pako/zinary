import Button from "../Components/Button";
import { useNavigate } from "react-router-dom";

const LandingPage = () => {
  const navigate = useNavigate();
  const goToDashBoard = () => {
    navigate("/dashboard");
  };
  return (
    <div className="bg-yellow-200 p-6 h-screen flex justify-center items-center w-full">
      <div className="flex flex-col gap-2">
        <div>this is the LandingPage</div>
        <div>
          <Button onClick={goToDashBoard} variant={"green"} size={"lg"}>
            Go to dashboard
          </Button>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
