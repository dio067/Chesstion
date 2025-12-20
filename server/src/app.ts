import express from 'express';
import cors from 'cors';


const app = express()
app.use(cors({
    origin: true,
    credentials: true
}))
app.use(express.json())

app.get('/api/health', async (_req, res) => {
    res.json(
        {
            ok: true,
            service: 'chesstion-api'
        }
    )
})

export default app;