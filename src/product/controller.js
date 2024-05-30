const ProductSchema = require("./model");

module.exports = {
  createProduct: async (req, res) => {
    try {
      const { name, desc, price,  category } = req.body;
      const photos = req.files.map((file) => {
        let correctedPath =
         file.path.replace(/\\/g, "/");
        return correctedPath;
      });
      const product = await ProductSchema({
        name: name,
        desc: desc,
        price: price,
        // salePrice: salePrice,
        category: category,
        photos: photos,
      }).save();
      res.status(201).json({ product });
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  },
  getProducts: async (req, res) => {
    try {
      const products = await ProductSchema.find().populate("category");
      res.status(200).json({ products });
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  },
  getProductByCategory: async (req, res) => {
    const { category } = req.params;
    try {
      const products = await ProductSchema.find({category: category});
      res.status(200).json({ products });
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  },
  getProduct: async (req, res) => {
    const { id } = req.params;
    try {
      const products = await ProductSchema.findById(id).populate("category");
      res.status(200).json({ products });
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  },
};
