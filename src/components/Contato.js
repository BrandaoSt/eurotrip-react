import React from 'react'

const Contato = () => {
return (
<div className='contato'>
    <div className='text-center'>
        <h1>Contato</h1>
        <p>Para orçamentos, reservas, agendamentos, alterações de reserva e informações.</p>
    </div>
    <div className='container'>
        <div className='row'>
            <div className='col-md-6 col-xs-12 '>
                <div className='line'></div>
                {/* NOME INPUT */}
                <div className='text-center'>
                    <input type='text' className='form-control' placeholder='Nome' name='Nome' />
                    <div className='line'></div>
                </div>
                {/* TELEFONE INPUT */}
                <div className='text-center'>
                    <input type='text' className='form-control' placeholder='Telefone' phone='tefefone' />
                    <div className='line'></div>
                </div>
                {/* EMAIL INPUT */}
                <div className='text-center'>
                    <input type='email' className='form-control' placeholder='E-mail' email='email' />
                    <div className='line'></div>
                </div>
                {/* ASSUNTO INPUT */}
                <div className='text-center'>
                    <input type='text' className='form-control' placeholder='Assunto' subject='assunto' />
                    <div className='line'></div>
                </div>
            </div>
            <div className='col-md-6 col-sm-12'>
                {/* MENSAGEM */}
                <div className='text-center'>
                    <textarea type='text' className='form-control' placeholder='Digite aqui a sua mensagem' subject='mensagem'></textarea>
                    <div className='line'></div>
                </div>
                <button type="button" className='btn-contato contact-btn'>ENVIAR</button>
            </div>
        </div>
    </div>
</div>
)
}

export default Contato