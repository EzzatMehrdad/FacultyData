var getName=function(employees)
{
    return employees.firstName;
}

d3.select("body")
  .selectAll("h1")
  .data(employees)
  .enter()
  .append("h1")
  .text(getName); 