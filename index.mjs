import OpenAI from "openai";

// const OpenAI = require('./node_modules/openai');

async function send(ai, msg) {
    const completion = await ai.chat.completions.create({
        messages: [{ role: "system", content: msg }],
        model: "gpt-3.5-turbo",
    });
    
    return completion.choices[0].message.content;
}

async function main(){
    // const { OpenAI } = require('openai');

    let keyA = "sk-bLL3jzup4PJqf4Y6vbvcT";
    let keyB = "3BlbkFJ9J4LxxKZBntoN3wVbtcO";

    const openai = new OpenAI({ apiKey: keyA.concat('', keyB) });

    let msg = await send(openai, "generate the body tag for a sample website");
    document.getElementById('out').innerHTML = msg;
    console.log(msg);
}

window.addEventListener("load", (event) => {
    main();
});