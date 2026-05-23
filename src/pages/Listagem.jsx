import styles from './Listagem.module.css'

function Listagem() {
  return (
    <>
  <main>
        <table>
            <tr>
                <td>Nome do Jogador</td>
                <td>Clube</td>
                <td>Nacionalidade</td>
                <td>Editar</td>
                <td>Excluir</td>
            </tr>

            <tr>
                <td>Lionel Messi</td>
                <td>Inter Miami</td>
                <td>Argentina</td>
                <td>📝</td>
                <td>🗑️</td>
            </tr>

            <tr>
                <td>Vinícius Jr</td>
                <td>real madrid</td>
                <td>Brasil</td>
                <td>📝</td>
                <td>🗑️</td>
            </tr>

            <tr>
                <td>Kylian Mbappé</td>
                <td>real madrid</td>
                <td>França</td>
                <td>📝</td>
                <td>🗑️</td>
            </tr>

           <tr>
                <td>Mohamed Salah</td>
                <td>Liverpool</td>
                <td>Egito</td>
                <td>📝</td>
                <td>🗑️</td>
            </tr>

               <tr>
                <td>Luka Modrić</td>
                <td>Real Madrid</td>
                <td>Croácia</td>
                <td>📝</td>
                <td>🗑️</td>
            </tr>
     

        </table>
    </main>

</>
  )
}

export default Listagem
