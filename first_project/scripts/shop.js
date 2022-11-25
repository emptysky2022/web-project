$(function() {
    $("#running").click(function () { 
        // const state = { 'something': $(this).text()}
        // const title = "test something"
        // const url = "something.html"
        // console.log($(this).text())
        // history.pushState(state, title, url)
        location.href = "something.html"
    });
})

// window.onpopstate = function(e){
//     alert("location: " + document.location + ", state: " + JSON.stringify(e.state))
// }