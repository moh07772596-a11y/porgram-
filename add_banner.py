import re, glob, shutil

BANNER = '''<div id="revolution-banner" class="revolution-banner">
  <span>🇩🇿 01 نوفمبر 1954 | المجد والخلود لشهداء الجزائر الأبرار</span>
  <button id="close-banner-btn" onclick="document.getElementById('revolution-banner').style.display='none'">&times;</button>
</div>
'''

BANNER_CSS = '''
.revolution-banner {
  width: 100%;
  box-sizing: border-box;
  background-color: #0f172a;
  color: #ffffff;
  text-align: center;
  padding: 10px 15px;
  font-size: 14px;
  font-weight: bold;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 12px;
  border-bottom: 3px solid #ef4444;
  position: relative;
  z-index: 99999;
}

.revolution-banner button {
  background: transparent;
  border: none;
  color: #ffffff;
  font-size: 20px;
  cursor: pointer;
  line-height: 1;
}
'''

# 1. إدراج البنر وتنظيف الـ HTML
for path in glob.glob("*.html"):
    html = open(path, encoding="utf-8").read()
    shutil.copy(path, path + ".bak")

    # إزالة أي بنر قديم أو نصوص Dismiss المتداخلة
    html = re.sub(r'<div id="revolution-banner".*?</div>\s*', '', html, flags=re.S)
    html = re.sub(r'<div[^>]*class="[^"]*announcement[^"]*"*.*?</div>\s*', '', html, flags=re.S) # إزالة البنر القديم المكسور إن وجد

    # إدراج البنر الجديد بعد <body> مباشرة
    html, n = re.subn(r'(<body[^>]*>)', r'\1\n' + BANNER, html, count=1)
    print(f"الصفحة {path}: " + ("تم إضافة البنر بنجاح" if n else "لم يوجد وسم <body>"))

    open(path, "w", encoding="utf-8").write(html)

# 2. إضافة التنسيق تلقائياً إلى style.css
css_path = "style.css"
try:
    css_content = open(css_path, encoding="utf-8").read()
    if ".revolution-banner" not in css_content:
        with open(css_path, "a", encoding="utf-8") as f:
            f.write("\n" + BANNER_CSS)
        print("تم إضافة التنسيقات إلى style.css بنجاح!")
    else:
        print("تنسيقات البنر موجودة بالفعل في style.css")
except FileNotFoundError:
    print("ملف style.css غير موجود في هذا المجلد.")
