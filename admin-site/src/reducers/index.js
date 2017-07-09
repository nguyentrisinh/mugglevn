/**
 * Created by Asus on 4/24/2017.
 */
import {combineReducers} from 'redux'
import CompanyData from './Company/company-data'
import CompanyStatistics from './Company/Statistics'
import AllCompanyData from './Company/all-company-data'
import JobData from './Job/job-data'
import AllJobData from './Job/all-job-data'
import JobSkillData from './JobSkill/jobskill-data'
import UserData from './User/user-data'
import AllUserData from './User/all-user-data'
import SkillData from './Skill/skill-data'
import AllSkillData from './Skill/all-skill-data'
import ReviewData from './Review/review-data'

// Constant
import ConstantData from './Constant/Constant'

const allReducers = combineReducers({
    company_data: CompanyData,
    company_statistics: CompanyStatistics,
    all_company_data: AllCompanyData,
    job_data: JobData,
    all_job_data: AllJobData,
    jobskill_data: JobSkillData,
    user_data: UserData,
    all_user_data: AllUserData,
    skill_data: SkillData,
    all_skill_data: AllSkillData,
    review_data: ReviewData,
    constant_data: ConstantData,
});

export default allReducers;
