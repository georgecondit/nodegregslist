import { dbContext } from "../db/DbContext"
import {BadRequest} from "../utils/Errors"

class JobsService{


    async getAll() {
        return await dbContext.Jobs.find()
    }

    async create(newJob){
        return await dbContext.Jobs.create(newJob)
    }
    async delete(id) {
        return await dbContext.Jobs.findByIdAndDelete(id)
      }
    async find(query = {}) {
        return await dbContext.Jobs.find(query)
      }

      
    async edit(id, body) {
        return await dbContext.Cars.findByIdAndUpdate(id, body, { new: true })
      }
    
    async findById(id) {
          const job = await dbContext.Jobs.findById(id)
          if (!job) {
          throw new BadRequest("Invalid Id");
        }
        return job;
      }

}   

export const jobsService = new JobsService()