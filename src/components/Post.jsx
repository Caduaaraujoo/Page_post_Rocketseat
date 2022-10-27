import { Avatar } from './Avatar';
import { Comment } from './Comment';
import  style from './Post.module.css'


export function Post(){
    return (
        <article className={style.post}>
            <header>
                <div className={style.author}>
                    <Avatar 
                    src='https://avatars.githubusercontent.com/u/88689453?v=4'
                    
                    />
                    <div className={style.authorInfo}>
                        <strong>Cadu Araujo</strong>
                        <span>Web Developer</span>
                    </div>
                </div>

                <time title='11 de Maior ás 08:13h' dateTime='2022-05-11 08:13:00'>Publicado há 1h</time>
            </header>

            <div className={style.content}>
            <p>Fala galeraa 👋</p>

            <p>Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, </p><p>evento da Rocketseat. O nome do projeto é DoctorCare 🚀</p>

            <p>{''}<a href='#'>jane.design/doctorcare</a></p>

            <p> 
                <a href='#'>#novoprojeto</a> {''}
                <a href='#'>#nlw</a> {''}
                <a href='#'>#rocketseat</a>
            </p>
            </div>

            <form className={style.commentForm}>
                <strong>Deixe seu feddback</strong>

                <textarea
                    placeholder='Deixe um comentário'
                />
                
             <footer>
                <button type='submit'>Publicar</button>
            </footer>  
            </form>

            <div className={style.commentList}>
                <Comment />
                <Comment />
                <Comment />
            </div>
        </article>
    );

}