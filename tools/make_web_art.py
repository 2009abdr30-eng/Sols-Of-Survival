import os
from PIL import Image, ImageDraw, ImageFilter

SRC = r"D:\Oldies\2024 last period\My Life\competition\Nasa 2026\Assets"
DST = r"D:\Oldies\2024 last period\My Life\competition\Nasa 2026\Webgame\nasa-space-apps-outpost-feature-v2\nasa-space-apps-outpost-feature-v2\assets"
C = r"C:\Users\abd20\flow-mcp-out\MarsAssets-C"

for i, n in enumerate(["mg-brush", "mg-seed-potato", "mg-seed-tomato", "mg-nozzle", "mg-unripe"], 1):
    out = os.path.join(SRC, n + ".png")
    Image.open(os.path.join(C, f"scene-{i:02d}.jpeg")).convert("RGB").save(out, optimize=True)

OBJECTS = {
    "habitat": ("habitat", 640),
    "st-power": ("station-power", 512), "st-power-moon": ("station-power-moon", 512),
    "st-greenhouse": ("station-greenhouse", 512), "st-water": ("station-water", 512),
    "st-shield": ("station-shield", 512), "st-lab": ("station-lab", 512),
    "wall-ne": ("wall-ne", 384), "wall-nw": ("wall-nw", 384), "wall-corner": ("wall-corner", 384),
    "crate": ("crate", 384), "rocket-lander": ("rocket-lander", 512),
    "window-mars": ("window-mars", 512), "window-moon": ("window-moon", 512),
}
PROPS = ["mg-panel-clean", "mg-brush", "mg-vpanel", "mg-sun-low", "mg-battery", "mg-plug-yellow", "mg-plug-blue",
         "mg-plug-green", "mg-tray-empty", "mg-seed-lettuce", "mg-seed-potato", "mg-seed-tomato", "mg-nozzle",
         "mg-growlight", "mg-lettuce-ripe", "mg-tomato-ripe", "mg-potato-ripe", "mg-unripe", "mg-food-crate",
         "mg-ice-block", "mg-ice-block-moon", "mg-drill-pipe", "mg-heater-tank", "mg-steam", "mg-filter-column",
         "mg-layer-gravel", "mg-layer-charcoal", "mg-layer-membrane", "mg-cup-dirty", "mg-dome-cutaway",
         "mg-brick", "mg-brick-moon", "mg-brick-press", "mg-wall-tanks", "mg-moon-horizon"]
BACKGROUNDS = {"bg-title-mars": "bg-mars", "bg-space": "bg-space", "bg-control-room": "bg-control-room",
               "int-power": "interior-power-mars", "bg-mars-plot": "plot-mars-flat"}


def cut_out(im):
    """RGBA with the border-connected near-white area made transparent."""
    rgb = im.convert("RGB")
    w, h = rgb.size
    r, g, b = rgb.split()
    lo = Image.eval(Image.merge("RGB", (r, g, b)).convert("L"), lambda v: v)
    mn = Image.fromarray(__import__("numpy").asarray(rgb).min(axis=2))
    mx = Image.fromarray(__import__("numpy").asarray(rgb).max(axis=2))
    import numpy as np
    a_mn, a_mx = np.asarray(mn), np.asarray(mx)
    white = ((a_mn > 228) & (a_mx - a_mn < 30)).astype(np.uint8) * 255
    mask = Image.fromarray(white, "L")
    draw = ImageDraw.Draw(mask)
    arr = np.asarray(mask)
    seeds = [(x, 0) for x in range(0, w, 4)] + [(x, h - 1) for x in range(0, w, 4)] + \
            [(0, y) for y in range(0, h, 4)] + [(w - 1, y) for y in range(0, h, 4)]
    for (x, y) in seeds:
        if mask.getpixel((x, y)) == 255:
            ImageDraw.floodfill(mask, (x, y), 128, thresh=0)
    bg = np.asarray(mask) == 128
    alpha = Image.fromarray(np.where(bg, 0, 255).astype(np.uint8), "L")
    alpha = alpha.filter(ImageFilter.MinFilter(3)).filter(ImageFilter.GaussianBlur(0.8))
    out = rgb.convert("RGBA")
    out.putalpha(alpha)
    return out


def square_bottom(im, pad_frac=0.04):
    bbox = im.getchannel("A").point(lambda v: 255 if v > 20 else 0).getbbox()
    if bbox:
        im = im.crop(bbox)
    w, h = im.size
    side = int(max(w, h) * (1 + pad_frac))
    canvas = Image.new("RGBA", (side, side), (0, 0, 0, 0))
    canvas.paste(im, ((side - w) // 2, side - h - int(side * pad_frac / 2)), im)
    return canvas


def tight(im, pad=8):
    bbox = im.getchannel("A").point(lambda v: 255 if v > 20 else 0).getbbox()
    if bbox:
        im = im.crop(bbox)
    w, h = im.size
    canvas = Image.new("RGBA", (w + 2 * pad, h + 2 * pad), (0, 0, 0, 0))
    canvas.paste(im, (pad, pad), im)
    return canvas


def load(name):
    for ext in (".png", ".jpg"):
        p = os.path.join(SRC, name + ext)
        if os.path.exists(p):
            return Image.open(p)
    raise FileNotFoundError(name)


def shrink(im, max_side):
    im = im.copy()
    im.thumbnail((max_side, max_side), Image.LANCZOS)
    return im


report = []
for src, (dst, size) in OBJECTS.items():
    im = cut_out(shrink(load(src), 1024))
    im = shrink(square_bottom(im), size)
    im.save(os.path.join(DST, dst + ".webp"), "WEBP", quality=88, method=6)
    report.append((dst, im.size))
for src in PROPS:
    im = cut_out(shrink(load(src), 1024))
    im = shrink(tight(im), 512)
    im.save(os.path.join(DST, src + ".webp"), "WEBP", quality=88, method=6)
    report.append((src, im.size))
for src, dst in BACKGROUNDS.items():
    im = load(src).convert("RGB")
    im.thumbnail((1920, 1920), Image.LANCZOS)
    im.save(os.path.join(DST, dst + ".webp"), "WEBP", quality=84, method=6)
    report.append((dst, im.size))

total = 0
for name, size in report:
    kb = os.path.getsize(os.path.join(DST, name + ".webp")) // 1024
    total += kb
    print(f"{name:22s} {size[0]}x{size[1]}  {kb} KB")
print(f"{len(report)} files, {total} KB total")
