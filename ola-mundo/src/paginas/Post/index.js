import { useParams } from "react-router-dom";
import PostModelo from "components/PostModelo";
import posts from 'json/posts.json';
import { useEffect, useState } from "react";

export default function Post() {
  const parametros = useParams();

  const [post, setPost] = useState({
    'id': '',
    'titulo': '',
    'texto': '',
  });

  useEffect(() => {
    setPost(posts.find(element => element.id === Number(parametros.id)));
  }, [posts]);

  return (
    <PostModelo
      titulo={post.titulo}
      fotoCapa={`/assets/posts/${post.id}/capa.png`}
    >
      {post.texto}
    </PostModelo>
  )
}