const mysql = require('mysql2');
const pool = mysql.createPool({
    host: '你的阿里云公网IP', // 🔴 别忘了换回你的 IP！
    user: 'zqz_user',
    password: 'User2025@Zqzx',
    database: 'zqz_memory',
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
});
module.exports = pool.promise();