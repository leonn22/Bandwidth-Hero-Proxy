const pick = require("../util/pick");
const fetch = require("node-fetch");
const shouldCompress = require("../util/shouldCompress");
const compress = require("../util/compress");

const DEFAULT_QUALITY = 40;
exports.handler = async (event, context) => {
    console.error("Reached here...");
    let { url } = event.queryStringParameters;
    const { jpeg, bw, l } = event.queryStringParameters;

    if(!url) {
        url = "https://raw.githubusercontent.com/redox-os/orbtk-assets/main/screenshots/orbtk-calculator-macos.png";
    }
    try {
        url = JSON.parse(url);  // if simple string, then will remain so 
    } catch { }

    if (Array.isArray(url)) {
        url = url.join("&url=");
    }

    // by now, url is a string
    url = url.replace(/http:\/\/1\.1\.\d\.\d\/bmi\/(https?:\/\/)?/i, "http://");

    const webp = !jpeg;
    const grayscale = bw != 0;
    const quality = parseInt(l, 10) || DEFAULT_QUALITY;
    

    return {
        statusCode: 200,
        body: JSON.stringify({event, context})
    }
}
