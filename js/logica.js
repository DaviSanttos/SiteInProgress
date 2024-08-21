const main = document.querySelector('main')
const section = document.querySelector('section')

function enviarForm(form){
  let { nome, tel, email, data, estadoCivil } = form 

  const article = document.createElement('article')
  article.setAttribute('id', 'dadosEnviados')

  const h1 = document.createElement('h1')
  h1.textContent = 'Dados Recebidos com sucesso!'

  const labelNome = document.createElement('label')
  labelNome.textContent = `Nome: ${nome.value}`

  const labelTel = document.createElement('label')
  labelTel.textContent = `Telefone: ${tel.value}`

  const labelEmail = document.createElement('label')
  labelEmail.textContent = `Email: ${email.value}`

  const labelData = document.createElement('label')
  labelData.textContent = `Data Nascimento: ${data.value}`

  const labelEstadoCivil = document.createElement('label')
  labelEstadoCivil.textContent = `Estado Civil: ${estadoCivil.value}`

  section.textContent = ''

  article.appendChild(h1)
  article.appendChild(labelNome)
  article.appendChild(labelTel)
  article.appendChild(labelEmail)
  article.appendChild(labelData)
  article.appendChild(labelEstadoCivil)

  section.appendChild(article)

  main.appendChild(section)
}