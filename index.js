const sharp = require('sharp');
const log4js = require("log4js");
const logger = log4js.getLogger();
logger.level = "debug";

sharp({
    create: {
        width: 48, height: 48, channels: 4, background: {r: 255, g: 0, b: 0, alpha: 0.5}
    }
})
    .png()
    .toBuffer()
    .then(data => logger.info(data))
    .catch(err => logger.error(err));
