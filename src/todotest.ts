import Todo from './model/Todo'

const sendMails = new Todo({
    todo: 'Send the mails',
    location: 'from the office',
    asd: 'aosdijf'
})

const saveMailsTodo = async () => {
    await sendMails.save()
}

saveMailsTodo()