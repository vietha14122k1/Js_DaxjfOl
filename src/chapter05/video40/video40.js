console.log("Video 40")

const scores = [10, 9, 5, 8];
// scores.forEach((value, index) => {
//     console.log("index =", index, "value =", value)
// })


const scorex2 = scores.map((value, index) => {
    return value * 2
})
console.log(scores)
console.log(scorex2)