import express from "express";
import BaseController from "../utils/BaseController";
import { housesService } from "../services/HousesService"

export class HousesController extends BaseController {
    constructor() {
        super("api/houses")
        this.router
        .get("", this.getAll)
        .get("/:id", this.findById)
        .post("", this.create)
        .put("/:id", this.edit)
        .delete("/:id", this.delete)
    }
    async create(req, res, next){
        try {
            let house = await housesService.create(req.body)
            res.send(house)
        } catch (error) {
                next(error)
        }
    }
    async getAll(req, res, next) {
        try {
            let house = await housesService.getAll()
            res.send(house);
        }catch (error) {
                next(error)
            }
        }
    async findById(req, res, next) {
        try {
            res.send(await housesService.findById(req.params.id))
        } catch (error) {
                next(error)
            }
          }
    
    async edit(req, res, next) {
        try {
            res.send(await housesService.edit(req.params.id, req.body))
        } catch (error) {
                next(error)
        }
      }

      async delete(req, res, next) {
        try {
          res.send(await housesService.delete(req.params.id))
        } catch (error) {
          next(error)
        }
      }

}