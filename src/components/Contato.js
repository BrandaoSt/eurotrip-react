import React from 'react'
import emailjs from '@emailjs/browser'

const Contato = () => {


    const serviceID = 'service_jdbw8zz';
    const templateID = 'template_e4udane';
    const userID = 'user_SSLfmmXgVv6jLC0TuXdAg';

    

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm(serviceID, templateID, e.target, userID)
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
    };

    return (
        <div className='contato'>
            <div className='text-center'>
                <h1>Contato</h1>
                <p>Para orçamentos, reservas, agendamentos, alterações de reserva e informações.</p>
            </div>
            <div className='container'>
                <form onSubmit={sendEmail}>
                    <div className='row'>
                        <div className='col-md-6 col-xs-12 '>
                            <div className='line'></div>
                            {/* NOME INPUT */}
                            <div className='text-center'>
                                <input type='text' className='form-control' placeholder='Nome' name='nome' />
                                <div className='line'></div>
                            </div>
                            {/* TELEFONE INPUT */}
                            <div className='text-center'>
                                <input type='text' className='form-control' placeholder='Telefone' phone='tefefone' />
                                <div className='line'></div>
                            </div>
                            {/* EMAIL INPUT */}
                            <div className='text-center'>
                                <input type='email' className='form-control' placeholder='E-mail' name='email' />
                                <div className='line'></div>
                            </div>
                            {/* ASSUNTO INPUT */}
                            <div className='text-center'>
                                <input type='text' className='form-control' placeholder='Assunto' name='assunto' />
                                <div className='line'></div>
                            </div>
                        </div>
                        <div className='col-md-6 col-sm-12'>
                            {/* MENSAGEM */}
                            <div className='text-center'>
                                <textarea type='text' className='form-control' placeholder='Digite aqui a sua mensagem' name='mensagem'></textarea>
                                <div className='line'></div>
                            </div>
                            <button type="submit" value='Send' className='btn-contato contact-btn'>ENVIAR</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Contato