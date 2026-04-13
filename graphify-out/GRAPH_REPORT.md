# Graph Report - .  (2026-04-14)

## Corpus Check
- Large corpus: 32 files · ~606,243 words. Semantic extraction will be expensive (many Claude tokens). Consider running on a subfolder, or use --no-semantic to run AST-only.

## Summary
- 19 nodes · 10 edges · 11 communities detected
- Extraction: 90% EXTRACTED · 10% INFERRED · 0% AMBIGUOUS · INFERRED: 1 edges (avg confidence: 0.9)
- Token cost: 0 input · 0 output

## Community Hubs (Navigation)
- [[_COMMUNITY_SubPaper Core App|SubPaper Core App]]
- [[_COMMUNITY_Testimonials UI|Testimonials UI]]
- [[_COMMUNITY_Details Page Logic|Details Page Logic]]
- [[_COMMUNITY_Reddit Community|Reddit Community]]
- [[_COMMUNITY_Sharing Integration|Sharing Integration]]
- [[_COMMUNITY_Vite Configuration|Vite Configuration]]
- [[_COMMUNITY_Application Entry Point|Application Entry Point]]
- [[_COMMUNITY_App Component|App Component]]
- [[_COMMUNITY_Features UI|Features UI]]
- [[_COMMUNITY_Footer UI|Footer UI]]
- [[_COMMUNITY_Hero Section UI|Hero Section UI]]

## God Nodes (most connected - your core abstractions)
1. `SubPaper Mobile App` - 6 edges
2. `r/SubPaper Community` - 2 edges
3. `Social Sharing` - 2 edges
4. `SubPaper Logo` - 1 edges
5. `EtherNode` - 1 edges
6. `Anime Wallpapers` - 1 edges
7. `Mobile Wallpapers` - 1 edges
8. `Wallpaper Search` - 1 edges
9. `Android Intent Resolver` - 1 edges

## Surprising Connections (you probably didn't know these)
- `SubPaper Mobile App` --references--> `SubPaper Logo`  [EXTRACTED]
  screenshots/Screenshot_20260413_195446.jpg.jpeg → public/logo.png
- `SubPaper Mobile App` --references--> `r/SubPaper Community`  [EXTRACTED]
  screenshots/Screenshot_20260413_195446.jpg.jpeg → screenshots/Screenshot_20260413_195616.jpg.jpeg
- `SubPaper Mobile App` --conceptually_related_to--> `Social Sharing`  [EXTRACTED]
  screenshots/Screenshot_20260413_195446.jpg.jpeg → screenshots/Screenshot_20260413_195607_IntentResolver.jpg.jpeg
- `SubPaper Mobile App` --conceptually_related_to--> `Anime Wallpapers`  [EXTRACTED]
  screenshots/Screenshot_20260413_195446.jpg.jpeg → screenshots/Screenshot_20260413_195334.jpg.jpeg
- `SubPaper Mobile App` --conceptually_related_to--> `Mobile Wallpapers`  [EXTRACTED]
  screenshots/Screenshot_20260413_195446.jpg.jpeg → screenshots/Screenshot_20260413_195315.jpg.jpeg

## Communities

### Community 0 - "SubPaper Core App"
Cohesion: 0.4
Nodes (5): SubPaper Mobile App, Anime Wallpapers, Mobile Wallpapers, Wallpaper Search, SubPaper Logo

### Community 1 - "Testimonials UI"
Cohesion: 1.0
Nodes (0): 

### Community 2 - "Details Page Logic"
Cohesion: 1.0
Nodes (0): 

### Community 3 - "Reddit Community"
Cohesion: 1.0
Nodes (2): EtherNode, r/SubPaper Community

### Community 4 - "Sharing Integration"
Cohesion: 1.0
Nodes (2): Android Intent Resolver, Social Sharing

### Community 5 - "Vite Configuration"
Cohesion: 1.0
Nodes (0): 

### Community 6 - "Application Entry Point"
Cohesion: 1.0
Nodes (0): 

### Community 7 - "App Component"
Cohesion: 1.0
Nodes (0): 

### Community 8 - "Features UI"
Cohesion: 1.0
Nodes (0): 

### Community 9 - "Footer UI"
Cohesion: 1.0
Nodes (0): 

### Community 10 - "Hero Section UI"
Cohesion: 1.0
Nodes (0): 

## Knowledge Gaps
- **6 isolated node(s):** `SubPaper Logo`, `EtherNode`, `Anime Wallpapers`, `Mobile Wallpapers`, `Wallpaper Search` (+1 more)
  These have ≤1 connection - possible missing edges or undocumented components.
- **Thin community `Testimonials UI`** (2 nodes): `Testimonials.tsx`, `Testimonials()`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Details Page Logic`** (2 nodes): `handleMouseMove()`, `Details.tsx`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Reddit Community`** (2 nodes): `EtherNode`, `r/SubPaper Community`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Sharing Integration`** (2 nodes): `Android Intent Resolver`, `Social Sharing`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Vite Configuration`** (1 nodes): `vite.config.ts`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Application Entry Point`** (1 nodes): `main.tsx`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `App Component`** (1 nodes): `App.tsx`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Features UI`** (1 nodes): `Features.tsx`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Footer UI`** (1 nodes): `Footer.tsx`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Hero Section UI`** (1 nodes): `Hero.tsx`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `SubPaper Mobile App` connect `SubPaper Core App` to `Reddit Community`, `Sharing Integration`?**
  _High betweenness centrality (0.170) - this node is a cross-community bridge._
- **Why does `r/SubPaper Community` connect `Reddit Community` to `SubPaper Core App`?**
  _High betweenness centrality (0.046) - this node is a cross-community bridge._
- **Why does `Social Sharing` connect `Sharing Integration` to `SubPaper Core App`?**
  _High betweenness centrality (0.046) - this node is a cross-community bridge._
- **What connects `SubPaper Logo`, `EtherNode`, `Anime Wallpapers` to the rest of the system?**
  _6 weakly-connected nodes found - possible documentation gaps or missing edges._