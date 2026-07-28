# -*- coding: utf-8 -*-
"""Helper to emit gen-blog-posts-2-7.mjs in chunks. Run from repo root."""
import json
import sys
from pathlib import Path

OUT = Path("scripts/gen-blog-posts-2-7.mjs")


def wc(post):
    n = 0
    for s in post["sections"]:
        n += len(" ".join(s["paragraphs"]).split())
    return n


def emit_post(obj, indent=2):
    """Serialize a post as JS object literal (strings escaped)."""
    return "  " + json.dumps(obj, indent=2, ensure_ascii=False).replace("\n", "\n  ")


# Will be filled by subsequent chunk scripts / this file
POSTS = []
