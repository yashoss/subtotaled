export const fetchRegister = function(success){
  $.ajax({
    method: "GET",
    url: "/api/register",
    success,
    error: () => console.log('error')
  })
}
