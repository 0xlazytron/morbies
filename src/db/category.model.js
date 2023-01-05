module.exports = (mongoose) => {
    const dbModel = mongoose.model(
        "category",
        mongoose.Schema(
            {
                category_title: { type: String, default: "" },
                category_image: { type: String, default: "" },
            },
            { timestamps: true }
        )
    );
    return dbModel;
};
