var getName= function(employee)
{
    
    return employee.firstName;
}


d3.select("ol")
.selectAll("li")
.data(employees)
.enter()
.append("li")
.text(getName);
