import { BrowserRouter, Route, Routes } from "react-router-dom";

import Menu from "./components/Menu";
import Inicio from "./paginas/Inicio";
import Sobremim from "./paginas/SobreMim";
import Rodape from "components/Rodape";

function AppRoutes() {
  return (
    <BrowserRouter>
      <Menu />

      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/sobremim" element={<Sobremim />} />
        <Route path="*" element={<div>Pagina não encontrada</div>} />
      </Routes>

      <Rodape />
    </BrowserRouter>
  );
}

export default AppRoutes;
