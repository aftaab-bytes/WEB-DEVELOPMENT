let person={
    name:"aftaab",
    age :18,
    work:'student'
}
for(let key in person)
    {
        console.log("OBJECT: ",key)
        // console.log(person.key)//wrong method
        console.log(person[key]);
    }