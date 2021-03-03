import express from "express";
import BaseController from "../utils/BaseController";
import { carsService } from "../services/CarsService";
import { jobsService } from "../services/JobsService";

export class CarsController extends BaseController {
  constructor() {
    super("api/cars");
    this.router
      .get("", this.getAll)
      .get("/:id", this.findById)
      .post("", this.create)
      .put("/:id", this.edit)
      .delete("/:id", this.delete)
  }
  async create(req, res, next) {
    try {
        let car = await carsService.create(req.body)
        res.send(car);
    } catch (error) {
      next(error);
    }
  }

  async getAll(req, res, next) {
    try {
        let cars = await carsService.getAll()
      res.send(cars);
    } catch (error) {
      next(error);
    }
  }

 async findById(req, res, next) {
   try {
      res.send(await carsService.findById(req.params.id))
   } catch (error) {
     next(error)
   }
 }

  async edit(req, res, next) {
    try {
      res.send(await carsService.edit(req.params.id, req.body))
    } catch (error) {
      next(error)
    }
  }

  async delete(req, res, next) {
    try {
      res.send(await carsService.delete(req.params.id))
    } catch (error) {
      next(error)
    }
  }

}
