"""Regenerate the original SVG demo artwork. Python standard library only."""
from pathlib import Path
import random

DEST = Path(__file__).resolve().parents[1] / "assets" / "images" / "games"
DEST.mkdir(parents=True, exist_ok=True)


def rect(x, y, w, h, fill, extra=""):
    return f'<rect x="{x}" y="{y}" width="{w}" height="{h}" fill="{fill}" {extra}/>'


def text(x, y, value, size=14, fill="#ffffff", extra=""):
    return f'<text x="{x}" y="{y}" text-anchor="middle" fill="{fill}" font-family="Arial,sans-serif" font-size="{size}" {extra}>{value}</text>'


def wrap(name, shapes, icon=False):
    view = "210 0 540 540" if icon else "0 0 960 540"
    return f'<svg xmlns="http://www.w3.org/2000/svg" viewBox="{view}" role="img"><title>{name} — original sample artwork</title>{shapes}</svg>'


def forest(scene=0, icon=False):
    rng = random.Random(42 + scene)
    s = '<defs><linearGradient id="sky" x2="0" y2="1"><stop stop-color="#102e31"/><stop offset=".6" stop-color="#295d54"/><stop offset="1" stop-color="#9db576"/></linearGradient><radialGradient id="light"><stop stop-color="#e0ffa2" stop-opacity=".7"/><stop offset="1" stop-color="#9fffb9" stop-opacity="0"/></radialGradient></defs>'
    s += rect(0, 0, 960, 540, "url(#sky)")
    s += '<circle cx="505" cy="267" r="190" fill="url(#light)"/>'
    for x in range(0, 960, 55):
        height = rng.randrange(170, 380)
        s += rect(x, 0, rng.randrange(12, 25), height, "#173e3c", 'opacity=".65"')
        s += rect(x - 15, height - 40, 43, 8, "#244e45")
    s += '<path d="M140 0h30l210 480h-110zM400 0h12l220 480h-70zM600 0h15l160 480h-55z" fill="#dcffd6" opacity=".045"/>'
    for layer, color in enumerate(["#244b42", "#1a4037", "#12372f"]):
        for _ in range(18):
            x, y = rng.randrange(-80, 960), rng.randrange(-20, 90 + 20 * layer)
            s += rect(x, y, rng.randrange(40, 150), rng.randrange(15, 45), color)
    for x in [100, 186, 736, 850]:
        s += rect(x, 80, 37, 365, "#143930") + rect(x + 6, 105, 8, 305, "#204d3e")
        for _ in range(10):
            y = rng.randrange(80, 410)
            s += rect(x - rng.randrange(0, 20), y, rng.randrange(35, 65), 9, "#315e43")
    # A luminous stepped arch, made entirely of little stone blocks.
    for row in range(10):
        y = 220 + row * 16
        x = 427 - min(row, 4) * 8
        s += rect(x, y, 25, 15, ["#668f69", "#82a57b", "#71977a"][row % 3])
        s += rect(1000 - x, y, 25, 15, ["#71977a", "#92b588", "#668f69"][row % 3])
    s += rect(450, 204, 104, 18, "#84a87e") + rect(471, 193, 62, 15, "#a2c793")
    s += '<path d="M426 380V271l40-40h73l35 40v109" fill="#172f2c"/><path d="M435 374V273l33-33h64l33 33v101" fill="none" stroke="#a9e4ab" stroke-width="3" opacity=".8"/>'
    s += rect(479, 248, 8, 22, "#c5eaa1") + rect(473, 255, 20, 7, "#c5eaa1")
    ground = 410 if scene != 2 else 435
    s += rect(0, ground, 960, 540 - ground, "#112f2d")
    for _ in range(95):
        x, y = rng.randrange(960), rng.randrange(ground, 530)
        s += rect(x, y, rng.randrange(8, 40), rng.randrange(3, 10), rng.choice(["#1e4540", "#28514a", "#2f5e4d", "#183b35"]))
    for x, y, width in [(220, 398, 182), (414, 387, 179), (661, 390, 159), (65, 412, 125)]:
        if scene == 2:
            y -= 20 if x > 400 else 0
        s += rect(x, y, width, 17, "#4a7962") + rect(x, y - 5, width, 8, "#82ad6a")
        for xx in range(x + 5, x + width, 13):
            s += rect(xx, y - rng.randrange(5, 14), 4, 10, "#88b76c")
    # White-cloaked traveler.
    px = 360 if scene != 3 else 540
    py = 370 if scene != 2 else 355
    s += rect(px + 3, py - 24, 22, 20, "#e6eed0") + rect(px, py - 18, 29, 12, "#f5f3da")
    s += rect(px + 6, py - 6, 17, 20, "#afc4a1") + rect(px + 2, py + 2, 25, 15, "#dbe4bc")
    s += rect(px + 7, py + 17, 6, 7, "#253a32") + rect(px + 19, py + 17, 6, 7, "#253a32")
    s += rect(px + 19, py - 17, 4, 4, "#243d35") + rect(px + 27, py + 1, 4, 17, "#796849")
    for _ in range(43):
        x, y = rng.randrange(160, 820), rng.randrange(150, 430)
        size = rng.choice([2, 2, 3, 4])
        s += rect(x, y, size, size, "#d2f5a9", f'opacity="{rng.uniform(.2, .9):.2f}"')
    for x in [257, 617, 706]:
        s += rect(x, 389, 3, 16, "#75d5bc") + rect(x - 4, 382, 11, 7, "#b3f5c2")
    if icon:
        s += text(480, 118, "MOSSBOUND", 48, "#eef2cd", 'font-weight="900" letter-spacing="1"')
        s += text(480, 143, "A LITTLE LIGHT. A BIG ADVENTURE.", 9, "#bbd0a8", 'letter-spacing="2"')
        s += text(480, 501, "WANDER INTO THE UNKNOWN", 9, "#a3c3a2", 'letter-spacing="3"')
    else:
        s += text(95, 34, "MOSSBOUND", 16, "#dcebc7", 'font-weight="700" letter-spacing="2"')
        s += text(865, 34, f"FOREST / 0{scene}", 11, "#dcebc7", 'letter-spacing="2"')
    return wrap("Mossbound", s, icon)


def cube(x, y, color, size=46):
    top, left, right = color
    return f'<g stroke="#ffffff" stroke-opacity=".1" stroke-width="1"><path d="M{x} {y-size/2}l{size} {size/2}-{size} {size/2}-{size}-{size/2}z" fill="{top}"/><path d="M{x-size} {y}l{size} {size/2}v{size}l-{size}-{size/2}z" fill="{left}"/><path d="M{x+size} {y}l-{size} {size/2}v{size}l{size}-{size/2}z" fill="{right}"/></g>'


def orbit(scene=0, icon=False):
    rng = random.Random(29)
    s = '<defs><radialGradient id="space"><stop stop-color="#6565a3"/><stop offset="1" stop-color="#292946"/></radialGradient><radialGradient id="halo"><stop stop-color="#bdffe4" stop-opacity=".3"/><stop offset="1" stop-color="#a1ecf5" stop-opacity="0"/></radialGradient></defs>'
    s += rect(0, 0, 960, 540, "url(#space)")
    for _ in range(115):
        x, y = rng.randrange(960), rng.randrange(540)
        s += f'<circle cx="{x}" cy="{y}" r="{rng.choice([.7, 1, 1.5])}" fill="#e0dcff" opacity="{rng.uniform(.15,.7):.2f}"/>'
    s += '<ellipse cx="480" cy="305" rx="231" ry="115" fill="none" stroke="#b3aee9" stroke-opacity=".3" transform="rotate(-22 480 305)"/><ellipse cx="480" cy="305" rx="240" ry="120" fill="none" stroke="#b3aee9" stroke-opacity=".15" transform="rotate(32 480 305)"/>'
    s += '<circle cx="480" cy="290" r="183" fill="url(#halo)"/>'
    colors = [("#dedeee", "#9c9abb", "#b9b7d6"), ("#d6fff2", "#78c2bd", "#ade1d6"), ("#b9b0ed", "#686494", "#9185c4")]
    positions = [(480, 233), (526, 256), (434, 256), (572, 279), (388, 279), (572, 325), (388, 325), (434, 348), (480, 371), (526, 348)]
    if scene == 2:
        positions = [(480, 210), (526, 233), (572, 256), (388, 279), (434, 302), (480, 325), (526, 348), (572, 325), (388, 371)]
    for i, (x, y) in enumerate(positions):
        s += cube(x, y, colors[1 if i in [0, 4, 8] else 0], 46)
    s += cube(480, 211 if scene != 2 else 188, ("#fffffa", "#dedde9", "#efeef4"), 13)
    s += '<path d="M475 213l5 3v5l-5-3zM484 216l4-2v5l-4 2z" fill="#575777"/>'
    s += cube(635, 195, colors[2], 18) + cube(324, 398, colors[1], 14)
    s += '<path d="M400 160v12m-6-6h12M650 374v12m-6-6h12M297 238v8m-4-4h8" stroke="#d6d2ff" stroke-width="1.5"/>'
    s += '<ellipse cx="481" cy="367" rx="18" ry="9" fill="none" stroke="#f6ffd0" stroke-width="3"/>'
    if icon:
        s += text(480, 104, "ORBIT SHIFT", 48, "#eeecff", 'font-weight="900" letter-spacing="-1"')
        s += text(480, 133, "A CHANGE OF PERSPECTIVE.", 10, "#c0bfdf", 'letter-spacing="2.5"')
        s += text(480, 495, "TURN YOUR WORLD AROUND", 9, "#c0bfdf", 'letter-spacing="3"')
    else:
        s += text(103, 35, "ORBIT SHIFT", 16, "#e8e5ff", 'font-weight="700" letter-spacing="2"')
        s += text(857, 35, f"STAGE / 0{scene}", 11, "#e8e5ff", 'letter-spacing="2"')
    return wrap("Orbit Shift", s, icon)


def neon(scene=0, icon=False):
    rng = random.Random(71 + scene)
    s = '<defs><linearGradient id="sky" x2="0" y2="1"><stop stop-color="#242042"/><stop offset=".53" stop-color="#8d3d72"/><stop offset="1" stop-color="#fa8a86"/></linearGradient><linearGradient id="sun" x2="0" y2="1"><stop stop-color="#ffe3a3"/><stop offset="1" stop-color="#ef78a7"/></linearGradient><linearGradient id="road" x2="0" y2="1"><stop stop-color="#543657"/><stop offset="1" stop-color="#161e34"/></linearGradient><clipPath id="sun-cut"><circle cx="480" cy="246" r="91"/></clipPath></defs>'
    s += rect(0, 0, 960, 540, "url(#sky)")
    s += '<circle cx="480" cy="246" r="91" fill="url(#sun)"/>'
    for y in range(247, 342, 13):
        s += rect(380, y, 200, 4 + (y - 247) // 15, "#a74d7e", 'clip-path="url(#sun-cut)"')
    s += '<path d="M0 306l95-63 59 30 67-41 75 69 53-31 71 48 60-15 60 15 81-50 40 29 86-60 82 46 69-51 62 74v98H0z" fill="#39304e"/>'
    for side in [0, 1]:
        for i in range(12):
            x = i * 34 if side == 0 else 570 + i * 35
            y = rng.randrange(206, 309)
            width = rng.randrange(24, 45)
            s += rect(x, y, width, 380 - y, rng.choice(["#24243e", "#302540", "#2d2545"]))
            s += rect(x, y, width, 2, "#bc5385")
            for yy in range(y + 11, 359, 14):
                for xx in range(x + 6, x + width - 3, 10):
                    if rng.random() > .45:
                        s += rect(xx, yy, 3, 5, rng.choice(["#ac639b", "#6c739b", "#e494b0"]))
    s += '<path d="M0 367h960v173H0z" fill="#29243d"/><path d="M443 338h74l329 202H114z" fill="url(#road)"/>'
    for x in range(-300, 1500, 115):
        s += f'<path d="M480 338L{x} 540" stroke="#a94f92" stroke-width="1" opacity=".6"/>'
    for y in [354, 371, 394, 426, 470, 526]:
        s += f'<path d="M0 {y}h960" stroke="#ae4d8d" stroke-width="1" opacity=".45"/>'
    s += '<path d="M443 338L114 540M517 338L846 540" stroke="#fd92c9" stroke-width="4"/>'
    s += '<path d="M474 353h12l2 16h-16zM471 387h18l5 27h-28zM463 449h34l12 56h-58z" fill="#e6acd0" opacity=".7"/>'
    # A hand-drawn, rear-view arcade car.
    dx = 0 if scene != 2 else 24
    s += f'<g transform="translate({dx} 0)"><ellipse cx="480" cy="483" rx="110" ry="15" fill="#e173bd" opacity=".18"/><path d="M393 436l30-45h111l35 45 13 4v45H379v-43z" fill="#ce9aaf"/><path d="M422 396h107l25 36H404z" fill="#272b48"/><path d="M429 399h94l18 27H413z" fill="#626685"/><path d="M379 444h203v35H379z" fill="#71637e"/><path d="M386 450h59v10h-59zM515 450h59v10h-59z" fill="#ffb1b0"/><path d="M390 449h50v3h-50zM520 449h50v3h-50z" fill="#ffe9c9"/><path d="M454 457h49v16h-49z" fill="#28263c"/><path d="M464 461h29v7h-29z" fill="#d7c6c5"/><path d="M379 478h203v8H379z" fill="#272539"/><path d="M386 480h24v13h-24zM550 480h25v13h-25z" fill="#181c2a"/><path d="M388 438h183v5H388z" fill="#f1bfcc"/></g>'
    if icon:
        s += text(480, 107, "NEON DRIFT", 48, "#fce6ee", 'font-weight="900" font-style="italic" letter-spacing="-1"')
        s += text(480, 135, "CHASE THE NIGHT.", 10, "#e7b1d1", 'letter-spacing="4"')
    else:
        s += text(107, 34, "NEON DRIFT", 16, "#ffe1ef", 'font-weight="700" font-style="italic" letter-spacing="2"')
        s += text(860, 34, "LAP 01 / 03", 13, "#ffe1ef", 'letter-spacing="2"')
        s += text(860, 493, "128 KM/H", 23, "#ffe1ef", 'font-style="italic" font-weight="700"')
    return wrap("Neon Drift", s, icon)


for name, draw, count in [("mossbound", forest, 3), ("orbit-shift", orbit, 2), ("neon-drift", neon, 2)]:
    (DEST / f"{name}.svg").write_text(draw(icon=True), encoding="utf-8")
    for scene in range(1, count + 1):
        (DEST / f"{name}-scene-{scene}.svg").write_text(draw(scene=scene), encoding="utf-8")
print("Generated 10 original SVG illustrations.")
