//jQuery ready function
$(() => {

    var User ={
    iD: 0, userName: "Kcorrell", password: "Login", firstName: "Kali", lastName: "Correll",
    phoneNumber: "5132952715", email: "test@email.com", isReviewer: false, isAdmin: false
};

$.ajax({
    method: "POST",
    url:"http://localhost:8080/api/users/",
    data: JSON.stringify(User),
    contentType: "application/json"

})
.done(res => {
    console.log(res);
    getAll();
})
.fail(err => {
    console.error(err);
});

const getAll = () => {
$.getJSON("http://localhost:8080/api/users/")
.done(users => {
    console.log(users);
});
}
console.log("After the getJSON call");
getAll();
})