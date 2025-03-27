// What will be logged at 1st and 2nd run? - First step, Second step / - First step, Too large number, error

function test(num) {
    try {
        console.log("First step");
        if (num > 5) {
            throw new Error("Too large number!");
        }
        console.log("Second step");
    } catch (error) {
        console.log("Error:", error.message);
    }
}

test(3);
test(7);