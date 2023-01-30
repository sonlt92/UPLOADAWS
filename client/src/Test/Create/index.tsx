// create.component.js

import axios from 'axios'

const Create = () => {
  const onSubmit = () => {
    const obj = {
      name: 'abcv',
      company: 'trinh',
      age: 30,
    }

    console.log(obj)

    axios.post('http://35.77.138.242:4000/persons/add', obj).then((res) => console.log(res.data))
  }

  
  return (
    <div>
      <p>Welcome to Create Component!!</p>
      <button onClick={onSubmit}>Submit</button>
    </div>
  )
}

export default Create
