import diagnoseData from '../../data/diagnoses';

const getEntries = () => {
  return diagnoseData;
};

const getOne = (code: string) => {
  return diagnoseData.find((d) => (d.code === code));
};

const addDiagnose = () =>{
  return null;
};

export default {
  getEntries,
  addDiagnose,
  getOne
};