import axios from "axios";
import { apiBaseUrl } from "../constants";

const getDiagnosis = async (diagnosisCode: string) => {
    const { data } = await axios.get(
      `${apiBaseUrl}/diagnoses/${diagnosisCode}`
    );
  
    return data;
}

// eslint-disable-next-line import/no-anonymous-default-export
export default {
    getDiagnosis
  };  

