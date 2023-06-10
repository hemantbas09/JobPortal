import jobs from '../Controller/jobController'

//Search by using the job:
exports.searchJobs = (req, res) => {
    const { query } = req.query;

    if (!query) {
        return res.status(400).json({
            message: 'Query parameter is required'
        });
    }

    const searchTerm = query.toLowerCase();
    const searchdJobs = jobs.filter(job =>
        job.title.toLowerCase().includes(searchTerm)
    );

    res.json(searchdJobs);
};
