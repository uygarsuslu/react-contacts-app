// contacts altındaki index.js'e import ettik //
import { useState } from 'react'

function List({ contacts }) {

  // input'a veri girildiği anda state yazma işlemi //
  const [filterText, setFilterText] = useState("")

  // filter her döndüğünde array'in her bir elemanını bize vericek //
  // object.keys = fullname ve phonenumber'ı ayırır //
  // some = herhangi biri eğer şarta uyuyorsa o kaydı gösterir //
  // includes = filtertext value'nin içinde var mı yok mu? // 
  const filtered = contacts.filter((item) => {
    return Object.keys(item).some((key) =>
      item[key]
        .toString()
        .toLowerCase()
        .includes(filterText.toLowerCase())
    )
  })

  return (
    <div>

      <input
        placeholder='Filter Contact'
        value={filterText}
        onChange={(e) => setFilterText(e.target.value)}
      />

      <ul className='list'>
        {
          filtered.map((contact, i) => (
            <li key={i}>
              <span>
                {contact.fullname}
              </span>
              <span>
                {contact.phone_number}
              </span>
            </li>))

          //   contacts.map((contact, i) => (
          // <li key={i}>{contact.fullname} </li>))
        }
      </ul>

      <p>
        Total Contacts ({filtered.length})
      </p>

    </div>
  )
}
export default List