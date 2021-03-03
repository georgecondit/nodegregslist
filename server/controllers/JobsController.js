import express from "express";
import BaseController from "../utils/BaseController";
import { jobsService} from "../services/JobsService"


export class JobsController extends BaseController {

    constructor() {
        super("api/jobs"),
        this.router
        .get("", this.getAll)
        .get("/:id", this.findById)
        .post("", this.create)
        .put("/:id", this.edit)
        .delete("/:id", this.delete)

    }
    async getAll(req, res, next) {
    try {
        let jobs = await jobsService.getAll()
        res.send(jobs);
        
    }catch (error) {
        next(error)
        }
    }
    async findById(req, res, next) {
      try {
         res.send(await jobsService.findById(req.params.id))
      } catch (error) {
        next(error)
      }
    }


    async create(req, res, next){
        try {
          let job = await jobsService.create(req.body)
          res.send(job)
        } catch (error) {
              next(error)
        }
    }
    async edit(req, res, next) {
        try {
          res.send(await jobsService.edit(req.params.id, req.body))
        } catch (error) {
              next(error)
        }
      }

      async delete(req, res, next) {
        try {
          res.send(await jobsService.delete(req.params.id))
        } catch (error) {
          next(error)
        }
      }

}