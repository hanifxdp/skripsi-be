const swaggerJSDoc = require("swagger-jsdoc");
const swaggerUi = require("swagger-ui-express");
const YAML = require('yamljs');
const fs = require("fs");
const path = require("path");

const files = YAML.load('./src/docs/swagger.yaml')
const swaggerDocument = files   

module.exports = {
    swaggerDocument,
    swaggerUi
};

