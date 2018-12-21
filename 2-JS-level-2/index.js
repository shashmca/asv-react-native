





//-----------------------------------------------------
// generator function
//-----------------------------------------------------


function* eat() {
    console.log("start eating..");
    let rice = yield "give me rice"
    console.log("thanks for rice " + rice);
    let sambar = yield "give me sambar";
    console.log("thanks for sambar " + sambar);
    let omlet = yield "give me omlet";
    return `yummy - ${rice} , ${sambar} with ${omlet}`
}
