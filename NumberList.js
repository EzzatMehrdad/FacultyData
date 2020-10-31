var getName= function(employee)
{
    
    return employee.firstName;
}


d3.select("body")
.append("div")
.selectAll("ol")
.data(employees)
.enter()
.append("ol")
.append("li")
.style("type", 1)
.text(getName);
