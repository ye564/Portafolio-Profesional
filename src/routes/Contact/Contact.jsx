import emailjs from "emailjs-com";
import images from "../../components/assest/images";
import './Contact.css'

const Contact = () => {
    function sendEmail(e) {
        e.preventDefault();

    emailjs.sendForm('gmailMessage', 'template_9a5acbw', e.target, 'user_djX0GMDvYkVZN0XKaOuPr')

        .then((result) => {
            alert("Mensagem enviada com sucesso! 👍");
        }, (error) => {
            alert(error.message)
            
        });
        e.target.reset()
    }

    return (
        <section className="contact">
            <p className="top_c">
                {" <h2> " }
            </p>
            <h2>Contacto</h2>
            <p className="top2_c">
                {" </h2> " }
            </p>
            <p className="top_c">
                {" <form> " }
            </p>
            <div className="Segment">

            <form className="form" onSubmit={sendEmail}>
                <div className="formNC">
                    <input type="text" autoFocus className="form-control" required placeholder="Nombre completo" name="name"/>
                    <input type="email" className="form-control" required placeholder="Correo electronico" name="email"/>
                </div>
                <input type="text" autoFocus className="form-control" required placeholder="Tema" name="tema"/>
                <textarea className="form-control" id="" cols="30" rows="8" required placeholder="Mensaje ..." name="message"></textarea>

                <button type="submit" className="btn2" value="Enviar mensaje">¡Enviar Mensaje!</button>
            <p className="top2_c">
                {" </form> " }
            </p>
            </form>
            <div className="gradient">
                <div className="gradient_icons">
                    <div className="gradient_icons_section">
                        <img src={images.home} alt="125" />
                        <p>UBICACIÓN</p>
                        <p>Melgar - Tolima - Colombia</p>
                    </div>
                    <div className="gradient_icons_section">
                        <img src={images.whatsapp} alt="125" />
                        <p>WhatsApp</p>
                        <p>+57 3153992309</p>
                    </div>
                    <div className="gradient_icons_section">
                        <img src={images.email} alt="125" />
                        <p>Correo</p>
                        <p>yefersonolcunche@gmail.com</p>
                    </div>
                </div>    
            </div>
            </div>
        </section>
    )
}

export default Contact
