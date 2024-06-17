import express from 'express';
const app = express();
const port = 3000;

app.post('/kata1', (req, res) => {
    if (req.body.red === undefined || req.body.green === undefined || req.body.blue === undefined) {
        throw new Error('RED, GREEN and BLUE must be defined');
    }
    res.status(200).json(kata1(req.body.red, req.body.green, req.body.blue));
});

const kata1 = (red: number, green: number, blue: number ) => {
    if (red > 255 || red < 0) {
        throw new Error('RED must be between 0 and 255');
    }
    if (green > 255 || green < 0) {
        throw new Error('GREEN must be between 0 and 255');
    }
    if (blue > 255 || blue < 0) {
        throw new Error('BLUE must be between 0 and 255');
    }
    const redHex = red.toString(16).padStart(2, '0').slice(-2).toUpperCase();
    const greenHex = green.toString(16).padStart(2, '0').slice(-2).toUpperCase();
    const blueHex = blue.toString(16).padStart(2, '0').slice(-2).toUpperCase();

    return `#${redHex}${greenHex}${blueHex}`
}

app.listen(port, () => {
    return console.log(`resultado de Kata 1 con 145 R, 42 G, 200 B es: ${kata1(145, 42, 200)}`);
});
