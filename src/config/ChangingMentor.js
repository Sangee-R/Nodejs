import axios from "axios";

const ChangingMentor = async (body) => {
  const result = await axios.post(
     "https://student-mentor-pvfq.onrender.com/assignmentor/modifyMentor",
  );
  return result;
};
export default ChangingMentor;
