module.exports = (mongoose) => {
    const dbModel = mongoose.model(
        "order",
        mongoose.Schema(
            {
                account_id: { type: String, default: "" },
                // product_id: { type: String, default: "" },
                product_count: { type: String, default: "0" },
                shipping_info : {type: String, default: ""},
                status: { type: String, default: "shipping" }, //cart, shipping, complete
                product_id: {type:mongoose.Schema.ObjectId, ref: 'product'}
            },
            { timestamps: true }
        )
    );
    return dbModel;
};
