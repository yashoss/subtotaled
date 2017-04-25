export const Constants = {
  REQUEST_REGISTER: "REQUEST_REGISTER",
  RECEIVE_REGISTER: "RECEIVE_REGISTER"
};

export const requestRegister = () => ({
  type: Constants.REQUEST_REGISTER
});

export const receiveRegister = register => ({
  type: Constants.RECEIVE_REGISTER,
  register
});
