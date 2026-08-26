import express from 'express';

import gastosRoutes from './routes/gastos.routes.js';

const app = express();

const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use('/api/v1', gastosRoutes);

app.listen(PORT, () => {
  console.log(`\n✅ Servidor FinContas rodando na porta ${PORT}`);
  console.log(`🌐 Teste os Gastos em: http://localhost:${PORT}/api/v1/gastos`);
});