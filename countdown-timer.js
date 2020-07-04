
function submitForm() {
    console.log("hello world");
    let name = $("#name-input").text();
    let date = $("date").text();
    let time = $("time").text();
    console.log(`${name} ${date} ${time}`);
    $("#name-text").text(name);
}