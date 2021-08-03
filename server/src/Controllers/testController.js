module.exports.getData = async (req, res, next) => {
    res.send({
        items : [
            'cat1',
            'cat2',
            'cat3',
            'cat4',
        ]
    });
};