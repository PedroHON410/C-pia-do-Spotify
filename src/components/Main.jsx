import React from "react";

const Main = () => {
  return (
    <div className="main">
      <div className="item-list">
        <div className="item-list__header">
          <h2>Artistas populares</h2>
          <a className="item-list__link">Mostrar tudo</a>
          <div className="single-item">
            <img
              className="single-item__image"
              src="https://i.scdn.co/image/ab676161000051744dcd8a3bff84cd7703892cf4"
              alt="imagem do artista X"
            />
            <p>Henrique e Juliano</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
