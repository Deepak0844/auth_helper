import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import CheckCircleRoundedIcon from "@mui/icons-material/CheckCircleRounded";

export function Activate() {
  const { token } = useParams();
  const [data, setData] = useState();
  useEffect(() => {
    axios
      .get(`https://backendurlshortener.herokuapp.com/${token}`)
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err.response.data);
      });
  }, []);
  return (
    <div className="successMessage">
          <CheckCircleRoundedIcon color="success" style={{ fontSize: "55px" }} />
      <h2>Congratulations</h2>
      <p>
      Your account has been activated successfully.
      </p>
    </div>
  );
}
