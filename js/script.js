document.addEventListener('DOMContentLoaded', function() {
    // Tab switching functionality
    const tabs = document.querySelectorAll('.tab');
    const tabContents = document.querySelectorAll('.tab-content');
    
    tabs.forEach(tab => {
        tab.addEventListener('click', () => {
            const tabName = tab.getAttribute('data-tab');
            
            // Remove active class from all tabs and contents
            tabs.forEach(t => t.classList.remove('active'));
            tabContents.forEach(content => content.classList.remove('active'));
            
            // Add active class to clicked tab and corresponding content
            tab.classList.add('active');
            document.getElementById(`${tabName}-content`).classList.add('active');
        });
    });
    
    // Task selection functionality removed since tasks were removed
    // Initialize VS Code content
    const vsCodeContent = document.getElementById('vscode-content');
    vsCodeContent.innerHTML = `<div class="task-info">
        <h3>VS Code Environment</h3>
        <p>This is where your code editor would appear.</p>
    </div>`;
    
    // Input functionality
    const inputField = document.querySelector('.input-wrapper input');
    const sendButton = document.querySelector('.send-button');
    
    function sendMessage() {
        const message = inputField.value.trim();
        if (message) {
            // Simulate sending a message
            const terminalContent = document.getElementById('terminal-content');
            terminalContent.innerHTML += `<div class="terminal-line">
                <span class="prompt">$</span> ${message}
            </div>`;
            
            // Switch to terminal tab
            tabs.forEach(t => t.classList.remove('active'));
            tabContents.forEach(content => content.classList.remove('active'));
            
            document.querySelector('[data-tab="terminal"]').classList.add('active');
            document.getElementById('terminal-content').classList.add('active');
            
            // Clear input
            inputField.value = '';
        }
    }
    
    sendButton.addEventListener('click', sendMessage);
    
    inputField.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            sendMessage();
        }
    });
    
    // Initialize terminal content
    document.getElementById('terminal-content').innerHTML = `
        <div class="terminal-line"><span class="prompt">$</span> Ready for commands...</div>
    `;
    
    // Add some styling for the terminal
    const style = document.createElement('style');
    style.textContent = `
        .terminal-line {
            font-family: monospace;
            margin-bottom: 5px;
        }
        .prompt {
            color: #007acc;
            margin-right: 5px;
        }
        .task-info {
            padding: 20px;
            background-color: #252526;
            border-radius: 8px;
        }
        .task-info h3 {
            margin-bottom: 10px;
        }
    `;
    document.head.appendChild(style);
});