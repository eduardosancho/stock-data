const today = () => {
  const date = new Date();
  const day = date.getDate();
  const month = date.getMonth() + 1;
  const year = date.getFullYear();
  if (month < 10 && day < 10) return `${year}-0${month}-0${day - 1}`;
  if (month < 10 && day > 10) return `${year}-0${month}-${day - 1}`;
  if (month > 10 && day < 10) return `${year}-${month}-0${day - 1}`;
  return `${year}-${month}-${day - 1}`;
};

export default today;
