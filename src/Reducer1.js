let obj = {
  title: "",
  author: "",
  description: "",
};
const reducer1 = (state = obj, action) => {
  switch (action.type) {
    case "getData":
      return (state = action.payload);

    default:
      return state;
  }
};

export default reducer1;
