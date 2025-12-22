console.log("Video 39")


const myClass = ["Xuan", "Mai", "Long", "Ha"];

console.log(myClass, myClass.length)


for (i = 0; i < myClass.length; i++) {
    console.log("i =", i, "Value =", myClass[i])
}

console.log("============")
myClass.forEach((value, index) => {
    console.log("index =", index, "value =", value)
})