// server/index.js
const express = require('express');
const cors = require('cors');
const db = require('./db'); // 引入刚才写的 db.js

const app = express();
const PORT = 3000;

// 允许前端访问后端 (跨域配置)
app.use(cors());
app.use(express.json());

// 🟢 测试接口：看看数据库连没连上
app.get('/test-db', async (req, res) => {
    try {
        // 尝试让数据库做个简单的数学题 1+1
        const [rows] = await db.query('SELECT 1 + 1 AS result');
        res.json({ 
            message: '🎉 恭喜！后端与阿里云数据库连接成功！', 
            result: rows[0].result 
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: '连接失败', error: error.message });
    }
});

// 启动服务器
app.listen(PORT, () => {
    console.log(`\n🚀 服务器已启动！运行在: http://localhost:${PORT}`);
    console.log(`🔗 正在尝试连接数据库... 请在浏览器访问上面的地址/test-db`);
});