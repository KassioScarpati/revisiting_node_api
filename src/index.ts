import app from './app';

const port = process.env.PORT ?? 3000;

// tslint:disable:no-console
app.listen(port, () => console.log(`http://localhost:${port}`));
