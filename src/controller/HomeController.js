const HomeController = {
  getHome: (req, res) => {
    res.status(200).json({
      message: "API WEB SHOP v1",
    });
  },
};

export default HomeController;
