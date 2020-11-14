import {MongooseModel} from "@tsed/mongoose";
import {Document} from "mongoose";
import {$log} from "@tsed/common";
import {IModel, IService} from "../util/interface";

export class Service<T extends IModel> implements IService<T> {
  constructor(public model: MongooseModel<T>) {}
  async add(obj: T): Promise<T | null> {
    try {
      $log.info("info", obj);
      const doc = new this.model(obj);
      await doc.save();
      return doc;
    } catch (error) {
      $log.error(error);
      return null;
    }
  }
  async find({query}: any): Promise<T[] | null> {
    try {
      const list = await this.model.find(query).exec();

      return list;
    } catch (error) {
      $log.error(error);
      return null;
    }
  }
  async findOne({query}: any): Promise<T | null> {
    try {
      const document = await this.model.findOne(query).exec();

      return document;
    } catch (error) {
      $log.error(error);
      return null;
    }
  }

  async findById(id: string): Promise<(T & Document) | null> {
    try {
      const doc = await this.model.findById(id);
      if (doc) {
        return doc;
      }

      throw new Error("Data that you want to query does not exist");
    } catch (error) {
      $log.error(error);
      return null;
    }
  }
  async set(obj: T): Promise<boolean> {
    try {
      const prevDoc = await this.findById(obj._id);
      if (prevDoc) {
        await prevDoc.updateOne(obj);
        return true;
      }
      throw new Error("Data that you want to mutate does not exist");
    } catch (error) {
      $log.error(error);
      return false;
    }
  }
  async delete(id: string): Promise<boolean> {
    try {
      await this.model.findByIdAndDelete(id);
      return true;
    } catch (error) {
      $log.error(error);
      return false;
    }
  }
}
