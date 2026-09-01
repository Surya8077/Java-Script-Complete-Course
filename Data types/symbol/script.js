var mailid = Symbol("email");

person = {
    Name: "Surya",
    Age: 19,
    [mailid]: "suryadahiya80597@gmail.com"
}

console.log(person.Name);
console.log(person.Age);
console.log(person.mailid);