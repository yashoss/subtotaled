export const Constants = {
  REQUEST_REGISTER: "REQUEST_REGISTER",
  RECEIVE_REGISTER: "RECEIVE_REGISTER",
  ADD_ITEM: "ADD_ITEM"
};

export const requestRegister = () => ({
  type: Constants.REQUEST_REGISTER
});

export const receiveRegister = register => ({
  type: Constants.RECEIVE_REGISTER,
  register
});

export const addItem = item => ({
  type: Constants.ADD_ITEM,
  register
})
