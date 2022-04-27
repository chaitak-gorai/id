const FormatName = (firstName, middleName, lastName) => {
  if (firstName && lastName && middleName) {
    return `${firstName} ${middleName} ${lastName}`;
  }
  if (firstName && lastName) {
    return `${firstName} ${lastName}`;
  }
  if (firstName) {
    return `${firstName}`;
  }
  if (lastName) {
    return `${lastName}`;
  }
  return '';
};
export default FormatName;
