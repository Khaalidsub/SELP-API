import {Schema} from "mongoose";

export function autoPopulateAllFields(schema: Schema) {
  var paths = "";

  //checks every schema field path
  schema.eachPath(function process(pathname: string, schemaType: any) {
    //if path is the id of the document, no need to check
    if (pathname == "_id") return;
    // if (pathname === "likedPosts") $log.info("YOOO", schemaType.options, pathname);
    //if the field path has an option "ref", add it in the paths
    if (schemaType.options.ref) paths += " " + pathname;
  });

  schema.pre("find", handler);
  schema.pre("findOne", handler);
  schema.pre("findById", handler);
  //acts like a loop, it will populate all the field paths that have the option "ref"
  //TODO : fix the password for users
  function handler(next: any) {
    this.populate(paths);
    next();
  }
}
