

var getPhoto = function(employee)
{
  return employee.photo
} 

d3.select("body")
.append("div")
.selectAll("img")
.data(employees)
.enter()
.append("div")
.append("img")
.attr("src", getPhoto)





