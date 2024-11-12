import React from 'react';
import { BiSolidPhoneCall } from "react-icons/bi";
import { CiMenuKebab } from "react-icons/ci";
import { IoSend } from "react-icons/io5";
import { FaUserCircle } from "react-icons/fa";
import { IoSearch } from "react-icons/io5";


const users = [
  { id: 1, name: 'nome do usuário' },
  { id: 2, name: 'nome do usuário' },
  { id: 3, name: 'nome do usuário' },
  { id: 4, name: 'nome do usuário' },
  { id: 5, name: 'nome do usuário' },
];

const Chat = () => {
  return (
    <div className={styles.chat-container}>
      {/* Sidebar com lista de usuários */}
      <div className={styles.sidebar}>
        <div className={styles.search-bar}>
        <IoSearch />
          <input type="text" placeholder="Pesquisar por usuários..." />
        </div>

        <div class={styles.contacts-container}>
  <div class={styles.contact}><FaUserCircle className={styles.cont}/></div>
  <div class={styles.contact}><FaUserCircle className={styles.cont}/></div>
  <div class={styles.contact}><FaUserCircle className={styles.cont}/></div>
  <div class={styles.contact}><FaUserCircle className={styles.cont}/></div>
</div>

        <div className={styles.user-list}>
          {users.map((user) => (
            <div className={styles.user-item} key={user.id}>
              <div className={styles.user-avatar}></div>
              <div className={styles.user-info}>
                <span>{user.name}</span>
                <div className={styles.status-dot}></div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Área do Chat */}
      <div className={styles.chat-area}>
        <div className={styles.chat-header}>
          <div className={styles.chat-header-info}>
            <div className={styles.selected-user-avatar}></div>
            <div className={styles.selected-user-name}>JAMES SMITH</div>
          </div>
          <div className={styles.chat-header-actions}>
            <button><BiSolidPhoneCall /></button>
            <button><CiMenuKebab /></button>
          </div>
        </div>

        <div className={styles.messages}>
          <div className={styles.message-received}>
            <p>Oi, como vai?</p>
          </div>
          <div className={styles.message.sent}>
            <p>Tudo bem, e você?</p>
          </div>
        </div>

        {/* Input para enviar mensagens */}
        <div className={styles.message-input}>
          <input type="text" placeholder="Mensagem..." />
          <button className={styles.send-button}><IoSend />
</button>
        </div>
      </div>
    </div>
  );
};

export default Chat;