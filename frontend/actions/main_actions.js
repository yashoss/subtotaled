export const Constants = {
  REQUEST_REGISTER: "REQUEST_REGISTER",
  RECEIVE_REGISTER: "RECEIVE_REGISTER",
  ADD_ITEM: "ADD_ITEM",
  RECEIVE_ITEM: "RECEIVE_ITEM",
  DELETE_ITEM: "DELETE_ITEM",
  REPLACE_REGISTER: "REPLACE_REGISTER"
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
  item
})

export const receiveItem = item => ({
  type: Constants.RECEIVE_ITEM,
  item
})

export const deleteItem = id => ({
  type: Constants.DELETE_ITEM,
  id
})

export const replaceRegister = register => ({
  type: Constants.REPLACE_REGISTER,
  register
});
