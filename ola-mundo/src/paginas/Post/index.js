import { Route, Routes, useParams } from "react-router-dom";
import PostModelo from "components/PostModelo";
import posts from 'json/posts.json';
import { useEffect, useState } from "react";
import ReactMarkdown from 'react-markdown';

import './Post.css';
import NaoEncontrado from "paginas/NaoEncontrado";
import PaginaPadrao from "components/PaginaPadrao";

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

  if (!post) {
    return <NaoEncontrado />
  }

  return (
    <Routes>
      <Route path="*" element={<PaginaPadrao />}>
        <Route index element={
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
        } />
      </Route>
    </Routes>
  )
}