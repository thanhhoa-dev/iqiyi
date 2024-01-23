

const validateProduct = (req, res, next) => {
    try {
        const {name, price, quantity } = req.body;
        if (!name) throw new Error('Tên sản phẩm không đc để trống');
        if (!price) throw new Error('giá sản phẩm không đc để trống');
        if (!quantity) throw new Error('số lượng sản phẩm không đc để trống');
        if (isNaN(price)) throw new Error('giá sản phẩm phải là số');
        if (isNaN(quantity)) throw new Error('số lượng sản phẩm phải là số');
        if (price <=0 ) throw new Error('giá sản phẩm phải lớn hơn 0');
        if (quantity <=0 ) throw new Error('số lượng sản phẩm phải lớn hơn 0');
        next();
    } catch (error) {
        console.log("validateProduct error:", error);
        return res.status(500).json({ error : error.message });
    }
}

module.exports = { validateProduct };