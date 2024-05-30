const bannerSchema = require("./model");

module.exports = {
  createBanner: async (req, res) => {
    try {
      const { name, desc } = req.body;
      const photo = req.files.map((file) => {
        let correctedPath =
          process.env.IMAGE_URL + file.path.replace(/\\/g, "/");
        return correctedPath;
      });
      const banner = await bannerSchema({
        name: name,
        desc: desc,
        photo: photo,
      }).save();
      res.status(201).json({ banner });
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  },
  getBanners: async (req, res) => {
    try {
      const banners = await bannerSchema.find();
      res.status(200).json({ banners });
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  },
  getBanner: async (req, res) => {
    const { id } = req.params;
    try {
      const banners = await bannerSchema.findById(id);
      res.status(200).json({ bannners });
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  },
};
