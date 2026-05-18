import os
import re
import sys

files_to_check = [
    "docs/notas-fiscais/cobertura-nacional.md",
    "docs/notas-fiscais/manuais-e-esquemas.md",
    "docs/documentos-oficiais-portal-nfe.md"
]

def check_links(file_path):
    broken_links = []
    if not os.path.exists(file_path):
        return [f"File not found: {file_path}"]
    
    with open(file_path, 'r', encoding='utf-8') as f:
        content = f.read()
    
    # Matches [text](link)
    links = re.findall(r'\[.*?\]\((.*?)\)', content)
    for link in links:
        # Ignore external URLs, mailto and anchors
        if link.startswith(('http://', 'https://', 'mailto:', '#')):
            continue
        
        # Remove anchor from link
        link_path = link.split('#')[0]
        if not link_path:
            continue
            
        # Target path is relative to the current file
        base_dir = os.path.dirname(file_path)
        target_path = os.path.normpath(os.path.join(base_dir, link_path))
        
        # Check if the file exists
        if not os.path.exists(target_path):
            # Try adding .md extension
            if not target_path.endswith(".md") and os.path.exists(target_path + ".md"):
                continue
            # If it's a directory, check for index.md
            if os.path.isdir(target_path):
                 if not os.path.exists(os.path.join(target_path, "index.md")):
                     broken_links.append(link)
            else:
                broken_links.append(link)
    return broken_links

all_broken = {}
for md_file in files_to_check:
    broken = check_links(md_file)
    if broken:
        all_broken[md_file] = broken

if all_broken:
    for file, links in all_broken.items():
        print(f"File: {file}")
        for link in links:
            print(f"  Broken link: {link}")
    sys.exit(1)
else:
    print("No broken internal links found in specified files.")
