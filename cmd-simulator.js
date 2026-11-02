(() => {
    const prompt = 'C:\\Users\\moah>';
    const commandSuggestions = ['help', 'dir', 'whoami', 'date', 'time', 'echo Hello, world!', 'calc 12 * 8', 'ver'];

    function createCommandSimulator() {
        if (document.querySelector('#cmd-simulator')) return;

        const simulator = document.createElement('section');
        simulator.id = 'cmd-simulator';
        simulator.className = 'cmd-simulator';
        simulator.hidden = true;
        simulator.setAttribute('aria-label', 'Interactive command simulator');
        simulator.innerHTML = `
            <div class="cmd-header">
                <div class="cmd-window-title"><span class="cmd-window-icon">C:\\</span><strong data-i18n="cmd-title">Command Prompt</strong></div>
                <button class="cmd-close" type="button" aria-label="Close command prompt" data-i18n="cmd-close">Close</button>
            </div>
            <div class="cmd-body" id="cmd-body" role="log" aria-live="polite"></div>
            <div class="cmd-suggestions" aria-label="Suggested commands"></div>
            <label class="cmd-input-row">
                <span class="cmd-prompt" aria-hidden="true">${prompt}</span>
                <input type="text" id="cmd-input" data-i18n-placeholder="cmd-placeholder" placeholder="Type a command..." autocomplete="off" spellcheck="false" aria-label="Command input">
            </label>`;
        document.body.append(simulator);

        const input = simulator.querySelector('#cmd-input');
        const output = simulator.querySelector('#cmd-body');
        const suggestions = simulator.querySelector('.cmd-suggestions');
        const messages = {
            ar: {
                title: 'موجّه الأوامر',
                close: 'إغلاق',
                input: 'اكتب أمراً...',
                suggestions: 'أوامر مقترحة',
                welcome: 'Microsoft Windows [محاكاة تعليمية محلية]\\nاكتب help لعرض الأوامر المتاحة.',
                help: 'الأوامر المتاحة: help, cls, echo, date, time, dir, whoami, ver, calc.',
                unknown: 'الأمر غير معروف. اكتب help لعرض الأوامر المتاحة.',
                directory: 'مجلد الموقع\\n  index.html\\n  ai-models.html\\n  sheet-tutorial.html\\n  pc-development.html\\n  mobile-development.html\\n  ideas.html\\n  privacy.html',
                identity: 'moah',
                version: 'Microsoft Windows [إصدار محاكي TIK CODE DZ]',
                calcUsage: 'الاستخدام: calc تعبير حسابي (مثال: calc 12 * 8)',
                calcInvalid: 'تعذّر حساب التعبير. استخدم الأرقام والعمليات + - * / والأقواس فقط.',
                commands: ['مساعدة', 'الملفات', 'المستخدم', 'التاريخ', 'الوقت', 'مثال حسابي', 'الإصدار', 'مسح الشاشة']
            },
            en: {
                title: 'Command Prompt',
                close: 'Close',
                input: 'Type a command...',
                suggestions: 'Suggested commands',
                welcome: 'Microsoft Windows [Local educational simulation]\\nType help to see available commands.',
                help: 'Available commands: help, cls, echo, date, time, dir, whoami, ver, calc.',
                unknown: 'Command not recognized. Type help to see available commands.',
                directory: 'Website folder\\n  index.html\\n  ai-models.html\\n  sheet-tutorial.html\\n  pc-development.html\\n  mobile-development.html\\n  ideas.html\\n  privacy.html',
                identity: 'moah',
                version: 'Microsoft Windows [TIK CODE DZ simulator version]',
                calcUsage: 'Usage: calc expression (example: calc 12 * 8)',
                calcInvalid: 'Could not calculate the expression. Use only numbers, + - * /, and parentheses.',
                commands: ['help', 'dir', 'whoami', 'date', 'time', 'example calculation', 'version', 'clear screen']
            },
            fr: {
                title: 'Invite de commandes',
                close: 'Fermer',
                input: 'Saisissez une commande...',
                suggestions: 'Commandes suggérées',
                welcome: 'Microsoft Windows [Simulation éducative locale]\\nSaisissez help pour afficher les commandes disponibles.',
                help: 'Commandes disponibles : help, cls, echo, date, time, dir, whoami, ver, calc.',
                unknown: 'Commande inconnue. Saisissez help pour afficher les commandes disponibles.',
                directory: 'Dossier du site\\n  index.html\\n  ai-models.html\\n  sheet-tutorial.html\\n  pc-development.html\\n  mobile-development.html\\n  ideas.html\\n  privacy.html',
                identity: 'moah',
                version: 'Microsoft Windows [version du simulateur TIK CODE DZ]',
                calcUsage: 'Utilisation : calc expression (exemple : calc 12 * 8)',
                calcInvalid: 'Expression invalide. Utilisez uniquement des nombres, + - * / et des parenthèses.',
                commands: ['help', 'dir', 'whoami', 'date', 'time', 'exemple de calcul', 'version', 'effacer']
            }
        };
        const language = () => messages[document.documentElement.lang] || messages.ar;
        const suggestionCommands = ['help', 'dir', 'whoami', 'date', 'time', 'calc 12 * 8', 'ver', 'cls'];

        function writeLine(text, className = '') {
            const line = document.createElement('div');
            line.textContent = text;
            if (className) line.className = className;
            output.append(line);
            output.scrollTop = output.scrollHeight;
        }

        function calculate(expression) {
            const tokens = expression.match(/\d+(?:\.\d+)?|[()+*/-]/g);
            if (!tokens || tokens.join('') !== expression.replace(/\s+/g, '')) return null;

            let position = 0;
            function parseExpression() {
                let value = parseTerm();
                while (tokens[position] === '+' || tokens[position] === '-') {
                    const operator = tokens[position++];
                    const right = parseTerm();
                    value = operator === '+' ? value + right : value - right;
                }
                return value;
            }
            function parseTerm() {
                let value = parseFactor();
                while (tokens[position] === '*' || tokens[position] === '/') {
                    const operator = tokens[position++];
                    const right = parseFactor();
                    if (operator === '/' && right === 0) throw new Error('Division by zero.');
                    value = operator === '*' ? value * right : value / right;
                }
                return value;
            }
            function parseFactor() {
                if (tokens[position] === '-') {
                    position++;
                    return -parseFactor();
                }
                if (tokens[position] === '+') {
                    position++;
                    return parseFactor();
                }
                if (tokens[position] === '(') {
                    position++;
                    const value = parseExpression();
                    if (tokens[position++] !== ')') throw new Error('Unclosed parenthesis.');
                    return value;
                }
                const token = tokens[position++];
                if (!/^\d+(?:\.\d+)?$/.test(token || '')) throw new Error('Invalid number.');
                return Number(token);
            }

            try {
                const result = parseExpression();
                return position === tokens.length && Number.isFinite(result) ? String(Number(result.toFixed(8))) : null;
            } catch {
                return null;
            }
        }

        function executeCommand(value) {
            const command = value.trim();
            if (!command) return;
            writeLine(`${prompt} ${command}`, 'cmd-command');
            const [name, ...args] = command.split(/\s+/);
            const text = language();
            switch (name.toLowerCase()) {
                case 'cls':
                case 'clear':
                case 'مسح':
                    output.replaceChildren();
                    break;
                case 'help':
                case 'مساعدة':
                    writeLine(text.help);
                    break;
                case 'echo':
                case 'صدى':
                    writeLine(args.join(' '));
                    break;
                case 'date':
                    writeLine(new Date().toLocaleDateString(document.documentElement.lang));
                    break;
                case 'time':
                    writeLine(new Date().toLocaleTimeString(document.documentElement.lang));
                    break;
                case 'dir':
                case 'ls':
                    writeLine(text.directory);
                    break;
                case 'whoami':
                    writeLine(text.identity);
                    break;
                case 'ver':
                    writeLine(text.version);
                    break;
                case 'calc': {
                    const expression = args.join('');
                    const result = expression ? calculate(expression) : null;
                    if (result === null) writeLine(args.length ? text.calcInvalid : text.calcUsage, 'cmd-error');
                    else writeLine(result, 'cmd-result');
                    break;
                }
                default:
                    writeLine(text.unknown, 'cmd-error');
            }
        }

        function renderSuggestions() {
            const text = language();
            suggestions.replaceChildren();
            suggestions.setAttribute('aria-label', text.suggestions);
            suggestionCommands.forEach((command, index) => {
                const button = document.createElement('button');
                button.type = 'button';
                button.className = 'cmd-suggestion';
                button.textContent = text.commands[index];
                button.title = command;
                button.addEventListener('click', () => {
                    input.value = command;
                    executeCommand(command);
                    input.value = '';
                    input.focus();
                });
                suggestions.append(button);
            });
        }

        function open() {
            simulator.hidden = false;
            document.querySelector('.nav-cmd-btn')?.setAttribute('aria-expanded', 'true');
            input.focus();
        }

        function close() {
            simulator.hidden = true;
            const navigationButton = document.querySelector('.nav-cmd-btn');
            navigationButton?.setAttribute('aria-expanded', 'false');
            navigationButton?.focus();
        }

        window.toggleCMD = () => {
            if (simulator.hidden) open();
            else close();
        };
        simulator.querySelector('.cmd-close').addEventListener('click', close);
        input.addEventListener('keydown', (event) => {
            if (event.key === 'Enter') {
                executeCommand(input.value);
                input.value = '';
            } else if (event.key === 'Escape') {
                close();
            }
        });
        window.addEventListener('site-language-change', () => {
            const text = language();
            simulator.setAttribute('aria-label', text.title);
            simulator.querySelector('[data-i18n="cmd-title"]').textContent = text.title;
            simulator.querySelector('[data-i18n="cmd-close"]').textContent = text.close;
            simulator.querySelector('.cmd-close').setAttribute('aria-label', text.close);
            input.placeholder = text.input;
            input.setAttribute('aria-label', text.input);
            renderSuggestions();
        });
        writeLine(language().welcome, 'cmd-welcome');
        renderSuggestions();
    }

    window.addEventListener('DOMContentLoaded', createCommandSimulator, { once: true });
})();
