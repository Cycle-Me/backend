import Story from "../models/Story.js";

router.post("/insertrecord", multer.single('attachment'), imgUpload.uploadToGcs, async (req, res) => {
    try {
        const name = req.body.name;
        const amount = req.body.amount;
        const date = req.body.date;
        const notes = req.body.notes;
        let imageUrl = '';

        if (req.file && req.file.cloudStoragePublicUrl) {
            imageUrl = req.file.cloudStoragePublicUrl;
        }

        const newStory = await Story.create({
            name,
            amount,
            date,
            notes,
            attachment: imageUrl
        });

        res.send({ message: "Insert Successful" });
    } catch (error) {
        console.error(error);
        res.status(500).send({ message: "Internal server error" });
    }
});
