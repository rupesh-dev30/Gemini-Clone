import React, { useContext, useState } from 'react'
import './Sidebar.css'
import { assets } from '../../assets/assets'
import BottomItem from '../BottomItem/BottomItem.jsx'
import RecentTab from '../RecentTab/RecentTab.jsx'
import { Context } from '../../Context/Context.jsx'

const Sidebar = () => {
  const [extended, setExtented]= useState(1);
  const {onSent, prevPrompt, setRecentPrompt, newChat} = useContext(Context);

  const loadPrompt = async (prompt) => {
    setRecentPrompt(prompt);
    await onSent(prompt);
  }

  function handleExtended(){
    setExtented(prev => !prev)
  }

  return (
    <div className={extended? "sidebar hidden" : "sidebar"}>
      <div className="top">
        <img onClick={handleExtended} className='menu' src={assets.menu_icon} alt="menu" />
        <div onClick={() => newChat()} className='new-chat'>
            <p className='plus'>+</p>
            {extended? <p>New Chat</p> : null}
        </div>
        {extended? <RecentTab onClick={loadPrompt} prevPrompt={prevPrompt} image={assets.message_icon} />: null}
      </div>
      <div className="bottom">
        <BottomItem isExtended={extended} image={assets.question_icon} text="Help"/>
        <BottomItem isExtended={extended} image={assets.history_icon} text="Activity"/>
        <BottomItem isExtended={extended} image={assets.setting_icon} text="Setting"/>
      </div>
    </div>
  )
}

export default Sidebar;
