import { useState } from 'react';
import { Package, Edit2, Check, X, AlertCircle } from 'lucide-react';
import { blooms, fillers } from '../data/products';

interface InventoryItem {
  name: string;
  price: number;
  stock: {
    manishNagar: number;
    khamla: number;
  };
  availableFrom?: string;
  color?: string;
}

export default function OwnerDashboard() {
  const [activeTab, setActiveTab] = useState<'flowers' | 'fillers'>('flowers');
  const [editingItem, setEditingItem] = useState<string | null>(null);
  const [inventory, setInventory] = useState<InventoryItem[]>([
    ...blooms.map(b => ({
      name: b.name,
      price: b.price,
      stock: { manishNagar: Math.floor(Math.random() * 50) + 10, khamla: Math.floor(Math.random() * 50) + 10 },
      color: b.color
    })),
    ...fillers.map(f => ({
      name: f.name,
      price: f.price,
      stock: { manishNagar: Math.floor(Math.random() * 30) + 5, khamla: Math.floor(Math.random() * 30) + 5 },
      color: f.color
    }))
  ]);

  const getStockStatus = (stock: number) => {
    if (stock === 0) return { label: 'Out of Stock', color: 'text-red-600 bg-red-50' };
    if (stock < 10) return { label: 'Low Stock', color: 'text-amber-600 bg-amber-50' };
    return { label: 'In Stock', color: 'text-green-600 bg-green-50' };
  };

  const updateStock = (name: string, shop: 'manishNagar' | 'khamla', value: number) => {
    setInventory(inventory.map(item =>
      item.name === name
        ? { ...item, stock: { ...item.stock, [shop]: Math.max(0, value) } }
        : item
    ));
  };

  const updatePrice = (name: string, value: number) => {
    setInventory(inventory.map(item =>
      item.name === name ? { ...item, price: Math.max(0, value) } : item
    ));
  };

  const setAvailableFrom = (name: string, date: string) => {
    setInventory(inventory.map(item =>
      item.name === name ? { ...item, availableFrom: date } : item
    ));
  };

  const filteredItems = activeTab === 'flowers'
    ? inventory.filter(item => blooms.some(b => b.name === item.name))
    : inventory.filter(item => fillers.some(f => f.name === item.name));

  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-5 lg:px-10 pt-8 sm:pt-12 lg:pt-16 w-full overflow-x-hidden">
      <div className="mb-8">
        <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl text-primary mb-2">Owner Dashboard</h1>
        <p className="text-sm sm:text-base text-foreground/70">Manage inventory, prices, and availability</p>
      </div>

      {/* Tabs */}
      <div className="flex gap-2 mb-6 border-b border-border">
        <button
          onClick={() => setActiveTab('flowers')}
          className={`petal-btn px-4 py-2.5 text-xs tracking-[0.15em] uppercase transition-all ${
            activeTab === 'flowers' ? 'bg-primary text-primary-foreground' : 'text-foreground/70 hover:text-primary'
          }`}
        >
          Flowers
        </button>
        <button
          onClick={() => setActiveTab('fillers')}
          className={`petal-btn px-4 py-2.5 text-xs tracking-[0.15em] uppercase transition-all ${
            activeTab === 'fillers' ? 'bg-primary text-primary-foreground' : 'text-foreground/70 hover:text-primary'
          }`}
        >
          Fillers & Foliage
        </button>
      </div>

      {/* Inventory Table */}
      <div className="border border-border overflow-x-auto">
        <table className="w-full">
          <thead className="bg-secondary/20 border-b border-border">
            <tr>
              <th className="text-left px-4 py-3 text-xs tracking-[0.2em] uppercase text-muted-foreground">Item</th>
              <th className="text-left px-4 py-3 text-xs tracking-[0.2em] uppercase text-muted-foreground">Price</th>
              <th className="text-left px-4 py-3 text-xs tracking-[0.2em] uppercase text-muted-foreground">Manish Nagar</th>
              <th className="text-left px-4 py-3 text-xs tracking-[0.2em] uppercase text-muted-foreground">Khamla</th>
              <th className="text-left px-4 py-3 text-xs tracking-[0.2em] uppercase text-muted-foreground">Available From</th>
              <th className="text-left px-4 py-3 text-xs tracking-[0.2em] uppercase text-muted-foreground">Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredItems.map((item) => {
              const manishStatus = getStockStatus(item.stock.manishNagar);
              const khamlaStatus = getStockStatus(item.stock.khamla);
              const isEditing = editingItem === item.name;

              return (
                <tr key={item.name} className="border-b border-border last:border-0 hover:bg-secondary/5">
                  <td className="px-4 py-3">
                    <div className="flex items-center gap-3">
                      {item.color && (
                        <div
                          className="w-6 h-6 rounded-full border border-border"
                          style={{ backgroundColor: item.color }}
                        />
                      )}
                      <span className="font-display text-sm sm:text-base">{item.name}</span>
                    </div>
                  </td>
                  <td className="px-4 py-3">
                    {isEditing ? (
                      <input
                        type="number"
                        defaultValue={item.price}
                        onBlur={(e) => updatePrice(item.name, Number(e.target.value))}
                        className="w-20 border border-border px-2 py-1 text-sm"
                      />
                    ) : (
                      <span className="text-sm">₹{item.price}</span>
                    )}
                  </td>
                  <td className="px-4 py-3">
                    <div className="flex items-center gap-2">
                      {isEditing ? (
                        <input
                          type="number"
                          defaultValue={item.stock.manishNagar}
                          onBlur={(e) => updateStock(item.name, 'manishNagar', Number(e.target.value))}
                          className="w-16 border border-border px-2 py-1 text-sm"
                        />
                      ) : (
                        <>
                          <span className="text-sm">{item.stock.manishNagar}</span>
                          <span className={`text-[10px] px-2 py-0.5 rounded ${manishStatus.color}`}>
                            {manishStatus.label}
                          </span>
                        </>
                      )}
                    </div>
                  </td>
                  <td className="px-4 py-3">
                    <div className="flex items-center gap-2">
                      {isEditing ? (
                        <input
                          type="number"
                          defaultValue={item.stock.khamla}
                          onBlur={(e) => updateStock(item.name, 'khamla', Number(e.target.value))}
                          className="w-16 border border-border px-2 py-1 text-sm"
                        />
                      ) : (
                        <>
                          <span className="text-sm">{item.stock.khamla}</span>
                          <span className={`text-[10px] px-2 py-0.5 rounded ${khamlaStatus.color}`}>
                            {khamlaStatus.label}
                          </span>
                        </>
                      )}
                    </div>
                  </td>
                  <td className="px-4 py-3">
                    {isEditing ? (
                      <input
                        type="date"
                        defaultValue={item.availableFrom || ''}
                        onBlur={(e) => setAvailableFrom(item.name, e.target.value)}
                        className="border border-border px-2 py-1 text-sm"
                      />
                    ) : (
                      <span className="text-xs text-muted-foreground">
                        {item.availableFrom || '—'}
                      </span>
                    )}
                  </td>
                  <td className="px-4 py-3">
                    {isEditing ? (
                      <button
                        onClick={() => setEditingItem(null)}
                        className="petal-btn w-8 h-8 border border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                      >
                        <Check className="w-4 h-4" />
                      </button>
                    ) : (
                      <button
                        onClick={() => setEditingItem(item.name)}
                        className="petal-btn w-8 h-8 border border-border text-muted-foreground hover:border-primary hover:text-primary"
                      >
                        <Edit2 className="w-4 h-4" />
                      </button>
                    )}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      {/* Summary Cards */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-8">
        <div className="border border-border p-4">
          <p className="text-xs tracking-[0.2em] uppercase text-muted-foreground mb-2">Total Items</p>
          <p className="font-display text-3xl text-primary">{inventory.length}</p>
        </div>
        <div className="border border-border p-4">
          <p className="text-xs tracking-[0.2em] uppercase text-muted-foreground mb-2">Low Stock Alerts</p>
          <p className="font-display text-3xl text-amber-600">
            {inventory.filter(item => item.stock.manishNagar < 10 || item.stock.khamla < 10).length}
          </p>
        </div>
        <div className="border border-border p-4">
          <p className="text-xs tracking-[0.2em] uppercase text-muted-foreground mb-2">Out of Stock</p>
          <p className="font-display text-3xl text-red-600">
            {inventory.filter(item => item.stock.manishNagar === 0 || item.stock.khamla === 0).length}
          </p>
        </div>
        <div className="border border-border p-4">
          <p className="text-xs tracking-[0.2em] uppercase text-muted-foreground mb-2">Total Value</p>
          <p className="font-display text-3xl text-primary">
            ₹{inventory.reduce((sum, item) => sum + (item.price * (item.stock.manishNagar + item.stock.khamla)), 0).toLocaleString()}
          </p>
        </div>
      </div>

      {/* Info Box */}
      <div className="mt-8 p-4 sm:p-6 border border-primary/30 bg-primary/5">
        <div className="flex gap-3">
          <AlertCircle className="w-5 h-5 text-primary shrink-0 mt-0.5" />
          <div>
            <p className="font-display text-lg text-primary mb-2">Inventory Management</p>
            <p className="text-sm text-foreground/70 leading-relaxed">
              Click the edit icon to modify prices and stock levels. Items marked as "Out of Stock" will be hidden from customers until you update the stock or set an "Available From" date. Changes are saved automatically.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
