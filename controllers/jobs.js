const JobPost = require('../models/jobs/job_post');
const JobLocation = require('../models/jobs/job_location');
const Company = require('../models/jobs/company');
// job type
const JobPostType = require('../models/jobs/job_post_type');
const JobType = require('../models/jobs/job_type');
// job requirement
const JobPostRequirement = require('../models/jobs/job_post_requirement');
const JobRequirementType = require('../models/jobs/job_requirement_type');

JobPost.belongsTo(Company, { as: 'company', foreignKey: 'company_id' })
JobPost.hasOne(JobLocation, { as: 'location', foreignKey: 'job_post_id' })

JobPost.hasOne(JobPostType, { as: 'post_type', foreignKey: 'job_post_id' });
JobType.hasOne(JobPostType, { as: 'job_type', foreignKey: 'job_type_id' });
JobPostType.belongsTo(JobType, { as: 'job_type', foreignKey: 'job_type_id' });

JobPost.hasMany(JobPostRequirement, { as: 'post_requirement', foreignKey: 'job_post_id' });
JobPostRequirement.belongsTo(JobRequirementType, { as: 'requirement_type', foreignKey: 'job_requirement_type_id' });

exports.getJobs = (req, res, next) => {
  JobPost.findAll({
      where: {
        company_id: 6
      },
      include: [
        { model: Company, as: 'company' },
        { model: JobLocation, as: 'location' },
        { model: JobPostType, 
          as: 'post_type',
          include: [{
            model: JobType,
            as: 'job_type'
          }]
        },
        { model: JobPostRequirement,
          as: 'post_requirement',
          include: [{
            model: JobRequirementType,
            as: 'requirement_type',
            where: { name: ['Education', 'Experience'] }
          }
        ]
        }
      ]
    })
      .then(result => {
        res.status(200).json({
          status: 'Success',
          result
        });
      });
};