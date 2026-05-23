import styles from './Cadastro.module.css'
import fifa from '../assets/fifa26.png'
function Cadastro() {
  return (
      <>
      <section className={styles.foto}><img src={fifa} alt="" /></section>
      <section className={styles.login}>

      <h1>Fifa</h1>

      <div className={styles.caixa}>

  <div className={styles.conta}>
      <p>usuario</p>
      <input type="text" placeholder='usuario'/>
      </div>

      <div className={styles.conta}>
      <p>Email</p>
      <input type="text" placeholder='Email'/>
      </div>

      <div className={styles.conta}>
      <p>Senha</p>
      <input type="passoword" placeholder='Senha'/>
      </div> 

<div className={styles.conta}>
      <p>confirmar</p>
      <input type="passoword" placeholder='Senha'/>
      <button>Entrar</button>
      </div> 

      </div>


      </section>
    </>
  )
}

export default Cadastro
