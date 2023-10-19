let employees = [
    ['Jaylee Macy', 'marketing'],
    ['John Smith', 'management'],
    ['Blossom Hartley', 'design'],
    ['Austin Carpenter', 'marketing'],
    ['Joan Knowles', 'development'],
    ['Sally Nunez', 'management'],
    ['Laurel Ward', 'development'],
    ['Lark Simon', 'marketing'],
    ['Jane Stone', 'management'],
    ['Courtney Olson', 'development'],
];


let newDev = []

employees.forEach((item) => {
    if (item[1] === 'development') {
        newDev.push(item)
    }
})

newDev.forEach((item) => { console.log(item[0], item[1]) })



