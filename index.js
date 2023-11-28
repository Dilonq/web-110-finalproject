import OpenAI from "./node_modules/openai";

const openai = new OpenAI({ apiKey: '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' });

async function send(msg) {
    const completion = await openai.chat.completions.create({
        messages: [{ role: "system", content: msg }],
        model: "gpt-3.5-turbo",
    });
    
    return completion.choices[0].message.content;
}

async function main(){
    let msg = await send("generate the body tag for a sample website");
    document.getElementById('out').innerHTML = msg;
    console.log(msg);
}

console.log("beer");
// await main();