import {
  Control,
  FieldValues,
  Path,
  RegisterOptions,
  UseFormRegister,
} from 'react-hook-form'

export type FormInputProps<TFormValues extends FieldValues> = {
  control?: Control<TFormValues, any>
  name: Path<TFormValues>
  rules?: RegisterOptions
  register?: UseFormRegister<TFormValues>
}
