export const fetchRegister = function(success){
  $.ajax({
    method: "GET",
    url: "/api/register",
    success,
    error: () => console.log('error')
  })
}

export const saveItem = (item, success) => {
  $.ajax({
    method: 'POST',
    url: '/api/register',
    data: item,
    success
  });
};
