import { dbContext } from "../db/DbContext"
import {BadRequest} from "../utils/Errors"

class CarsService{


  async getAll() {
      return await dbContext.Cars.find()
    }

     
  async create(newCar){
      return await dbContext.Cars.create(newCar)
    }

  async edit(id, body) {
      return await dbContext.Cars.findByIdAndUpdate(id, body, { new: true })
    }

  async delete(id) {
      return await dbContext.Cars.findByIdAndDelete(id)
    }

  async find(query = {}) {
      return await dbContext.Cars.find(query)
    }
    
  async findById(id) {
      const car = await dbContext.Cars.findById(id)
      if (!car) {
      throw new BadRequest("Invalid Id");
    }
      return car;
    }
    
}   

export const carsService = new CarsService()