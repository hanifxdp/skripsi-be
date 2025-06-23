const path = require('path');
const yaml = require('yamljs');
const swaggerUi = require('swagger-ui-express');

const swaggerPath = path.join(__dirname, '../docs/swagger.yaml');
const swaggerDocument = yaml.load(swaggerPath);

// Ini ngembaliin middleware, bukan langsung export JSON
const getSwaggerHandler = () => {
    return (req, res, next) => {
        const protocol = req.headers['x-forwarded-proto'] || 'http';
        const host = req.headers['host'];

        // Clone document agar gak overwrite
        const doc = JSON.parse(JSON.stringify(swaggerDocument));
        doc.servers = [
            {
                url: `${protocol}://${host}/api/v1`,
                description: 'Dynamic host',
            },
        ];

        swaggerUi.setup(doc)(req, res, next);
    };
};

module.exports = {
    swaggerUi,
    swaggerHandler: getSwaggerHandler,
};
