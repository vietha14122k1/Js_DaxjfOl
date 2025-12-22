console.log("Video 41")


const ages = [10, 20, 19, 24, 31];
const ageX2 = ages.map((value, index) => {
    return value * 2
})
const agesGreatThan18 = ageX2.filter((value, index) => {
    return value > 40
})
console.log(ages)
console.log(ageX2)
console.log(agesGreatThan18)
