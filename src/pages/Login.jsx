import styles from './Login.module.css'
import fifa from '../assets/fifa26.png'

function Login() {
  return (
     <>
      <section className={styles.foto}><img src={fifa} alt="" /></section>
     <section className={styles.login}>

      <h1>Fifa</h1>

      <div className={styles.caixa}>

      <div className={styles.conta}>
      <p>Email</p>
      <input type="text" placeholder='Email'/>
      </div>

      <div className={styles.conta}>
      <p>Senha</p>
      <input type="passoword" placeholder='Senha'/>
      </div> 

      <button>Entrar</button>
      <p>Não tem conta? </p>
      </div>

      </section>
    </>
  )
}

export default Login
