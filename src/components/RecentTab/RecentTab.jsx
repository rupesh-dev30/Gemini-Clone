import "./RecentTab.css";

export default function RecentTab({ image, prevPrompt, onClick }) {
  return (
    <div className="recent">
      <p className="recent-title">Recent</p>
      {prevPrompt.map((item, index) => {
        return (
          <div onClick={() => onClick(item)} className="recent-entry">
            <img src={image} alt="message" />
            <p>{item.slice(0,20)} ...</p>
          </div>
        );
      })}
    </div>
  );
}
