import {dbContext} from "../db/DbContext"
import {BadRequest} from "../utils/Errors"

class HousesService{

    async getAll() {
        return await dbContext.Houses.find()
    }

    async create(newHouse){
        return await dbContext.Houses.create(newHouse)
    }

    async edit(id, body) {
        return await dbContext.Houses.findByIdAndUpdate(id, body, { new: true })
      }

   async delete(id) {
       return await dbContext.Houses.findByIdAndDelete(id)
     }
   async find(query = {}) {
       return await dbContext.Houses.find(query)
     }
   
   async findById(id) {
       const car = await dbContext.Houses.findById(id)
       if (!car) {
         throw new BadRequest("Invalid Id");
       }
       return car;
     }
}

export const housesService = new HousesService()