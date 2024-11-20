// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import InventorySummary from './components/inventory components/InventorySummary';
import InventoryTable from './components/inventory components/InventoryTable';
import NewInventoryItem from './components/newInventorypage/NewInventoryItem';
import Sidebar from './components/Sidebar'; // Import Sidebar

function App() {
    return (
        <Router>
            <div style={{ display: 'flex', height: '100vh' }}> {/* Ensure full height */}
                <Sidebar /> {/* Add Sidebar */}
                <div style={{ flex: 1 }}> {/* Ensure content takes remaining space */}
                    <Routes>
                        <Route path="/" element={<Layout />}> {/* Use Layout component */}
                            <Route index element={<InventorySummary />} />
                            <Route path="inventory" element={<InventoryTable />} />
                            <Route path="new-inventory-item" element={<NewInventoryItem />} />
                        </Route>
                    </Routes>
                </div>
            </div>
        </Router>
    );
}

export default App;
