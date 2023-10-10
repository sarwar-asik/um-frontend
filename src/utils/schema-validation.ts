// export const getErrorMessageByPropertyName = (
//   obj: Record<string, any>,
//   propertyPath: string
// ) => {
//   const properties = propertyPath.split(".");
//   let value = obj;
//   for (let prop of properties) {
//     if(value[prop]){
//         value =value[prop]
//     }
//     else {
//         return undefined
//     }
//   }
//   return value.message
// };


export const getErrorMessageByPropertyName = (obj: Record<string, any>, propertyPath: string) => {
  // let obj = errors
  // let propertyPath = "admin.name.firstName"
  // let propertyPath = "admin.name.lastName"
  
  const properties = propertyPath.split(".")
  // ["admin","name","firstName"]
  // ["admin","name","lastName"]
  let value = obj;

  for (let prop of properties) {
      if (value[prop]) {
         value = value[prop]
      }
      else {
          return undefined;
      }
  }

  return value.message;


}