import express from 'express';
import routes from './routes';

const app = express();

app.use(express.json());
app.use(routes);

app.use((req, res) => {
	const { status, message } = console.console.error(err);
	res.status(status || 500).json({ message })
})

export default app;