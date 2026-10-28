// Datos mockeados del demo — NO son datos reales del sistema.
// Este archivo es estático y no se conecta a ningún backend.

const DEMO_DATA = {
  categories: [
    { id: 1, name: 'Electrónica' },
    { id: 2, name: 'Ferretería' },
    { id: 3, name: 'Oficina' },
    { id: 4, name: 'Limpieza' },
  ],
  units: [
    { id: 1, name: 'Unidad', abbr: 'u' },
    { id: 2, name: 'Kilogramo', abbr: 'kg' },
    { id: 3, name: 'Litro', abbr: 'L' },
  ],
  currencies: ['CUP', 'MLC', 'USD', 'EUR'],
  exchangeRates: {
    'MLC': 1.0,
    'USD': 1.0,
    'EUR': 1.08,
    'CUP': 0.04, // 1 CUP = 0.04 USD (ejemplo)
  },
  products: [
    { id: 1, sku: 'ELE-001', name: 'Cable USB-C 1m', category: 1, unit: 1, barcode: '7501234567890', minStock: 10, stock: 45, prices: { CUP: 150, MLC: 3.75, USD: 3.75, EUR: 3.47 } },
    { id: 2, sku: 'ELE-002', name: 'Cargador 20W', category: 1, unit: 1, barcode: '7501234567891', minStock: 5, stock: 12, prices: { CUP: 800, MLC: 20.00, USD: 20.00, EUR: 18.52 } },
    { id: 3, sku: 'FER-001', name: 'Tornillo 1/4" x 2"', category: 2, unit: 2, barcode: '7501234567892', minStock: 100, stock: 2500, prices: { CUP: 2, MLC: 0.05, USD: 0.05, EUR: 0.046 } },
    { id: 4, sku: 'FER-002', name: 'Martillo 500g', category: 2, unit: 1, barcode: '7501234567893', minStock: 3, stock: 8, prices: { CUP: 600, MLC: 15.00, USD: 15.00, EUR: 13.89 } },
    { id: 5, sku: 'OFC-001', name: 'Resma papel A4', category: 3, unit: 1, barcode: '7501234567894', minStock: 5, stock: 22, prices: { CUP: 1200, MLC: 30.00, USD: 30.00, EUR: 27.78 } },
    { id: 6, sku: 'OFC-002', name: 'Bolígrafo azul', category: 3, unit: 1, barcode: '7501234567895', minStock: 20, stock: 150, prices: { CUP: 25, MLC: 0.625, USD: 0.625, EUR: 0.58 } },
    { id: 7, sku: 'LIM-001', name: 'Detergente líquido 1L', category: 4, unit: 3, barcode: '7501234567896', minStock: 10, stock: 3, prices: { CUP: 180, MLC: 4.50, USD: 4.50, EUR: 4.17 } },
    { id: 8, sku: 'LIM-002', name: 'Trapo de microfibra', category: 4, unit: 1, barcode: '7501234567897', minStock: 15, stock: 40, prices: { CUP: 80, MLC: 2.00, USD: 2.00, EUR: 1.85 } },
  ],
};
