const getBackgroundColor = (status) => {
  if (status === 'shortlisted') {
    return 'green';
  } else if (status === 'rejected') {
    return 'red';
  } else {
    return 'yellow';
  }
};
export { getBackgroundColor };
