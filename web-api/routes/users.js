var express = require('express');
var router = express.Router();
const UserController = require('../components/users/controller');
const checkToken = require('../components/helper/CheckToken');
const { checkRoleManager, checkRoleAdmin } = require('../components/helper/CheckRole');

/**
 * đăng ký tài khoản
 * method: POST
 * http://localhost:1996/users/register
 */
router.post('/register', async (req, res, next) => {
    try {
        const { body } = req;
        await UserController.register(body);
        return res.status(200).json({ message: 'Đăng ký thành công' });
    } catch (err) {
        return res.status(500).json({ error: err.message });
    }
})
// forget password
router.post('/forgetpassword', async (req, res, next) => {
    try {
        const { body } = req;
        await UserController.forgetpassword(body);
        return res.status(200).json({ message: 'gửi mã thành công' });
    } catch (err) {
        return res.status(500).json({ error: err.message });
    }
})
router.post('/resetpassword', async (req, res, next) => {
    try {
        const { body } = req;
        await UserController.resetpassword(body);
        return res.status(200).json({ message: 'đổi mật khẩu thành công' });
    } catch (err) {
        return res.status(500).json({ error: err.message });
    }
})
/**
 * đăng nhập tài khoản
 * method: POST
 * http://localhost:1996/users/verify/:id
 */
router.post('/verify/:id', async (req, res, next) => {
    try {
        const { id } = req.params;
        const result = await UserController.verify(id);
        return res.status(200).json({ status: result });
    } catch (err) {
        return res.status(500).json({ status: false, error: err.message });
    }
})
/**
 * xác thực tài khoản
 * method: POST
 * http://localhost:1996/users/login
 */
router.post('/login', async (req, res, next) => {
    try {
        const { body } = req;
        const user = await UserController.login(body);
        return res.status(200).json({ user });
    } catch (err) {
        return res.status(500).json({ error: err.message });
    }
})
/**
 * xem danh sach tai khoan
 * method: get
 * http://localhost:1996/users/list-user
 */
router.get('/list-user', [checkToken, checkRoleAdmin], async (req, res, next) => {
    try {
        const users = await UserController.getListUser();
        return res.status(200).json(users);
    } catch (error) {
        return res.status(500).json({ error: err.message });
    }
})

router.get('/test-token', [checkToken, checkRoleManager], async (req, res, next) => {
    try {
        console.log('......', req.user);
        return res.status(200).json({ message: 'test thanh cong' });
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
})
// lấy 1 user theo id
// http://localhost:1996/users/:id
// method: GET
router.get('/:id', async (req, res, next) => {
    try {
        const { id } = req.params;
        const product = await UserController.getUserById(id);
        return res.status(200).json(product);
    } catch (error) {
        console.log("error: ", error);
        return res.status(500).json({ message: error.message });
    }
});
// update 1 user
// http://localhost:1996/users/edit/:id
// method : PUT
router.put('/edit/:id', [checkToken, checkRoleAdmin], async (req, res, next) => {
    try {
        const { id } = req.params;
        const { body } = req;
        const user = await UserController.updateUser(id, body);
        return res.status(200).json({ user });
    } catch (error) {
        console.log("error: ", error)
        return res.status(500).json({ message: error.message });
    }
});
// app check tài khoản đã có chưa
router.post('/isExist', async (req, res, next) => {
    try {
        const { body } = req;
        const x = await UserController.isExist(body);
        return res.status(200).json({ message: x });
    } catch (err) {
        console.log("error: ", err);
        return res.status(500).json({ message: error.message });
    }
})
// change password
router.post('/changepass/:id', async (req, res, next) => {
    try {
        const { id } = req.params;
        const { body } = req;
        const x = await UserController.changePass(id, body);
        return res.status(200).json({ message: x });
    } catch (err) {
        console.log("error: ", err);
        return res.status(500).json({ message: error.message });
    }
})

module.exports = router;
