function college(col) {
    if (col != undefined) {
        document.getElementById('uni').innerHTML = col + ', Class of 2027'
    } else {
        console.error("You did not properly call the college function")
    }
}
college("Lorem Ipsum University")