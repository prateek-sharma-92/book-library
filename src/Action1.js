const dataAPI = (data) => {
  return {
    type: "getData",
    payload: data,
  };
};

export default dataAPI;
