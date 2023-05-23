var stair=6
var hash="#"
var space=" "
for (let i = 1; i < stair+1; i++) {
    console.log(space.repeat(stair-i)+hash.repeat(i))
}
