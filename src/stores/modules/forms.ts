import type { Module } from 'vuex'
import type { RootState } from '@/stores'
import type { Form } from '@/types/form'

export interface FormsState {
  forms: Record<string, Form>
}

export const formsModule: Module<FormsState, RootState> = {
  state: (): FormsState => ({
    forms: {
      authorization: {
        title: 'Авторизация',
        fields: [
          {
            label: 'Почта',
            id: 'email',
            name: 'email',
            type: 'email',
            required: true,
            placeholder: 'Введите email',
          },
          {
            label: 'Пароль',
            id: 'password',
            name: 'password',
            type: 'password',
            required: true,
            placeholder: 'Введите пароль',
          },
          { label: 'Запомнить меня', id: 'remember', name: 'remember', type: 'checkbox' },
        ],
        onSubmit: (e) => console.log(e),
      },
      registration: {
        title: 'Регистрация',
        fields: [
          {
            id: 'name',
            name: 'name',
            label: 'ФИО',
            type: 'text',
            required: true,
            placeholder: 'Введите ФИО',
          },
          {
            id: 'gender',
            name: 'gender',
            label: 'Пол',
            type: 'select',
            required: true,
            options: ['Мужской', 'Женский'],
          },
          {
            id: 'email',
            name: 'email',
            label: 'Email',
            type: 'email',
            required: true,
            placeholder: 'Введите email',
          },
          {
            id: 'password',
            name: 'password',
            label: 'Пароль',
            type: 'password',
            required: true,
            placeholder: 'Введите пароль',
          },
          {
            id: 'confirmPassword',
            name: 'confirmPassword',
            label: 'Повторите пароль',
            type: 'password',
            required: true,
            placeholder: 'Введите пароль снова',
          },
          {
            id: 'info',
            name: 'info',
            label: 'О себе',
            type: 'textarea',
            required: true,
            placeholder: 'Расскажите о себе',
            rows: 5,
          },
          {
            id: 'accept',
            name: 'accept',
            label: 'Я даю добро на обработку своих персональных данных',
            type: 'checkbox',
            required: true,
            placeholder: 'Введите пароль снова',
          },
        ],
        onSubmit: (e) => console.log(e),
      },
      profile: {
        title: 'Изменение данных о себе',
        fields: [
          {
            id: 'name',
            name: 'name',
            label: 'Имя',
            type: 'text',
            required: true,
            placeholder: 'Введите ФИО',
          },
          {
            id: 'email',
            name: 'email',
            label: 'Email',
            type: 'email',
            required: true,
            placeholder: 'Введите Email',
          },
          {
            id: 'info',
            name: 'info',
            label: 'О себе',
            type: 'textarea',
            required: true,
            placeholder: 'Расскажите о себе',
            rows: 5,
          },
        ],
        onSubmit: (e) => console.log(e),
      },
    } satisfies Record<string, Form>,
  }),
}
