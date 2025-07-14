// qr_food_order_backend/menuData.js

const menuCategories = [
    {
        id: 1,
        name: 'เนื้อสไลด์', // หมวดหมู่ 1
        items: [
            { id: 101, name: 'เนื้อโคขุนสไลด์', price: 69.00, img: 'beef_sliced.jpg' },
            { id: 102, name: 'เนื้อหมูสันคอสไลด์', price: 59.00, img: 'pork_sliced.jpg' },
            { id: 103, name: 'เนื้อไก่สไลด์', price: 49.00, img: 'chicken_sliced.jpg' }
        ]
    },
    {
        id: 2,
        name: 'ลูกชิ้นและไส้กรอก', // หมวดหมู่ 2
        items: [
            { id: 201, name: 'ลูกชิ้นปลา', price: 30.00, img: 'fishball.jpg' },
            { id: 202, name: 'ลูกชิ้นกุ้ง', price: 35.00, img: 'shrimpball.jpg' },
            { id: 203, name: 'ไส้กรอกไก่', price: 40.00, img: 'chicken_sausage.jpg' }
        ]
    },
    {
        id: 3,
        name: 'ผักสด', // หมวดหมู่ 3
        items: [
            { id: 301, name: 'ผักกาดขาว', price: 20.00, img: 'cabbage.jpg' },
            { id: 302, name: 'เห็ดเข็มทอง', price: 25.00, img: 'enoki_mushroom.jpg' },
            { id: 303, name: 'ข้าวโพดอ่อน', price: 20.00, img: 'baby_corn.jpg' }
        ]
    },
    {
        id: 4,
        name: 'เส้นและข้าว', // หมวดหมู่ 4
        items: [
            { id: 401, name: 'เส้นมาม่า', price: 15.00, img: 'mama_noodles.jpg' },
            { id: 402, name: 'วุ้นเส้น', price: 18.00, img: 'glass_noodles.jpg' },
            { id: 403, name: 'ข้าวสวย', price: 10.00, img: 'rice.jpg' }
        ]
    },
    {
        id: 5,
        name: 'อาหารทะเล', // หมวดหมู่ 5
        items: [
            { id: 501, name: 'กุ้งสด', price: 80.00, img: 'fresh_shrimp.jpg' },
            { id: 502, name: 'ปลาหมึก', price: 70.00, img: 'squid.jpg' },
            { id: 503, name: 'หอยแมลงภู่', price: 60.00, img: 'mussels.jpg' }
        ]
    },
    {
        id: 6,
        name: 'เครื่องดื่ม', // หมวดหมู่ 6
        items: [
            { id: 601, name: 'น้ำเปล่า', price: 20.00, img: 'water.jpg' },
            { id: 602, name: 'ชาเขียว', price: 35.00, img: 'green_tea.jpg' },
            { id: 603, name: 'น้ำอัดลม', price: 30.00, img: 'soda.jpg' }
        ]
    },
    {
        id: 7,
        name: 'ของหวาน', // หมวดหมู่ 7
        items: [
            { id: 701, name: 'ไอศกรีม', price: 45.00, img: 'ice_cream.jpg' },
            { id: 702, name: 'ผลไม้รวม', price: 50.00, img: 'fruit_platter.jpg' }
        ]
    }
];

module.exports = menuCategories;