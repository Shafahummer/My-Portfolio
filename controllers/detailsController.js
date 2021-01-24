const About = require('../models/about')

exports.getAbout = (req, res) => {
    About.find().exec((err, about) => {
        if (err) {
            return res.json({
                error: "No details found!"
            })
        }
        res.json({ about })
    })
}

exports.addAbout = (req, res) => {
    const { about } = req.body;
    if (!about) {
        return res.json({ error: "Please add about details..." });
    }

    About.find().exec((err, addedAbout) => {
        if (err) {
            return res.json({
                error: "No details found!"
            })
        }
        if (addedAbout.length === 0) {
            const newAbout = new About({ about })
            newAbout.save((err, result) => {
                if (err) {
                    console.log("ERROR-->", err);
                    return res.json({
                        error: "Not able to save about details!"
                    })
                }
                res.json({
                    message: "About details added successfully...",
                    result
                })
            })
        } else {
            About.updateMany(
                { $set: { about: about } },
                (err, result) => {
                    if (err) {
                        return res.json({
                            error: "Cannot update about details"
                        })
                    }
                    res.json({ message: "About details updated successfully..." })
                }
            )
        }
    })
}
