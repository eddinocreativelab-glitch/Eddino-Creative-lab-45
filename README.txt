EDDINO CREATIVE LAB - WEBSITE (standalone, version 13)
=======================================================

HOW TO OPEN
-----------
Double-click index.html (or right-click > Open with > your browser).
No server, no install. Fonts load from Google when you are online.
The EN / FR switch is in the top bar.

FOLDER STRUCTURE
----------------
index.html          The page skeleton: top menu, footer, list of scripts.
                    Edit the menu links or footer links here.
config.js           SETTINGS: email, WhatsApp number, social links, video path.
content.js          ALL THE TEXT, English and French (readable, edit freely).
custom.css          Our layout and style changes (readable). Loaded after app.css.
pages.js            Presentation page, blog list page, 3D pencil (readable code).
app.css             Original site styles (minified, do not edit, use custom.css).
app.js              Site engine: 3D logo, transitions, language, dark mode.
                    Minified: do not edit. Text lives in content.js.
model.js            The 3D Eddino logo (embedded). Do not edit.
pencil-model.js     The 3D pencil "Design with Passion" (embedded, see below).
brand/              Logo mark, 2026 brand presentation, founder portrait.
media/              Put the presentation video here (see below).
blog/               Blog: posts/ (one HTML file per article), _template.html, posts.js.
tools/              update_blog.py (blog index) and export_pencil_for_web.py (pencil).
update-blog.bat     Windows: double-click after adding or editing a blog post.
source/             Original Blender file of the pencil (for future edits).

WHERE TO CHANGE THINGS
----------------------
Wording (any page, EN and FR)      content.js
  Each block is a section: "home", "services", "about", "presentation",
  "blog", "contact". Change the words between the quotes only.
  Keep the keys (the words before the colon) and the commas.
  Tags: <em>word</em> = italic purple, <blur>word</blur> = ghost effect,
  <br> = line break.

Email, WhatsApp, social links      config.js
  email: contact@eddinocreativelab.com
  whatsapp.number: digits only, country code first (261340222673)
  social.instagram / facebook / linkedin: paste your full page links.
  An empty or removed link hides that icon.

Services and cards                 content.js > services > list
  Four cards. The cards on the home page all get the same height automatically.
  Hero title                       content.js > home > title (keep it to two lines)
  "Let's make your brand stand out" content.js > home > ctaTitle

Menu and footer                    index.html (top: nav links; bottom: footer)

Colours and sizes                  custom.css (the top of the file is easy to read)

PRESENTATION PAGE (company video, 9:16)
---------------------------------------
Video file:   media/presentation-9x16.mp4
Poster (opt.): media/presentation-poster.jpg
Change the path in config.js > presentation if you rename the files.
Format: vertical 9:16 (1080 x 1920 px recommended), MP4 (H.264 video + AAC audio),
ideally under 100 MB so it starts quickly.
Until the file is there, the frame shows a "not added yet" note.
Button text is in content.js > presentation (ctaButton: "Request a sample of our work").

BLOG
----
Each article is one HTML file in blog/posts/.
To add an article:
  1. Copy blog/_template.html into blog/posts/ and rename it, for example
     blog/posts/why-consistency-matters.html (lowercase, no spaces).
  2. In the top part of the file, fill in:
       <title>          the title shown on the blog list
       description      a short summary (required)
       date             YYYY-MM-DD (required)
       category         optional small label
       status           "published" (default) or "draft" (hidden)
  3. Write the article in the <main> part. Keep the structure.
  4. Windows: double-click update-blog.bat (needs Python, free from python.org,
     tick "Add python.exe to PATH" during install).
     Other systems: run  python tools/update_blog.py  in the site folder.
  The article appears on the Blog page, newest first.
  Editing or deleting a file works the same way: edit it, or delete it, then run the update.
  Files starting with "_" are ignored.
Note: the Blog list is rebuilt by that script because a browser opened from a
folder cannot read the list of files by itself.

3D PENCIL ("Design with Passion")
---------------------------------
It sits on the right of the "Let's make your brand stand out" box on the home page.
Moving the mouse over it turns the pencil around its long axis, so the printed text
can be seen from the side too. The pencil leans toward the cursor as well.
Settings are in pages.js (initPencil): camera distance and size of the pencil.
Text sharpness: the body texture is exported at 2048 px (BAKE_SIZE_BODY in the script),
other parts at 512 px (BAKE_SIZE). The text itself comes from the image placed on the
pencil in the .blend, which is only 1000 x 432 px. For sharper text, put a higher
resolution "Design with Passion" image in the .blend, then export again.
To update it after changing the Blender file:
  1. Open the .blend in Blender, then open tools/export_pencil_for_web.py
     in the Scripting tab.
  2. Set SITE_FOLDER (top of the script) to this site folder.
  3. Click Run Script. It bakes the colours, then writes pencil-model.js.
Blender procedural materials cannot be exported directly, which is why the script bakes them.

CONTACT PAGE
------------
Shows the email, a WhatsApp button (logo + "Chat on WhatsApp", opens your WhatsApp) and the contact form.
The form sends messages to Formspree (endpoint in contact-form.js, form ID xkjjvdwp).
Messages arrive in the inbox linked to that Formspree account. Errors are shown to the visitor.
To change the destination, edit FORMSPREE_ENDPOINT at the top of contact-form.js.

GOOGLE ANALYTICS AND SEARCH ENGINES
-----------------------------------
Google Analytics 4: paste your Measurement ID (G-...) in config.js > analytics > measurementId.
  Leave it empty and no tracking is loaded. analytics.js sends page views for each menu page,
  email / WhatsApp / social clicks, and contact form messages ("generate_lead").
Site address: config.js > siteUrl, and the SITE_URL line in tools/update_blog.py
  (used by the sitemap). Also check the canonical and og:image links in index.html.
Search: robots.txt and sitemap.xml are in the site folder. The sitemap is rebuilt
  each time you run the blog update (update-blog.bat). Submit the sitemap in Google Search Console.
Titles and descriptions: the home title is in content.js > titles > home; the static
  description and social preview are in index.html (<head>).

TO FILL BEFORE PUBLISHING
-------------------------
- Social links in config.js (currently placeholders: https://www.instagram.com/ etc.)
- The presentation video in media/ (until then, the presentation page shows a note)
- The contact form connection (see above)
- The founder's wording in content.js, if needed

TECHNICAL NOTES
---------------
- The site works offline except the Google fonts (fallback fonts are used).
- The 3D effects need a browser with WebGL (all modern browsers).
- To publish online, upload the whole folder to any static host.
