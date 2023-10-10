### in the routes>>

```tsx
import { yupResolver } from "@hookform/resolvers/yup";
<Form submitHandler={onSubmit} resolver={yupResolver(adminSchema)}>

</Form>;
```


#### create a schema in src>schema>admin.ts

```ts 
import * as yup from "yup";


export const adminSchema = yup.object().shape({
  password: yup.string().min(6).max(32).required("password is requires"),
  admin: yup.object().shape({
    name: yup.object().shape({
      firstName: yup.string().required("firstName is required "),
      middleName: yup.string().required("middleName is required "),
      lastName: yup.string().required("lastName is required "),
    }),
    email:yup.string().email().required("email is required"),
    designation:yup.string().required("designation is required"),
    dateOfBirth:yup.string().required("dateOfBirth is required"),
  }),
});

```

#### schema validation src>utils>schema-validation.ts

```ts
export const getErrorMessageByPropertyName = (
  obj: Record<string, any>,
  propertyPath: string
) => {
  const properties = propertyPath.split(".");
  let value = obj;
  for (let prop of properties) {
    if(value[prop]){
        value =value[prop]
    }
    else {
        return undefined
    }
  }
  return value.message
};

```


###  use it in FormInput.ts

```tsx

const errorMessage = getErrorMessageByPropertyName(errors, name);

  console.log(errorMessage, "from FromInput validation");

  return (
    <>
      {label ? label : null}
      <Controller
        control={control}
        name={name}
        render={({ field }) =>
          type === "password" ? (
            <Input.Password
              type={type}
              size={size}
              placeholder={placeholder}
              {...field}
              value={value ? value : field.value}
            />
          ) : (
            <Input
              type={type}
              size={size}
              placeholder={placeholder}
              {...field}
              value={value ? value : field.value}
            />
          )
        }
      />

      <small style={{ color: "red" }}>{errorMessage}</small>
    </>
  );
```