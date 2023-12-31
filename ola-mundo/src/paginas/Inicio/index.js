import posts from 'json/posts.json';
import styles from './Inicio.module.css';
import PostCard from "components/PostCard";

export default function Inicio() {
  return (
    <ul className={styles.posts}>
      {
        posts.map(post => (
          <PostCard
            key={post.id}
            post={post}
          />
        ))
      }
    </ul>
  )
}