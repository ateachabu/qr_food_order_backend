// qr_food_order_backend/server.js

const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const menuCategories = require('./menuData');

const app = express();
// Port นี้จะถูกกำหนดโดย Cloud Platform (เช่น Render, Heroku)
// เราจะใช้ process.env.PORT เพื่อให้ Cloud Platform กำหนด Port ให้เอง
const port = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// *** ลบบรรทัดนี้ออกแล้ว: app.use(express.static('public')); ***
// Frontend จะถูก Deploy แยกต่างหาก

// API Endpoint สำหรับดึงข้อมูลเมนู
app.get('/menu', (req, res) => {
    console.log('Received request for menu.');
    res.json(menuCategories);
});

// API Endpoint สำหรับรับออเดอร์ (ตอนนี้จะแค่รับและ console.log เท่านั้น)
app.post('/order', (req, res) => {
    const orderData = req.body;
    console.log('Received order:', orderData);

    if (!orderData || !orderData.items || orderData.items.length === 0) {
        return res.status(400).json({ message: 'Order data is empty or invalid.' });
    }

    res.status(200).json({ message: 'ออเดอร์ได้รับแล้ว! (ยังไม่พิมพ์ออกเครื่องปริ้น)' });
});

// เริ่ม Server
app.listen(port, () => {
    console.log(`Backend server listening on port ${port}`);
    console.log(`Open your browser to test: http://localhost:${port}/menu`); // สำหรับทดสอบ Backend โดยตรง
});