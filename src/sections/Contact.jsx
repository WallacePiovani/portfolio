import { useRef, useState } from "react"
import emailjs from '@emailjs/browser';

const Contact = () => {

    const formRef = useRef();
    const [loading, setLoading] = useState(false)
    const [form, setForm] = useState({
        name: '',
        email: '',
        message: ''
    })

    const handleChange = ({target:{name, value}}) =>{
        setForm({...form, [name]: value})
    }
    const handleSubmit = async (e) =>{
        e.preventDefault()
        setLoading(true)

        try{
            await emailjs.send(
                'service_jnwbepo',
                'template_fwe6oxa',
                {
                    from_name: form.name,
                    to_name:'Wallace',
                    from_email: form.email,
                    to_email: 'whspiovani@gmail.com',
                    message: form.message
                },
                'g-USmrBswcUdk-juD'
            )
        setLoading(false)
        alert('Mensagem enviada com sucesso!')
        setForm({
            name: '',
            email: '',
            message: ''
        })
        } catch (error){
            setLoading(false)
            console.log(error);
            alert('Algo deu errado, tente novamente!')
        }

    }

    return (
        <section className="sm:px-10 px-5 my-24" id="contact">
            <div className="relative min-h-screen flex items-center justify-center flex-col">
                <img src="/assets/terminal.png" alt="terminal background" className="absolute inset-0 min-h-screen"/>
                <div className="max-w-xl relative z-10 sm:px-10 px-5 mt-12">
                    <h3 className="sm:text-4xl text-3xl font-semibold text-gray_gradient">Entre em contato</h3>
                    <p className="text-lg text-white-600 mt-3"></p>
                    <form ref={formRef} onSubmit={handleSubmit} className="mt-12 flex flex-col space-y-7">
                        <label className="space-y-3">
                            <span className="text-lg text-white-600">Nome completo</span>
                            <input
                                type="text"
                                name = "name"
                                value = {form.name}
                                onChange={handleChange}
                                required
                                className="w-full bg-black-300 px-5 py-2 min-h-14 rounded-lg placeholder:text-white-500 text-lg text-white-800 shadow-black-200 shadow-2xl focus:outline-none;"
                                placeholder="Maria de Lourdes"
                            />
                        </label>
                        <label className="space-y-3">
                            <span className="text-lg text-white-600">E-mail</span>
                            <input
                                type="email"
                                name = "email"
                                value = {form.email}
                                onChange={handleChange}
                                required
                                className="w-full bg-black-300 px-5 py-2 min-h-14 rounded-lg placeholder:text-white-500 text-lg text-white-800 shadow-black-200 shadow-2xl focus:outline-none;"
                                placeholder="marialourdes@gmail.com"
                            />
                        </label>
                        <label className="space-y-3">
                            <span className="text-lg text-white-600">Sua mensagem</span>
                            <textarea
                                name = "message"
                                value = {form.message}
                                onChange={handleChange}
                                required
                                rows={8}
                                className="w-full bg-black-300 px-5 py-2 min-h-14 rounded-lg placeholder:text-white-500 text-lg text-white-800 shadow-black-200 shadow-2xl focus:outline-none;"
                                placeholder="Olá, gostaria de te contratar..."
                            />
                        </label>
                        <button type="submit" disabled={loading} className="bg-black-500 px-5 py-2 min-h-12 rounded-lg shadow-black-200 shadow-2xl flex justify-center items-center text-lg text-white gap-3">
                            {loading ? 'Enviando...' : 'Enviar mensagem'}
                        </button>
                    </form>
                </div>
            </div>
        </section>
    )
}

export default Contact