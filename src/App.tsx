import React from 'react';
import './App.css';
import Header from "./components/Header";


function App() {
  return (
    <div className="app-wrapper">
        <Header/>
            <nav className='nav'>
                <div>
                    <a>Profile</a>
                </div>
                <div>
                    <a>Messages</a>
                </div>
                <div>
                    <a>News</a>
                </div>
                <div>
                    <a>Music</a>
                </div>
                <div>
                    <a>Settings</a>
                </div>

            </nav>
            <div className='content'>
                <div>
                    <img src='https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/a9e3440d-0f91-47a7-82c9-7c72df86c43d/ddzhn9j-59f0da47-6ed4-4e34-b732-aec2d19513d0.png/v1/fill/w_598,h_350,q_70,strp/harry_potter_and_the_chamber_of_secrets_fanart_07_by_vladislavpantic_ddzhn9j-350t.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NjAwIiwicGF0aCI6IlwvZlwvYTllMzQ0MGQtMGY5MS00N2E3LTgyYzktN2M3MmRmODZjNDNkXC9kZHpobjlqLTU5ZjBkYTQ3LTZlZDQtNGUzNC1iNzMyLWFlYzJkMTk1MTNkMC5wbmciLCJ3aWR0aCI6Ijw9MTAyNCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.Y9jlhivjYT4XS4LVTbDlVe2ipynHrHPquQ1WsaRE_8s'/>
                </div>
                <div className='ava'>
                    <img src='https://upload.wikimedia.org/wikipedia/en/d/d7/Harry_Potter_character_poster.jpg'/>
                </div>
                <div>
                    My posts
                    <div>
                        New posts
                    </div>
                </div>
                <div>
                    post 1
                </div>
                <div>
                    post 2
                </div>

            </div>
    </div>
  );
}

export default App;
