export const method = function helloWorld() {
  document.body.innerHTML = 'Hello World!'
}

export const getView = () => {
  return {
    name: 'helloWorld',
    title: 'Hello world!',
    description: 'Say hi to the world!'
  }
}

export default {
  method,
  getView
}