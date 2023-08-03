import styles from './post.module.css'

export const Post = (props) => {
    const {author, content, image, date} = props;

    return (
        <div className={styles.post}>
            <img className={styles.avatar} src={author.photo.avatar} alt="avatar"/>
            <div className={styles.container}>
                <div className={styles.header}>
                    <div className={styles.wrapper}>
                        <span className={styles.name}>{author.name}</span>
                        <span>{author.nickname}</span>
                        <span>{date}</span>
                    </div>
                </div>
                <span className={styles.content}>{content}</span>
                <img src={image.bird} alt="content"/>
            </div>
            <div className={styles.footer}>
                <i className="fa-regular fa-comment"><span>123</span></i>
                <i className="fa-solid fa-retweet"><span>45</span></i>
                <i className="fa-regular fa-heart"><span>256</span></i>
            </div>
        </div>
    )
}