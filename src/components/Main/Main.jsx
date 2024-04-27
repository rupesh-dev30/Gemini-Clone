import { useContext } from "react";
import { assets } from "../../assets/assets";
import { content } from "../../assets/cardText";
import Card from "../Card/Card.jsx";
import Footer from "../Footer/Footer.jsx";
import SearchBox from "../SearchBox/SearchBox.jsx";
import "./Main.css";
import { Context } from "../../Context/Context.jsx";

export default function Main() {
  const {
    onSent,
    recentPrompt,
    showResult,
    loading,
    resultData,
    setInput,
    input,
  } = useContext(Context);

  function handleChange(event) {
    setInput(event.target.value);
  }

  return (
    <>
      <div className="main">
        <div className="nav">
          <div className="gemini">
            <p>Gemini</p>
            <img src={assets.drop_down_icon} alt="" />
          </div>
          <img className="profile" src={assets.user_icon} />
        </div>
        <div className="main-container">
          {!showResult ? (
            <>
              <div className="greet">
                <p>
                  <span>Hello, Rupesh Kumar</span>
                </p>
                <p>How can I help you today?</p>
              </div>
              <div className="cards">
                <ul>
                  {content.map((item) => (
                    <Card key={item.sNo} image={item.image} para={item.para} />
                  ))}
                </ul>
              </div>
            </>
          ) : (
            <div className="result">
              <div className="result-title">
                <img src={assets.user_icon} alt="icon" />
                <p>{recentPrompt}</p>
              </div>
              <div className="result-data">
                <img src={assets.gemini_icon} alt="icon" />
                {loading ? (
                  <div className="loader">
                    <hr />
                    <hr />
                    <hr />
                  </div>
                ) : (
                  <p dangerouslySetInnerHTML={{ __html: resultData }}></p>
                )}
              </div>
            </div>
          )}

          <div className="main-bottom">
            <SearchBox onSent={onSent} onChange={handleChange} input={input} />
            <Footer />
          </div>
        </div>
      </div>
    </>
  );
}
