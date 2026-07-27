---
version: 1.0.0
name: Indian-Icon-Design-System
description: |
  Un'identità visiva che fonde l'eleganza della tradizione indiana con un approccio contemporaneo e raffinato. Il sistema si basa su una palette cromatica calda e lussuosa (Bordeaux e Oro) su uno sfondo crema riposante. La tipografia serif evoca artigianalità e storia, mentre le geometrie morbide e gli effetti di sfocatura (backdrop-blur) portano il design nel presente.

colors:
  primary: "#722F37"      # Bordeaux (Vino/Spezie)
  secondary: "#C5A059"    # Oro (Spezie/Lusso)
  canvas: "#FDFBF7"       # Crema (Sfondo principale)
  on-primary: "#ffffff"   # Bianco per testi su bordeaux
  ink: "#722F37"          # Testo principale
  gold-light: "rgba(197, 160, 89, 0.2)" # Oro trasparente per elementi decorativi
  overlay-dark: "rgba(0, 0, 0, 0.6)"    # Overlay per Hero

typography:
  display:
    fontFamily: Bookman / Playfair Display
    fontSize: 48px - 96px
    fontWeight: 700
    lineHeight: 1.1
    textTransform: none
  heading:
    fontFamily: Playfair Display
    fontSize: 32px - 48px
    fontWeight: 600
    lineHeight: 1.2
  body:
    fontFamily: Bookman
    fontSize: 16px - 20px
    fontWeight: 400
    lineHeight: 1.6
  utility:
    fontFamily: sans-serif (proposto)
    fontSize: 14px
    fontWeight: 700
    letterSpacing: 0.1em
    textTransform: uppercase

rounded:
  none: 0px
  md: 12px
  lg: 20px
  full: 9999px

spacing:
  section: 80px
  md: 24px
  sm: 16px

components:
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-primary}"
    rounded: "{rounded.full}"
    hover: "{colors.secondary}"
  button-gold:
    backgroundColor: "{colors.secondary}"
    textColor: "{colors.on-primary}"
    rounded: "{rounded.full}"
  card-menu:
    backgroundColor: "{colors.canvas}"
    rounded: "{rounded.lg}"
    shadow: "xl"

---

## Overview

Indian Icon è un'esperienza sensoriale tradotta in design. Il sistema evita il minimalismo freddo a favore di una ricchezza cromatica che richiama le spezie e l'accoglienza indiana. 

**Caratteristiche Chiave:**
- **Palette Speziata:** Il Bordeaux (`{colors.primary}`) domina come colore della passione e del vino, bilanciato dall'Oro (`{colors.secondary}`) che richiama curcuma e zafferano.
- **Tipografia Serif:** L'uso estensivo di font graziati comunica autenticità e tradizione.
- **Morbidezza Visiva:** Angoli arrotondati (`{rounded.lg}`) e ombre morbide creano un'atmosfera accogliente e non aggressiva.
- **Layering:** Uso di backdrop-blur e overlay trasparenti per dare profondità alle immagini della terrazza e dei piatti.

## Principi di Design
1. **Tradizione non Statica:** Usare font classici ma con layout moderni e ariosi.
2. **Contrasto Elegante:** Testo scuro su fondo crema, o testo oro/bianco su fondo bordeaux.
3. **Immagini Protagoniste:** La fotografia deve essere calda e mostrare la texture dei piatti e l'eleganza della location.
