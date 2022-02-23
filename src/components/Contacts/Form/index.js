// contacts altındaki index.js'e import ettik //
import { useState, /*useEffect*/ } from 'react'

// form'a yeni bilgi eklendikten sonra input'ların içini temizlerken kısayol olsun diye ekledik //
const initialFormValues = { fullname: "", phone_number: "" }

// addContact yazarak sayfayı yenilediğim anda o atama işlemini yapacak olan fonksiyonu aldık //
// contacts yazarak eski verilerin üstüne ekleme yapmayı sağlarız //
function Form({ addContact, contacts }) {
    const [form, setForm] = useState(initialFormValues)
    // const [form, setForm] = useState({ fullname: "", phone_number: "" })

    // // form'a yeni bilgi eklendikten sonra input'ların içini temizler // // gerek yok //
    // useEffect(() => {
    //     setForm(initialFormValues)
    // }, [contacts])

    // inputun içeriği değiştiği anda state atamasını yapabilmesi için bir fonksiyon //
    const onChangeInput = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value })
    }

    // butona bastığımız anda ne olacak //
    const onSubmit = (e) => {
        // varsayılanı engelle //
        e.preventDefault()

        //form'a değer girilmezse gönderme //
        if (form.fullname === "" || form.phone_number === "") {
            return false
        }

        // form submit edildiğinde ekleme işlemi //
        addContact([...contacts, form])

        // form'a yeni bilgi eklendikten sonra input'ların içini temizler //
        setForm(initialFormValues)
        // setForm({ fullname: "", phone_number: "" })

        console.log(form);
    }

    return (

        // form'da sayfa yenilenme işlemi olur //
        <form onSubmit={onSubmit}>

            <div>
                <input
                    name="fullname"
                    placeholder='Full Name'
                    value={form.fullname}
                    onChange={onChangeInput}
                />
            </div>

            <div>
                <input
                    name="phone_number"
                    placeholder='Phone Number'
                    value={form.phone_number}
                    onChange={onChangeInput}
                />
            </div>

            <div className='btn'>
                <button>Add</button>
            </div>

        </form>
    )
}
export default Form