import styles from './Banner.module.css'
import circuloColorido from 'assets/circulo_colorido.png'
import perfil from 'assets/perfil.jpeg'

export default function Banner() {
    return  (
        <div className={styles.banner}>
            <div className={styles.apresentacao}>
                <h1 className={styles.titulo}>
                    Olá mundo!
                </h1>
                <p className={styles.paragrafo}>
                    Boas vindas ao meu espaço pessoal! Eu sou o Marco, desenvolvedor Front-End.
                </p>
            </div>
            <div className={styles.imagens}>
                <img
                    className= {styles.circuloColorido}
                    src= {circuloColorido} 
                    aria-hidden={true}
                />

                <img 
                    className= {styles.perfil} 
                    src= {perfil} 
                    alt='Minha foto'
                />
            </div>
        </div>
    )
}