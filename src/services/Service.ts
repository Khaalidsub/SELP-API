import {MongooseModel} from "@tsed/mongoose";
import {$log} from "@tsed/common";
import {IModel, IService} from "../util/interface";

export class Service<T extends IModel> implements IService<T> {
  constructor(public model: MongooseModel<T>) {}
  async add(obj: T) {
    try {
      $log.info("info", obj);
      const doc = new this.model(obj);
      await doc.save();
      return doc;
    } catch (error) {
      $log.error(error);
    }
  }
  async find({query}: any) {
    try {
      const list = await this.model.find(query).exec();

      return list;
    } catch (error) {
      $log.error(error);
    }
  }
  async findOne({query}: any) {
    try {
      const list = await this.model.findOne(query).exec();

      return list;
    } catch (error) {
      $log.error(error);
    }
  }

  async findById(id: string) {
    try {
      const doc = await this.model.findById(id);

      return doc;
    } catch (error) {
      $log.error(error);
    }
  }
  async set(obj: T) {
    try {
      const prevDoc = await this.findById(obj._id);
      const updateDoc = await prevDoc?.updateOne(obj);
      $log.info(updateDoc);
      return updateDoc;
    } catch (error) {
      $log.error(error);
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
