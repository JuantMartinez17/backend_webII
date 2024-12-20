import cors from 'cors'
const ACCEPTED_ORIGINS = [
  'http://localhost:8080',
  'http://localhost:3000',
  'http://localhost:3006',
  'http://localhost:3007',
  'http://localhost:8080',
  'https://programacionwebii-production.up.railway.app/',
  'https://frabjous-sopapillas-eaf717.netlify.app'
]
export const corsMiddleware = ({ acceptedOrigins = ACCEPTED_ORIGINS } = {}) => cors({
  origin: (origin, callback) => {
    if (acceptedOrigins.includes(origin)) {
      return callback(null, true)
    }
    if (!origin) {
      return callback(null, true)
    }
    return callback(new Error('Not allowed by CORS  '))
  }
})
