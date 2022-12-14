---
layout: post
title: KAPS Allgemeines
---

Die KAPS GmbH mit Sitz in Emersacker bei Augsburg ist seit 35 Jahren im Bereich Software, Organisation und Beratung für den Fachhandel tätig.
Mit ASSISTENT vertreibt und entwickelt die KAPS GmbH ein effizientes ERP-System zur Optimierung komplexer Geschäftsprozesse.

### Workflow

<pre class="mermaid">
erDiagram
    CUSTOMER }|..|{ DELIVERY-ADDRESS : has
    CUSTOMER ||--o{ ORDER : places
    CUSTOMER ||--o{ INVOICE : "liable for"
    DELIVERY-ADDRESS ||--o{ ORDER : receives
    INVOICE ||--|{ ORDER : covers
    ORDER ||--|{ ORDER-ITEM : includes
    PRODUCT-CATEGORY ||--|{ PRODUCT : contains
    PRODUCT ||--o{ ORDER-ITEM : "ordered in"
</pre>

<pre class="mermaid">
mindmap
  root((mindmap))
    Origins
      Long history
      ::icon(fa fa-book)
      Popularisation
        British popular psychology author Tony Buzan
    Research
      On effectivness<br/>and features
      On Automatic creation
        Uses
            Creative techniques
            Strategic planning
            Argument mapping
    Tools
      Pen and paper
      Mermaid
</pre>