// Method 1
// export default function html([first, ...nonTemplateStr], ...str) {
//     let result
//     result = str.reduce((initial, cur) => {
//         return [...initial, Array.isArray(cur) ? cur.join(' ') : (cur === false ? '' : cur), nonTemplateStr.shift()]
//     }, [first])
//     return result.join('')
// }

// Method 2
export default function html([first, ...nonTemplateStr], ...str) {
    return str.reduce(
        (initial, cur) => initial.concat(cur, nonTemplateStr.shift()), [first]
    )
    .filter(x => x && x !== true || x === 0)
    .join('')
}
