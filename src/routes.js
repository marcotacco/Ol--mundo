import { BrowserRouter, Route, Routes } from "react-router-dom";
import Menu from "./Componentes/Menu";
import Inicio from './paginas/Inicio';
import SobreMim from './paginas/SobreMim';
import Rodape from "Componentes/Rodape";
import PaginaPadrao from "Componentes/PaginaPadrao";
import Post from "paginas/Post";
import NaoEncontrada from "./paginas/NaoEncontrada";






function AppRoutes() {
  return (
    <BrowserRouter>

      <Menu />

      <Routes>

        <Route path="/" element={<PaginaPadrao />}>
          <Route path="/" element={<Inicio />} />
          <Route path="/sobremim" element={<SobreMim />} />
          
        </Route>

        <Route path="posts/:id" element={<Post />}/>
        <Route path="*" element={<NaoEncontrada />} />
      </Routes>

      <Rodape />

    </BrowserRouter>
  )
}

export default AppRoutes;
