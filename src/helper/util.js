const getBackgroundColor = (status) => {
  if (status === 'selected') {
    return 'green';
  } else if (status === 'rejected') {
    return 'red';
  } else {
    return 'yellow';
  }
};
export { getBackgroundColor };
