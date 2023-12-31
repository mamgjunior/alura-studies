import { useParams } from "react-router-dom";
import PostModelo from "components/PostModelo";
import posts from 'json/posts.json';
import { useEffect, useState } from "react";
import ReactMarkdown from 'react-markdown';

import './Post.css';

export default function Post() {
  const parametros = useParams();

  const [post, setPost] = useState({
    'id': '',
    'titulo': '',
    'texto': '',
  });

  useEffect(() => {
    setPost(posts.find(element => element.id === Number(parametros.id)));
  }, [parametros.id]);

  return (
    <PostModelo
      titulo={post.titulo}
      fotoCapa={`/assets/posts/${post.id}/capa.png`}
    >
      <div className="post-markdown-container">
        <ReactMarkdown>
          {post.texto}
        </ReactMarkdown>
      </div>
    </PostModelo>
  )
}