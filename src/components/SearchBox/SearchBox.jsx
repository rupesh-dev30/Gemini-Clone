import { assets } from "../../assets/assets";
import './SearchBox.css'

export default function SearchBox({onChange, input, onSent}) {
  function handleSent(){
    onSent();
  }

  return (
    <div className="search-box">
      <input onChange={onChange} value={input} type="text" placeholder="Enter a prompt here" />
      <div>
        <img src={assets.gallery_icon} alt="icon" />
        <img src={assets.mic_icon} alt="icon" />
        <img onClick={handleSent} src={assets.send_icon} alt="icon" />
      </div>
    </div>
  );
}
