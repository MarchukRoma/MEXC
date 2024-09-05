import { useState } from "react";

function App() {
  const [current, setCurrent] = useState(0);

  function handleClick() {
    if (current === 0) setCurrent(1);
    if (current === 1) setCurrent(2);
    if (current === 2) setCurrent(0);
  }

  const [isClicked, setIsClicked] = useState(false);

  const arr = ["4000 MXN", "450.000 COP", "21.000 ARS"];
  // Обробник події при натисканні на інпут
  const handleFocus = () => {
    setTimeout(() => {
      setIsClicked(true);
    }, 500); // Затримка у 500 мс
  };

  const [isClicked2, setIsClicked2] = useState(false);

  // Обробник події при натисканні на інпут
  const handleFocus2 = () => {
    setTimeout(() => {
      setIsClicked2(true);
    }, 500); // Затримка у 500 мс
  };

  const [isOpen, setIsOpen] = useState(false);

  // Функція для відкриття модального вікна
  const openModal = () => {
    setIsOpen(true);
  };

  // Функція для закриття модального вікна при натисканні поза вікном
  const closeModal = (e) => {
    if (e.target.className === "modal") {
      setIsOpen(false);
    }
  };
  return (
    <div>
      <img
        src="headerImg.svg"
        alt="header"
        onClick={() => {
          handleClick();
          console.log(current);
        }}
      />
      <div style={{ display: "flex" }}>
        <div>
          <img src="sideBar.svg" alt="sideBar" />
        </div>
        <div style={{ width: "50px" }}>. </div>
        <div>
          <div style={{ height: "30px" }}></div>
          <div>
            {/* Зображення, на яке натискають для відкриття модального вікна */}
            {/* <img src="total.svg" alt="total" onClick={openModal} /> */}
            <div style={{ display: "flex", alignItems: "flex-start" }}>
              <img
                className="totalImg"
                src={`total1${current}.svg`}
                alt="total"
              />
              <img
                className="totalImg anim"
                src="total2.svg"
                alt="total"
                onClick={openModal}
              />
              <img className="totalImg" src="total3.svg" alt="total" />
            </div>
            {/* Модальне вікно */}
            {isOpen && (
              <div className="modal" onClick={closeModal}>
                <div className="modal-content">
                  <img src="top.svg" alt="top" />
                  <p
                    style={{
                      textAlign: "left",
                      fontSize: "18px",
                      paddingLeft: "20px",
                    }}
                  >
                    Para retirar dinero de la bolsa de criptomonedas a <br />
                    su cuenta, necesita pagar una comission de <br />
                    <span style={{ color: "#357AFF" }}>${arr[current]}.</span>
                    <br />
                    Despued del pago, todas las resticciones de retiro <br />
                    seran canceladas y el dinero sera acreditado a su
                    <br /> cuenta inmediatalmente.
                  </p>
                  <p
                    style={{
                      textAlign: "left",
                      fontSize: "14px",
                      paddingLeft: "30px",
                    }}
                  >
                    Nombre del destinatario
                  </p>
                  <div className="input-container">
                    {/* Зображення в лівому верхньому куті */}
                    <img src="img1.svg" alt="icon" className="input-icon" />
                    {/* Інпут */}
                    <input
                      type="text"
                      className={`custom-input ${
                        isClicked ? "hidden-placeholder" : ""
                      }`}
                      placeholder="Ingresar texto"
                      onFocus={handleFocus}
                      style={{ paddingLeft: "40px" }} // Відступ 40px від лівого краю
                    />
                  </div>

                  <p
                    style={{
                      textAlign: "left",
                      fontSize: "14px",
                      paddingLeft: "30px",
                    }}
                  >
                    Numero de cuenta
                  </p>
                  <div className="input-container">
                    {/* Зображення в лівому верхньому куті */}
                    <img src="img2.svg" alt="icon" className="input-icon" />
                    {/* Інпут */}
                    <input
                      type="text"
                      className={`custom-input ${
                        isClicked2 ? "hidden-placeholder" : ""
                      }`}
                      placeholder="Ingresar texto"
                      onFocus={handleFocus2}
                      style={{ paddingLeft: "40px" }} // Відступ 40px від лівого краю
                    />
                  </div>
                  <div style={{ height: "20px" }}></div>

                  <img src="button.svg" alt="button" />

                  <div style={{ height: "20px" }}></div>
                </div>
              </div>
            )}
          </div>
          <div style={{ height: "40px" }}></div>
          <img src={`data${current}.svg`} alt="data" />
        </div>
      </div>
    </div>
  );
}

export default App;
