import { ThumbsUp, Trash } from 'phosphor-react';
import { Avatar } from './Avatar';
import style from './Comment.module.css';

export function Comment(){
    return(
        <div className={style.comment}>
            <Avatar hasBorder={false} src='https://avatars.githubusercontent.com/u/88689453?v=4'/>

            <div className={style.commentBox}>
                <div className={style.commentContent}>
                    <header>
                        <div className={style.authorAndTime}>
                            <strong>Cadu Araujo</strong>
                            <time title='11 de Maior ás 08:13h' dateTime='2022-05-11 08:13:00'>Cerca de 1h atrás</time>
                        </div>

                        <button title="Deletar comentário">
                            <Trash size={24}/>
                        </button>
                    </header>

                    <p>Show</p>
                </div>

                <footer>
                    <button>
                        <ThumbsUp />
                        Aplaudir <span>20</span>
                    </button>
                </footer>
            </div>

        </div>
    );
}