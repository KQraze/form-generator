export interface SharedAttrs {
  id: string;
  name: string;
  required?: boolean;
  placeholder?: string;
  [key: string]: unknown;
}

export interface InputAttrs<T = InputTypes> extends SharedAttrs {
  type?: T;
}

export interface SelectAttrs extends SharedAttrs {
  options?: string[];
}

export interface TextareaAttrs extends SharedAttrs {
  rows?: number;
  cols?: number;
}

export interface FormField extends InputAttrs<FieldTypes>, SelectAttrs, TextareaAttrs {
  label?: string;
}

export type InputTypes = 'text' | 'password' | 'email'

export type FieldTypes = 'select' | 'checkbox' | 'textarea' | InputTypes

export interface Form {
  title?: string;
  fields?: FormField[];
  onSubmit?: (e: SubmitEvent & { data?: Record<string, unknown> }) => void;
  onReset?: (e: Event) => void;
}
