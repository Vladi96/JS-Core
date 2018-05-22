function f(input) {
    let output ='<?xml version="1.0" encoding="UTF-8"?> \n<quiz>'
    for (let i = 0; i < input.length; i+=2) {
        output +=`\n<question>
${input[i]}
  </question>
  <answer>
    ${input[i+1]}
  </answer>`
    }
    output +='\n</quiz>'
    console.log(output)

}
f(['Who was the forty-second president of the U.S.A.?',
    'William Jefferson Clinton'])