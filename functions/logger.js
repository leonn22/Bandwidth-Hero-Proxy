const DEFAULT_QUALITY = 40;

exports.handler = async (event, context) => {
    return {
        statusCode: 200,
        body: JSON.stringify({DEFAULT_QUALITY, event, context})
    }
}
