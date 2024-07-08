import { ref } from 'vue'
import { defineStore } from 'pinia'
import * as Yup from 'yup'
import Request from '@/utils/request'
import { useForm } from 'vee-validate'
import { useLoginStore } from '@/modules/auth/stores/login'

const request = new Request()

const clientSchema = Yup.object({
  type_document: Yup.string().required(),
  document: Yup.string().required(),
  name: Yup.string().required(),
  address: Yup.string().required(),
  email: Yup.string().required()
})

interface Client {
  id: number
  name: string
  address: string
}

export const useClientStore = defineStore('client', () => {
  const { errors, defineField, handleSubmit } = useForm({
    validationSchema: clientSchema
  })
  const [type_document, type_documentProps] = defineField('type_document')
  const [document, documentProps] = defineField('document')
  const [name, nameProps] = defineField('name')
  const [address, addressProps] = defineField('address')
  const [email, emailProps] = defineField('email')

  const clients = ref<Client[]>([])
  const client = ref<Client>({
    id: 0,
    name: '',
    address: ''
  })
  const disabled = ref<boolean>(false)

  const saveClient = handleSubmit(async (values) => {
    const login = useLoginStore()
    disabled.value = true
    const response = await request.post('client/', {
      type_document: values.type_document,
      document: values.document,
      name: values.name,
      address: values.address,
      email: values.email,
      user_id: login.userId
    })
    disabled.value = false
    if (!response.success) {
      return false
    }
    type_document.value = ''
    document.value = ''
    name.value = ''
    address.value = ''
    email.value = ''
    listClients()
    return true
  })

  const listClients = async () => {
    clients.value = []
    const response = await request.get('client/')
    if (!response.success) {
      return false
    }
    clients.value = response.data
  }

  return {
    type_document,
    type_documentProps,
    document,
    documentProps,
    name,
    nameProps,
    address,
    addressProps,
    email,
    emailProps,
    errors,
    clients,
    client,
    disabled,
    saveClient,
    listClients
  }
})

export const useOrderStore = defineStore('order', () => {
  const disabled = ref<boolean>(false)

  const saveOrder = async (client_id:number,products:any) => {
    disabled.value = true
    const response = await request.post('order/',{
      client_id: client_id,
      products: products
    })
    disabled.value = false
    if (!response.success) {
      return false
    }
    return true
  }

  return { disabled, saveOrder }
})
