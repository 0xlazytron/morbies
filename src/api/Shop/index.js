const express = require('express');
const router = express.Router();
const shopping = require("./controller");

router.post('/init_table', shopping.initTable);
router.get('/get_products', shopping.getProducts);
router.get('/get_categories', shopping.getCategories);

router.get('/get_orders', shopping.getOrders);
router.get('/get_orders_with_product', shopping.getOrdersWithProduct);
router.post('/insert_order', shopping.insertOrder);
router.post('/update_order', shopping.updateOrder);
router.post('/delete_order', shopping.deleteOrder);
// import data
router.get('/import_data', shopping.importData);


module.exports = router;
