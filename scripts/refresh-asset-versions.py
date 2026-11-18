"""HTMLのJS/CSS参照に内容ハッシュを付け、更新時のキャッシュ残留を防ぐ。"""

from hashlib import sha256
from pathlib import Path
import re


ROOT = Path(__file__).resolve().parent.parent
REFERENCE = re.compile(
    r'((?:src|href)=")'
    r'(\./(?:js/[^"?]+\.js|css/[^"?]+\.css))'
    r'(?:\?v=[0-9a-f]+)?(")'
)


def versioned(match):
    prefix, relative_path, suffix = match.groups()
    digest = sha256((ROOT / relative_path).read_bytes()).hexdigest()[:12]
    return f"{prefix}{relative_path}?v={digest}{suffix}"


def main():
    for name in ("index.html", "game.html"):
        page = ROOT / name
        original = page.read_text()
        updated = REFERENCE.sub(versioned, original)
        if updated != original:
            page.write_text(updated)
            print(f"更新: {name}")
        else:
            print(f"変更なし: {name}")


if __name__ == "__main__":
    main()
