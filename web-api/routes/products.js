var express = require('express');
var router = express.Router();
const ProductController = require('../components/products/controller');
const checkToken = require('../components/helper/CheckToken');
const {checkRoleAdmin, checkRoleManager} = require('../components/helper/CheckRole');
const Validation = require('../components/helper/Validation');

// lấy danh sách sản phẩm
// http://localhost:1996/products?page=1&limit=10
//method : GET

router.get('/', async (req, res, next) => {
    try {
        const { page, limit } = req.query;
        const products = await ProductController.getAllProduct(page, limit);
        return res.status(200).json(products);
    } catch (error) {
        console.log("error: ", error);
        return res.status(500).json({ message: error.message });
    }
});
// lấy danh sách sản phẩm theo danh mục
// http://localhost:1996/products?page=1&limit=10
//method : GET

router.get('/list/:id_cate', async (req, res, next) => {
    try {
        const { id_cate } = req.params;
        const products = await ProductController.getListProduct(id_cate);
        return res.status(200).json(products);
    } catch (error) {
        console.log("error: ", error);
        return res.status(500).json({ message: error.message });
    }
});
// lấy 1 sản phẩm theo id
// http://localhost:1996/products
// method: GET
router.get('/:id', async (req, res, next) => {
    try {
        const { id } = req.params;
        const product = await ProductController.getProductById(id);
        return res.status(200).json(product);
    } catch (error) {
        console.log("error: ", error);
        return res.status(500).json({ message: error.message });
    }
});
// thêm mới 1 sản phẩm
// http://localhost:1996/products
// method: POST
router.post('/', [checkToken,checkRoleManager, Validation.validateProduct ], async (req, res, next) => {
    try {
        const { body, user } = req;
        await ProductController.addProduct(body, user._id, user._id);
        return res.status(200).json({ message: 'Thêm mới thành công' });
    } catch (error) {
        console.log("error: ", error);
        return res.status(500).json({ message: error.message });
    }
});
// update 1 product
// http://localhost:1996/products/
// method : PUT
router.put('/edit/:id', [checkToken,checkRoleManager, Validation.validateProduct ], async (req, res, next) => {
    try {
        const { id } = req.params;
        const { body, user } = req;
        await ProductController.updateProduct(id, body, user._id);
        return res.status(200).json({ message: 'cập nhật thành công' });
    } catch (error) {
        console.log("error: ", error)
        return res.status(500).json({ message: error.message });
    }
});
// delete 1 sản phẩm
// http://localhost:1996/products/
//method : DELETE
router.delete('/:id',[checkToken,checkRoleAdmin], async (req, res, next) => {
    try {
        const { id } = req.params;
        await ProductController.deleteProduct(id);
        return res.status(200).json({ status : true });
    } catch (error) {
        console.log("error: ", error)
        return res.status(500).json({ status : false });
    }
});
// tìm sản phẩm theo từ khóa
// http://localhost:1996/products/search/name?
//method : GET
router.get('/search/name', async (req, res, next) => {
    try {
        const { keyword } = req.query;
        const products = await ProductController.searchProduct(keyword);
        return res.status(200).json({ products });
    } catch (error) {
        console.log("error: ", error)
        return res.status(500).json({ messeage: error.message });
    }
});

module.exports = router;