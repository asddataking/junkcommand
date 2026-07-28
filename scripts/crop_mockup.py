from PIL import Image
from pathlib import Path

im = Image.open(
    r"C:\Users\danog\Desktop\Code 2\junkcommand\junkcommand\public\images\mockup-source.jpg"
).convert("RGB")
out = Path(r"C:\Users\danog\Desktop\Code 2\junkcommand\junkcommand\public\images")


def save(box, name, size):
    crop = im.crop(box).resize(size, Image.Resampling.LANCZOS)
    crop.save(out / f"{name}.webp", "WEBP", quality=90, method=6)
    crop.save(out / f"{name}.png", "PNG")
    print(name, box, "->", size)


# Crew only — stop before the services section divider
save((252, 68, 485, 298), "dan-gage-luna", (1000, 1150))

# Soft hero bg from same photo band
save((240, 60, 485, 300), "junk-command-hero", (1100, 1300))

# Truck
save((365, 78, 485, 250), "trailer", (900, 900))

# Luna only — stop above the mobile action bar
save((10, 948, 158, 1008), "luna-mascot", (700, 700))
