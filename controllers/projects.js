const Projects = require('../models/projects')
const multer = require('multer')
const { v4: uuidv4 } = require('uuid');

exports.getProjects = (req, res) => {
    Projects.find().exec((err, project) => {
        if (err) {
            return res.json({
                error: "No details found!"
            })
        }
        res.json({ project })
    })
}

var storage = multer.diskStorage({
    destination: function (req, file, cb) {
        if (file.fieldname === "image") {
            cb(null, 'files/images/')
        } else {
            cb(null, 'files/videos/')
        }
    },
    filename: function (req, file, cb) {
        cb(null, uuidv4() + file.originalname)
    }
})

//middleware
exports.upload = multer({ storage })

exports.addProjects = (req, res) => {
    const { title, description } = req.body;
    if (!title || !description) {
        return res.json({ error: "All fields are mandatory..." });
    }

    Projects.findOne({ title }).then((savedProject) => {
        if (savedProject) {
            return res.json({ error: "Project title already exists!" });
        } else {
            const project = new Projects({
                title: title,
                description: description,
                image: "assets/" + req.files.image[0].path,
                video: "assets/" + req.files.video[0].path,
            });

            project.save((err, result) => {
                if (err) {
                    return res.json({
                        error: "Something wrong!Not able to add data...",
                    });
                }
                res.json({
                    message: "Successfully added...",
                    data: result,
                });
            });
        }
    });
}
