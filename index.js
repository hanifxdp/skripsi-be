const app = require('./src/app');
const { connectDB } = require('./src/utils/database');

const port = process.env.PORT || 8000;

connectDB().then(() => {
    app.listen(port, () => {
        console.log(`Server running on http://localhost:${port}`);
    });
});
