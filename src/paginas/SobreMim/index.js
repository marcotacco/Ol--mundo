import styles from './SobreMim.module.css'

import PostModelo from "Componentes/PostModelo";
import fotoCapa from "assets/sobre_mim_capa.png"
import perfil from "assets/perfil.jpeg"

export default function SobreMim() {

    return (
        <PostModelo
            fotoCapa={fotoCapa}
            titulo="Sobre mim"
        >
            <h3 className={styles.subtitulo}>
                Olá, eu sou o Marco!
            </h3>

            <img
                src={perfil}
                alt="Foto do Marco"
                className={styles.perfil}
            />

            <p className={styles.paragrafo}>
                Olá, eu sou o Marco!
            </p>

            <p className={styles.paragrafo}>
                Eu sou um Desenvolvedor Web front-End, e venho estudado programação há cerca de 1 ano.
            </p>

            <p className={styles.paragrafo}>
                Eu já fui estudante de ciência econômicas na Universidade Federal do Espirito Santo (UFES),
                já joguei um jogo de video game chamado Halo profissionalmente;
                Há pouco tempo decidi migrar para a área de tecnologia, mas ainda atuo como administrador numa empresa familiar.
            </p>

            <p className={styles.paragrafo}>
                Hoje em dia eu gostaria muito de conseguir o meu primeiro emprego na área. Eu sei que é muito difícil,
                mas eu espero botar a disposição todo esse meu tempo que eu investi estudando para ser um desenvolvedor Front-End,
                alinhado as melhores prática de comunicação e trabalho em equipe que eu aprendi com as minhas prévias experiências.
            </p>

            <p className={styles.paragrafo}>
                Eu possuo conhecimento em JavaScript e ReactJS, Frameworks como Bootstrap e Jquery, além de falar inglês fluentemente.
                
                <br/><br/>               
                
                Obrigado ;)
            </p>



        </PostModelo>
    )
}