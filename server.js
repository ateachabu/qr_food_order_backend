// qr_food_order_backend/server.js

const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const axios = require('axios'); // เพิ่มบรรทัดนี้
const menuCategories = require('./menuData');
const printProxyUrl = 'http://YOUR_LOCAL_IP_ADDRESS_OF_COMPUTER:4000/print'; 
// **สำคัญ:** YOUR_LOCAL_IP_ADDRESS_OF_COMPUTER คือ IP Address ของคอมพิวเตอร์ที่รัน Print Proxy
// คุณต้องไปดู IP ของคอมพิวเตอร์ที่รัน Print Proxy ก่อน โดยเปิด Command Prompt แล้วพิมพ์ `ipconfig`
// ตัวอย่าง: ถ้า IP ของคอมพิวเตอร์คุณคือ 192.168.1.52
// ให้เป็น: const printProxyUrl = 'http://192.168.1.52:4000/print';

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
    app.post('/order', (req, res) => {
    const orderData = req.body;
    console.log('Received order:', orderData); // บรรทัดนี้มีอยู่แล้ว

    if (orderData.items.length === 0) {
        return res.status(400).json({ message: 'Order data is empty or invalid.' });
    }

    // *** เพิ่มโค้ดส่วนนี้เพื่อส่งข้อมูลไปที่ Print Proxy ***
    axios.post(printProxyUrl, orderData)
        .then(response => {
            console.log('Print proxy response:', response.data);
            // ถ้าต้องการแสดงข้อความจาก printer proxy ใน Frontend สามารถทำได้ตรงนี้
        })
        .catch(error => {
            console.error('Error sending data to print proxy:', error.message);
            // คุณอาจจะเพิ่มการแจ้งเตือนในกรณีที่พิมพ์ไม่ได้
        });
    // ******************************************************

    res.status(200).json({ message: 'ออเดอร์ได้รับแล้ว จะพิมพ์ใบเสร็จให้คุณค่ะ' }); // บรรทัดนี้มีอยู่แล้ว
});

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