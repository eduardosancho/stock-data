const today = () => {
  const date = new Date();
  const day = date.getDate();
  const month = date.getMonth() + 1;
  const year = date.getFullYear();
  if (month < 10 && day < 10) return `${year}-0${month}-0${day}`;
  if (month < 10 && day > 10) return `${year}-0${month}-${day}`;
  if (month > 10 && day < 10) return `${year}-${month}-0${day}`;
  return `/${year}-${month}-${day}`;
};

export default today;
