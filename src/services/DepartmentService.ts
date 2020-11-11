import {Service as Servicing, Inject} from "@tsed/di";
import {$log} from "@tsed/common";
import {MongooseModel} from "@tsed/mongoose";

import {Service} from "./Service";
import {Department} from "../models/Department";

@Servicing()
export class DepartmentService extends Service<Department> {
  constructor(@Inject(Department) public model: MongooseModel<Department>) {
    super(model);
    $log.info(model);
  }
}
