const pick = require("../util/pick");
const fetch = require("node-fetch");
const shouldCompress = require("../util/shouldCompress");
const compress = require("../util/compress");

const DEFAULT_QUALITY = 40;
exports.handler = async (event, context) => {
    let { url } = event.queryStringParameters;
    const { jpeg, bw, l } = event.queryStringParameters;

    if (!url) {
        url = "https://www.boringcactus.com/assets/2020-08-21-survey-of-rust-gui-libraries-6.png"
    }

    try {
        url = JSON.parse(url);  // if simple string, then will remain so 
    } catch (err) {
        console.log("Erorr")
    }

    if (Array.isArray(url)) {
        url = url.join("&url=");
    }

    // by now, url is a string
    url = url.replace(/http:\/\/1\.1\.\d\.\d\/bmi\/(https?:\/\/)?/i, "http://");

    const webp = !jpeg;
    const grayscale = bw != 0;
    const quality = parseInt(l, 10) || DEFAULT_QUALITY;

    console.log("Fetching...", url, webp, grayscale, quality);
    // const data = await fetch(url, {
    //     headers: {
    //         ...pick(event.headers, ['cookie', 'dnt', 'referer']),
    //         'user-agent': 'Bandwidth-Hero Compressor',
    //         'x-forwarded-for': event.headers['x-forwarded-for'] || event.ip,
    //         via: '1.1 bandwidth-hero'
    //     }
    //     // timeout: 10000,
    //     // maxRedirects: 5,
    //     // encoding: null,
    //     // strictSSL: false,
    //     // gzip: true,
    //     // jar: true
    // }).then( res => {
    //     if (!res.ok){
    //         return {
    //             statusCode: res.status ?? 302
    //         }
    //     }

    //     return res.text();
    //     // return {
    //     //     data: await res.text(),
    //     //     type: res.headers.get("content-type") || ""
    //     // }
    // })

    // console.log(pick(event.headers, ['cookie', 'dnt', 'referer']))
    const data = ""
    const originSize = data.length ?? 2;
    console.log({originSize});

    return {
        statusCode: 200,
        body: JSON.stringify({event, context})
    }
}
