import Axios from "axios";

const fetchData = () => {
  return Axios.get("https://api.quicksell.co/v1/internal/frontend-assignment ");
};

export default fetchData;
