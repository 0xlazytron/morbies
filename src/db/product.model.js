module.exports = (mongoose) => {
    const dbModel = mongoose.model(
        "product",
        mongoose.Schema(
            {
                product_name: { type: String, default: "" },
                price_sol: { type: String, default: "0" },
                price_puff: { type: String, default: "0" },
                total_count: { type: String, default: "0" },
                sell_count: { type: String, default: "0" },
                category_id: { type: String, default: "0" },
                product_image: { type: String, default: "0" }
            },
            { timestamps: true }
        )
    );
    return dbModel;
};
