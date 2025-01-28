import { useState } from 'react';
import './Sidebar.css';

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={`sidebar ${isOpen ? 'open' : ''}`}>
      <button onClick={() => setIsOpen(!isOpen)} className="toggle-button">
        {isOpen ? '◄' : '►'}
      </button>
      <nav>
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="/dashboard">Dashboard</a></li>
          <li><a href="/proposals">Proposals</a></li>
          <li><a href="/members">Members</a></li>
        </ul>
      </nav>
    </div>
  );
}