import posts from 'json/posts.json';
import styles from './Inicio.module.css';
import Post from "components/Post";

export default function Inicio() {
  return (
    <ul className={styles.posts}>
      {
        posts.map(post => (
          <Post
            key={post.id}
            post={post}
          />
        ))
      }
    </ul>
  )
}