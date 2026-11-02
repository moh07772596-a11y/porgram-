(() => {
    const snippets = {
        python: [
            {
                title: 'رسالة ترحيب',
                description: 'خزّن الاسم في متغير واطبع رسالة ترحيب.',
                code: 'name = "Sara"\nprint(f"Hello, {name}!")',
                output: 'Hello, Sara!'
            },
            {
                title: 'آلة حاسبة بسيطة',
                description: 'اجمع 10 و5 واعرض النتيجة.',
                code: 'first_number = 10\nsecond_number = 5\ntotal = first_number + second_number\nprint(f"{first_number} + {second_number} = {total}")',
                output: '10 + 5 = 15'
            },
            {
                title: 'حلقة التكرار (Loop)',
                description: 'اطبع الأرقام من 1 إلى 3 بالترتيب.',
                code: '# اطبع الأرقام من 1 إلى 3\nfor number in range(1, 4):\n    print(number)',
                output: '1\n2\n3'
            }
        ],
        javascript: [
            {
                title: 'رسالة ترحيب',
                description: 'خزّن الاسم في متغير واطبع رسالة ترحيب.',
                code: 'const name = "Sara";\nconsole.log(`Hello, ${name}!`);',
                output: 'Hello, Sara!'
            },
            {
                title: 'آلة حاسبة بسيطة',
                description: 'اجمع 10 و5 واعرض النتيجة.',
                code: 'const firstNumber = 10;\nconst secondNumber = 5;\nconst total = firstNumber + secondNumber;\nconsole.log(`${firstNumber} + ${secondNumber} = ${total}`);',
                output: '10 + 5 = 15'
            },
            {
                title: 'حلقة التكرار (Loop)',
                description: 'اطبع الأرقام من 1 إلى 3 بالترتيب.',
                code: 'for (let number = 1; number <= 3; number++) {\n  console.log(number);\n}',
                output: '1\n2\n3'
            }
        ],
        cpp: [
            {
                title: 'رسالة ترحيب',
                description: 'خزّن الاسم في متغير واطبع رسالة ترحيب.',
                code: '#include <iostream>\n#include <string>\n\nint main() {\n  std::string name = "Sara";\n  std::cout << "Hello, " << name << "!" << std::endl;\n  return 0;\n}',
                output: 'Hello, Sara!'
            },
            {
                title: 'آلة حاسبة بسيطة',
                description: 'اجمع 10 و5 واعرض النتيجة.',
                code: '#include <iostream>\n\nint main() {\n  int firstNumber = 10;\n  int secondNumber = 5;\n  int total = firstNumber + secondNumber;\n  std::cout << firstNumber << " + " << secondNumber << " = " << total << std::endl;\n  return 0;\n}',
                output: '10 + 5 = 15'
            },
            {
                title: 'حلقة التكرار (Loop)',
                description: 'اطبع الأرقام من 1 إلى 3 بالترتيب.',
                code: '#include <iostream>\n\nint main() {\n  for (int number = 1; number <= 3; number++) {\n    std::cout << number << std::endl;\n  }\n  return 0;\n}',
                output: '1\n2\n3'
            }
        ],
        csharp: [
            {
                title: 'رسالة ترحيب',
                description: 'خزّن الاسم في متغير واطبع رسالة ترحيب.',
                code: 'using System;\n\nclass Program {\n  static void Main() {\n    string name = "Sara";\n    Console.WriteLine($"Hello, {name}!");\n  }\n}',
                output: 'Hello, Sara!'
            },
            {
                title: 'آلة حاسبة بسيطة',
                description: 'اجمع 10 و5 واعرض النتيجة.',
                code: 'using System;\n\nclass Program {\n  static void Main() {\n    int firstNumber = 10;\n    int secondNumber = 5;\n    int total = firstNumber + secondNumber;\n    Console.WriteLine($"{firstNumber} + {secondNumber} = {total}");\n  }\n}',
                output: '10 + 5 = 15'
            },
            {
                title: 'حلقة التكرار (Loop)',
                description: 'اطبع الأرقام من 1 إلى 3 بالترتيب.',
                code: 'using System;\n\nclass Program {\n  static void Main() {\n    for (int number = 1; number <= 3; number++) {\n      Console.WriteLine(number);\n    }\n  }\n}',
                output: '1\n2\n3'
            }
        ],
        c: [
            {
                title: 'رسالة ترحيب',
                description: 'خزّن الاسم في متغير واطبع رسالة ترحيب.',
                code: '#include <stdio.h>\n\nint main(void) {\n  char name[] = "Sara";\n  printf("Hello, %s!\\n", name);\n  return 0;\n}',
                output: 'Hello, Sara!\n'
            },
            {
                title: 'آلة حاسبة بسيطة',
                description: 'اجمع 10 و5 واعرض النتيجة.',
                code: '#include <stdio.h>\n\nint main(void) {\n  int first_number = 10;\n  int second_number = 5;\n  int total = first_number + second_number;\n  printf("%d + %d = %d\\n", first_number, second_number, total);\n  return 0;\n}',
                output: '10 + 5 = 15\n'
            },
            {
                title: 'حلقة التكرار (Loop)',
                description: 'اطبع الأرقام من 1 إلى 3 بالترتيب.',
                code: '#include <stdio.h>\n\nint main(void) {\n  for (int number = 1; number <= 3; number++) {\n    printf("%d\\n", number);\n  }\n  return 0;\n}',
                output: '1\n2\n3\n'
            }
        ]
    };

    const languages = {
        python: {
            name: 'Python',
            filename: 'main.py',
            tagline: 'البيانات والأتمتة والذكاء الاصطناعي',
            logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg',
            explanation: 'Python لغة سهلة القراءة. يخزّن المثال الاسم في متغير، ثم يطبع رسالة ترحيب منسّقة في الطرفية.',
            desktop: 'VS Code مع Python، أو الطرفية بعد تثبيت Python.',
            mobile: 'Pydroid 3 للتشغيل المحلي، أو Termux بعد تثبيت Python.',
            code: snippets.python[0].code,
            steps: ['يُخزّن الاسم Sara في المتغير name.', 'تضيف f-string الاسم إلى رسالة الترحيب.', 'تطبع print الرسالة في الطرفية.'],
            flow: 'ملف Python ← المفسّر ← النتيجة',
            terminal: 'Terminal · Python'
        },
        javascript: {
            name: 'JavaScript',
            filename: 'main.js',
            tagline: 'الويب والتطبيقات التفاعلية',
            logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg',
            explanation: 'تعمل JavaScript في المتصفح أو Node.js. يخزّن المثال الاسم في متغير، ثم يطبع رسالة ترحيب منسّقة.',
            desktop: 'متصفح حديث أو Node.js مع VS Code.',
            mobile: 'متصفح الهاتف أو محرر JavaScript؛ لا يتطلب مثال الويب تثبيت مترجم.',
            code: snippets.javascript[0].code,
            steps: ['يُخزّن الاسم Sara في المتغير name.', 'تضيف template string الاسم إلى رسالة الترحيب.', 'تطبع console.log الرسالة في الطرفية.'],
            flow: 'الشيفرة ← محرك JavaScript ← صفحة أو خادم',
            terminal: 'Console · JavaScript'
        },
        cpp: {
            name: 'C++',
            filename: 'main.cpp',
            tagline: 'الأنظمة والألعاب والتطبيقات عالية الأداء',
            logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/cplusplus/cplusplus-original.svg',
            explanation: 'C++ لغة مترجمة؛ يحول المترجم الشيفرة المصدرية إلى برنامج تنفيذي. تستخدم في الأنظمة والألعاب والتطبيقات التي تحتاج إلى أداء عالٍ.',
            desktop: 'VS Code مع مترجم مثل GCC أو بيئة Visual Studio.',
            mobile: 'Cxxdroid للتجربة التعليمية؛ أو بيئة سحابية عند تعذر الترجمة محليًا.',
            explanation: 'يعرّف المثال متغيرًا للاسم، ثم يطبع رسالة ترحيب باستخدام cout.',
            code: snippets.cpp[0].code,
            steps: ['يُخزّن الاسم Sara في المتغير name.', 'تجمع cout نص الترحيب والاسم.', 'تظهر الرسالة في الطرفية.'],
            flow: 'الشيفرة ← مترجم C++ ← برنامج تنفيذي',
            terminal: 'Terminal · C++'
        },
        csharp: {
            name: 'C#',
            filename: 'Program.cs',
            tagline: 'تطبيقات .NET والألعاب',
            logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/csharp/csharp-original.svg',
            explanation: 'يعرّف المثال متغيرًا للاسم، ثم يطبع رسالة ترحيب منسّقة باستخدام Console.WriteLine.',
            desktop: 'Visual Studio أو VS Code مع .NET SDK.',
            mobile: 'استخدم GitHub Codespaces أو محررًا سحابيًا؛ إعداد .NET الكامل على الهاتف محدود.',
            code: snippets.csharp[0].code,
            steps: ['يُخزّن الاسم Sara في المتغير name.', 'تضيف السلسلة المنسّقة الاسم إلى التحية.', 'تطبع Console.WriteLine الرسالة.'],
            flow: 'الشيفرة ← مترجم C# ← بيئة .NET',
            terminal: 'Terminal · C#'
        },
        c: {
            name: 'C',
            filename: 'main.c',
            tagline: 'الأنظمة والبرمجيات عالية الأداء',
            logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/c/c-original.svg',
            explanation: 'يعرّف المثال متغيرًا للاسم، ثم يطبع رسالة ترحيب باستخدام printf.',
            desktop: 'VS Code مع مترجم مثل GCC أو بيئة Visual Studio.',
            mobile: 'استخدم بيئة برمجية سحابية أو تطبيقًا متوافقًا مع C؛ خيارات الترجمة المحلية تعتمد على النظام.',
            code: snippets.c[0].code,
            steps: ['يُخزّن الاسم Sara في المتغير name.', 'تضع printf قيمة name مكان %s.', 'تظهر الرسالة في الطرفية.'],
            flow: 'الشيفرة ← مترجم C ← برنامج تنفيذي',
            terminal: 'Terminal · C'
        }
    };

    const tabs = [...document.querySelectorAll('[data-language]')];
    const panel = document.querySelector('#language-panel');
    const editor = document.querySelector('#code-editor');
    const lineNumbers = document.querySelector('#editor-line-numbers');
    const terminalOutput = document.querySelector('#terminal-output');
    const runButton = document.querySelector('#run-example');
    const snippetList = document.querySelector('#snippet-list');
    let activeKey = 'python';
    let runningFrame = null;
    let runTimeout = null;
    let runningMessageHandler = null;

    function updateLineNumbers() {
        const lineCount = editor.value.split('\n').length;
        lineNumbers.textContent = Array.from({ length: lineCount }, (_, index) => index + 1).join('\n');
        lineNumbers.scrollTop = editor.scrollTop;
    }

    function loadSnippet(languageKey, snippet) {
        if (activeKey !== languageKey) renderLanguage(languageKey);
        editor.value = snippet.code;
        updateLineNumbers();
        editor.focus();
        if (languageKey === 'javascript') {
            runJavaScript(snippet.code);
        } else {
            terminalOutput.textContent = snippet.output;
        }
    }

    function getSnippetOutput(languageKey, code) {
        const snippet = snippets[languageKey].find((item) => item.code === code);
        return snippet ? snippet.output : null;
    }

    function renderSnippets(languageKey) {
        snippetList.replaceChildren(...snippets[languageKey].map((snippet) => {
            const card = document.createElement('article');
            card.className = 'programming-snippet';
            const title = document.createElement('strong');
            title.textContent = snippet.title;
            const description = document.createElement('p');
            description.textContent = snippet.description;
            const button = document.createElement('button');
            button.type = 'button';
            button.textContent = 'تجربة';
            button.setAttribute('aria-label', `تجربة مثال ${snippet.title}`);
            button.addEventListener('click', () => loadSnippet(languageKey, snippet));
            card.append(title, description, button);
            return card;
        }));
    }

    function renderLanguage(key) {
        const language = languages[key];
        if (!language) return;
        stopJavaScriptRun();
        activeKey = key;
        document.querySelector('#language-name').textContent = language.name;
        document.querySelector('#language-tagline').textContent = language.tagline;
        document.querySelector('#language-logo').src = language.logo;
        document.querySelector('#language-logo').alt = `شعار ${language.name}`;
        document.querySelector('#language-explanation').textContent = language.explanation;
        document.querySelector('#language-desktop').textContent = language.desktop;
        document.querySelector('#language-mobile').textContent = language.mobile;
        document.querySelector('#editor-title').textContent = language.filename;
        editor.value = language.code;
        document.querySelector('#terminal-title').textContent = language.terminal;
        terminalOutput.textContent = snippets[key][0].output;
        document.querySelector('#language-steps').replaceChildren(...language.steps.map((step) => {
            const item = document.createElement('li');
            item.textContent = step;
            return item;
        }));
        document.querySelector('#language-flow').textContent = language.flow;
        document.querySelector('#execution-note').textContent = key === 'javascript'
            ? 'JavaScript تعمل داخل إطار معزول بمهلة تنفيذ محدودة. بقية اللغات تعرض محاكاة تعليمية لمخرجات النصوص البسيطة ولا تستبدل المترجم الحقيقي.'
            : 'تظهر نتيجة الأمثلة الجاهزة مباشرة. المخرجات محاكاة تعليمية ولا تستبدل تشغيل البرنامج بمترجم حقيقي.';
        renderSnippets(key);
        panel.setAttribute('aria-labelledby', `tab-${key}`);
        tabs.forEach((tab) => {
            const selected = tab.dataset.language === key;
            tab.setAttribute('aria-selected', String(selected));
            tab.tabIndex = selected ? 0 : -1;
        });
        updateLineNumbers();
    }

    function decodeStringLiteral(value) {
        return value.replace(/\\(n|r|t|\\|"|')/g, (match, escape) => ({
            n: '\n',
            r: '\r',
            t: '\t',
            '\\': '\\',
            '"': '"',
            "'": "'"
        })[escape]);
    }

    function simulateOutput(key, code) {
        const patterns = {
            python: /\bprint\s*\(\s*(?:(["'])(.*?)\1|([A-Za-z_]\w*))\s*\)/g,
            cpp: /std::cout\s*<<\s*(["'])(.*?)\1/g,
            csharp: /Console\.Write(?:Line)?\s*\(\s*(["'])(.*?)\1\s*\)/g,
            c: /\bprintf\s*\(\s*(["'])(.*?)\1\s*\)/g
        };
        const expression = patterns[key];
        const output = [];
        const pythonValues = new Map();
        let match;
        if (key === 'python') {
            const assignment = /^\s*([A-Za-z_]\w*)\s*=\s*(["'])(.*?)\2\s*$/gm;
            let value;
            while ((value = assignment.exec(code)) !== null) {
                pythonValues.set(value[1], value[3]);
            }
        }
        while ((match = expression.exec(code)) !== null) {
            const literal = match[2] === undefined ? pythonValues.get(match[3]) : match[2];
            if (literal !== undefined) output.push(decodeStringLiteral(literal));
        }
        return output.length
            ? output.join('\n')
            : 'لم يتم العثور على عبارة إخراج نصية بسيطة لمحاكاتها.';
    }

    function stopJavaScriptRun() {
        if (runningMessageHandler) {
            window.removeEventListener('message', runningMessageHandler);
            runningMessageHandler = null;
        }
        if (runTimeout !== null) {
            clearTimeout(runTimeout);
            runTimeout = null;
        }
        if (runningFrame) {
            runningFrame.remove();
            runningFrame = null;
        }
    }

    function runJavaScript(code) {
        stopJavaScriptRun();
        const outputLines = [];
        terminalOutput.textContent = 'جارٍ تشغيل JavaScript...';

        const frame = document.createElement('iframe');
        frame.title = 'بيئة JavaScript معزولة';
        frame.setAttribute('sandbox', 'allow-scripts');
        frame.hidden = true;
        frame.srcdoc = `<!doctype html><meta http-equiv="Content-Security-Policy" content="default-src 'none'; script-src 'unsafe-inline' 'unsafe-eval'; connect-src 'none'"><script>
            function formatValue(value) {
                if (typeof value === 'string') return value;
                try {
                    var json = JSON.stringify(value);
                    return json === undefined ? String(value) : json;
                } catch (error) {
                    return String(value);
                }
            }
            window.addEventListener('message', async function (event) {
                if (!event.data || event.data.type !== 'run') return;
                var send = function (type, text) {
                    parent.postMessage({ type: type, text: text }, '*');
                };
                ['log', 'info', 'warn', 'error'].forEach(function (method) {
                    console[method] = function () {
                        send('output', Array.prototype.map.call(arguments, formatValue).join(' '));
                    };
                });
                window.onerror = function (message) {
                    send('runtime-error', String(message));
                    return true;
                };
                try {
                    var result = new Function(event.data.code)();
                    if (result && typeof result.then === 'function') result = await result;
                    if (result !== undefined) send('output', formatValue(result));
                    send('done', '');
                } catch (error) {
                    send('runtime-error', error && error.stack ? error.stack : String(error));
                    send('done', '');
                }
            });
        <\/script>`;
        runningFrame = frame;
        frame.addEventListener('load', () => {
            if (runningFrame === frame) frame.contentWindow.postMessage({ type: 'run', code }, '*');
        }, { once: true });
        document.body.append(frame);
        runTimeout = window.setTimeout(() => {
            if (runningFrame !== frame) return;
            terminalOutput.textContent = 'توقّف التنفيذ بعد تجاوز المهلة (ثانيتان).';
            stopJavaScriptRun();
        }, 2000);

        function receiveOutput(event) {
            if (!runningFrame || event.source !== runningFrame.contentWindow) return;
            const message = event.data;
            if (!message || typeof message.type !== 'string') return;
            if (message.type === 'output' || message.type === 'runtime-error') {
                if (outputLines.length < 100) {
                    outputLines.push(message.type === 'runtime-error' ? `خطأ: ${message.text}` : message.text);
                    terminalOutput.textContent = outputLines.join('\n');
                } else {
                    outputLines.push('تم إيقاف المخرجات بعد 100 سطر.');
                    terminalOutput.textContent = outputLines.join('\n');
                    stopJavaScriptRun();
                }
                return;
            }
            if (message.type === 'done') {
                if (outputLines.length === 0) terminalOutput.textContent = 'اكتمل التنفيذ دون مخرجات.';
                stopJavaScriptRun();
            }
        }

        runningMessageHandler = receiveOutput;
        window.addEventListener('message', receiveOutput);
    }

    tabs.forEach((tab, index) => {
        tab.addEventListener('click', () => renderLanguage(tab.dataset.language));
        tab.addEventListener('keydown', (event) => {
            if (!['ArrowLeft', 'ArrowRight', 'Home', 'End'].includes(event.key)) return;
            event.preventDefault();
            const nextIndex = event.key === 'Home' ? 0
                : event.key === 'End' ? tabs.length - 1
                    : (index + (event.key === 'ArrowRight' ? 1 : -1) + tabs.length) % tabs.length;
            tabs[nextIndex].focus();
            renderLanguage(tabs[nextIndex].dataset.language);
        });
    });

    editor.addEventListener('input', updateLineNumbers);
    editor.addEventListener('scroll', () => {
        lineNumbers.scrollTop = editor.scrollTop;
    });
    editor.addEventListener('keydown', (event) => {
        if (event.key !== 'Tab') return;
        event.preventDefault();
        editor.setRangeText('    ', editor.selectionStart, editor.selectionEnd, 'end');
        updateLineNumbers();
    });
    runButton.addEventListener('click', () => {
        if (activeKey === 'javascript') {
            runJavaScript(editor.value);
        } else {
            terminalOutput.textContent = getSnippetOutput(activeKey, editor.value) ?? simulateOutput(activeKey, editor.value);
        }
    });

    renderLanguage(activeKey);
})();
