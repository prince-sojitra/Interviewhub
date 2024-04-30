var CATAGORY = require('./catagory.model')
var SUBCATEGORY = require('../subCatagory/subcatagory.model')
var QUESTIONS = require('../questions/questions.model')

exports.catagoryCreate = async function (req, res, next) {
  try {
    let catagoryData = await CATAGORY.create(req.body)
    res.status(201).json({
      status: "success",
      message: "catagory Create success",
      data: catagoryData
    })
  } catch (error) {
    res.status(404).json({
      status: "fail",
      message: error.message
    })
  }
}

exports.catagoryFind = async function (req, res, next) {
  try {
    if (req.query.search) {
      let catagoryDataSearch = await CATAGORY.find({catagoryName : {$regex : req.query.search , $options : 'i'}})
      res.status(200).json({
        status: "success",
        message: "catagory Search success",
        data: catagoryDataSearch
      }) 
    } else {
      let catagoryData = await CATAGORY.find()
      res.status(200).json({
        status: "success",
        message: "catagory Found success",
        data: catagoryData
      })
    }
  } catch (error) {
    res.status(404).json({
      status: "fail",
      message: error.message
    })
  }
}
exports.catagoryDelete = async (req, res, next) => {
  try {
    const categoryId = req.params.id;

    const questions = await QUESTIONS.find();
    questions.map(async (el) => await QUESTIONS.deleteMany({ subcatagoryID : el.subcatagoryID }))
    await SUBCATEGORY.deleteMany({ catagoryID : categoryId });
    

    await CATAGORY.findByIdAndDelete(categoryId);

    res.status(200).json({
      status: "success",
      message: "Category and its Sub Categories and Question deleted successfully"
    });
  } catch (error) {
    res.status(400).json({
      status: "fail",
      message: error.message
    });
  }
};


exports.catagoryUpdate = async function (req, res, next) {
  try {
    let CatagoryData = await CATAGORY.findByIdAndUpdate(req.params.id, req.body, { new: true })
    res.status(200).json({
      status: "success",
      message: "catagory Update success",
      data: CatagoryData
    })
  } catch (error) {
    res.status(404).json({
      status: "fail",
      message: error.message
    })
  }
}





