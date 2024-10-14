# NextJS 14 Practice & Expansion

Learning NextJS14 from the top creators on YouTube and expanding on their teaching to create robust and intuitive portfolio projects.

## 📋 <a name="table">Table of Contents</a>

1. 🏫 [Build Blocks](#buildblocks)

### <a name="buildblocks">🏫 Build Blocks</a>

<div align="center">
  <br />
    <a href="https://youtu.be/y5vE8y_f_OM" target="_blank">
      <img src="https://github.com/user-attachments./assets/eaaeb1f0-22da-46be-9e29-9bef70e0039d" alt="Live Docs Tutorial">
    </a>
  <br />

  <div>
    <img src="https://img.shields.io/badge/-Next_JS-black?style=for-the-badge&logoColor=white&logo=nextdotjs&color=61DAFB" alt="next.js" />
    <img src="https://img.shields.io/badge/-TypeScript-black?style=for-the-badge&logoColor=white&logo=typescript&color=3178C6" alt="typescript" />
    <img src="https://img.shields.io/badge/-Tailwind_CSS-black?style=for-the-badge&logoColor=white&logo=tailwindcss&color=06B6D4" alt="tailwindcss" />
  </div>

  <h3 align="center">Collaborate. Build. Together.</h3>

   <div align="center">
     A collaborative live page and document builder that takes the ideas of Live Docs by <a href="https://www.youtube.com/@javascriptmastery/videos" target="_blank"><b>JavaScript Mastery</b></a> and expands it to create a full suite of sustainable and easy to use creation tools for developers, designers and everyday users.
    </div>
</div>

---


#### <a name="buildblocks_pagebuilder">✅ Task List</a>
<details>
<summary>Page Builder</summary>
 - Build a live and interactive page builder using NextJS & React (referencing Build Blocks API and Lexical UI) with block library and intuitive user interface.

 Details here:
</details>

<details>
<summary>Programmatic Screenshots</summary>
 - Make a server-action and component to capture a screenshot of pages and documents when edited. [Guide Here](https://medium.com/geekculture/how-to-build-programmatic-screenshots-of-any-website-in-seconds-using-next-js-b33fed502c7c)

 Details here:
</details>

#### <a name="buildblocks_packages">📦 Important Utilities & Packages</a>
<details>
<summary>Live Blocks</summary>
 - Build a page builder using custom page builder(referencing Build Blocks API and UI) with block library and intuitive user interface.
</details>

<details>
<summary>Clerk Authentication</summary>
 - Build a page builder using custom page builder(referencing Build Blocks API and UI) with block library and intuitive user interface.
</details>

<details>
<summary>SentryIO</summary>
  - Build a page builder using custom page builder(referencing Build Blocks API and UI) with block library and intuitive user interface.
</details>

<details>
<summary>Lexical Editor + JSM Editor</summary>
  - Build a page builder using custom page builder(referencing Build Blocks API and UI) with block library and intuitive user interface.
</details>

#### <a name="buildblocks_snippets">✂ Important Snippets</a>

<details>
<summary>🎨<code>globals.css</code></summary>

```css
@tailwind base;
@tailwind components;
@tailwind utilities;

/* @import "@buildblocks/react-ui/styles.css"; */
/* @import "@liveblocks/react-lexical/styles.css"; */

/* @import "../styles/dark-theme.css"; */

/* ========================================== TAILWIND STYLES */
@layer base {
  :root {
    background: #09111f;
    color: #fff;
    margin: 0;
  }

  .custom-scrollbar::-webkit-scrollbar {
    width: 4px;
    height: 4px;
    border-radius: 50px;
  }

  .custom-scrollbar::-webkit-scrollbar-track {
    background: #09090a;
  }

  .custom-scrollbar::-webkit-scrollbar-thumb {
    background: #2e3d5b;
    border-radius: 50px;
  }

  .custom-scrollbar::-webkit-scrollbar-thumb:hover {
    background: #7878a3;
  }
}

@layer utilities {
  .text-28-semibold {
    @apply text-[28px] font-semibold;
  }
  .text-10-regular {
    @apply text-[10px] font-normal;
  }

  .gradient-blue {
    @apply bg-gradient-to-t from-blue-500 to-blue-400;
  }
  .gradient-red {
    @apply bg-gradient-to-t from-red-500 to-red-400;
  }

  .shad-dialog {
    @apply w-full max-w-[400px] rounded-xl border-none bg-doc bg-cover px-5 py-7 shadow-xl sm:min-w-[500px] !important;
  }

  .shad-dialog button {
    @apply focus:ring-0 focus:ring-offset-0 focus-visible:border-none focus-visible:outline-none focus-visible:ring-transparent focus-visible:ring-offset-0 !important;
  }

  .shad-select {
    @apply w-fit border-none bg-transparent text-blue-100 !important;
  }

  .shad-select svg {
    @apply ml-1 mt-1;
  }

  .shad-select-item {
    @apply cursor-pointer bg-dark-200 text-blue-100 focus:bg-dark-300 hover:bg-dark-300 focus:text-blue-100 !important;
  }

  .shad-popover {
    @apply w-[460px] border-none bg-dark-200 shadow-lg !important;
  }

  .floating-toolbar {
    @apply flex w-full min-w-max items-center justify-center gap-2 rounded-lg bg-dark-350 p-1.5 shadow-xl;
  }

  .floating-toolbar-btn {
    @apply relative inline-flex size-8 items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 disabled:pointer-events-none disabled:opacity-50;
  }

  .toolbar-wrapper {
    @apply z-50 custom-scrollbar w-screen overflow-auto border-y border-dark-300 bg-dark-100 pl-3 pr-4 shadow-sm;
  }

  .editor-wrapper {
    @apply custom-scrollbar h-[calc(100vh-140px)] gap-5 overflow-auto px-5 pt-5 lg:flex-row lg:items-start lg:justify-center  xl:gap-10 xl:pt-10;
  }

  .header {
    @apply min-h-[92px] min-w-full flex-nowrap bg-dark-100 flex w-full items-center justify-between gap-2 px-4;
  }

  .document-list-container {
    @apply flex flex-col items-center mb-10 w-full gap-10 px-5;
  }

  .document-list-title {
    @apply max-w-[730px] items-end flex w-full justify-between;
  }

  .document-list-item {
    @apply flex items-center justify-between gap-4 rounded-lg bg-doc bg-cover p-5 shadow-xl;
  }

  .document-list-empty {
    @apply flex w-full max-w-[730px] flex-col items-center justify-center gap-5 rounded-lg bg-dark-200 px-10 py-8;
  }

  .document-title-input {
    @apply min-w-[78px] border-none bg-transparent px-0 text-left text-base font-semibold leading-[24px] focus-visible:ring-0 focus-visible:ring-offset-0 disabled:text-black sm:text-xl md:text-center !important;
  }

  .document-title {
    @apply line-clamp-1 border-dark-400 text-base font-semibold leading-[24px] sm:pl-0 sm:text-xl;
  }

  .view-only-tag {
    @apply rounded-md bg-dark-400/50 px-2 py-0.5 text-xs text-blue-100/50;
  }

  .collaborators-list {
    @apply hidden items-center justify-end -space-x-3 overflow-hidden sm:flex;
  }

  .share-input {
    @apply h-11 flex-1 border-none bg-dark-400 focus-visible:ring-0 focus-visible:ring-offset-0 !important;
  }

  .remove-btn {
    @apply rounded-lg bg-transparent px-0 text-red-500 hover:bg-transparent;
  }

  .comments-container {
    @apply mb-10 space-y-4 lg:w-fit flex w-full flex-col items-center justify-center;
  }

  .comment-composer {
    @apply w-full max-w-[800px] border border-dark-300 bg-dark-200 shadow-sm lg:w-[350px];
  }

  .comment-thread {
    @apply w-full max-w-[800px] border border-dark-300 bg-dark-200 shadow-sm lg:w-[350px] transition-all;
  }

  .loader {
    @apply flex size-full h-screen items-center justify-center gap-3 text-white;
  }

  /* ======================== Auth Pages */
  .auth-page {
    @apply flex h-screen w-full flex-col items-center justify-center gap-10;
  }

  /* ======================== Home Page */
  .home-container {
    @apply relative flex min-h-screen w-full flex-col items-center gap-5 sm:gap-10;
  }

  .document-ul {
    @apply flex w-full max-w-[730px] flex-col gap-5;
  }

  /* ======================== CollaborativeRoom */
  .collaborative-room {
    @apply flex size-full max-h-screen flex-1 flex-col items-center overflow-hidden;
  }
}

/* ======================== Clerk Override */
.cl-avatarBox {
  width: 36px;
  height: 36px;
}

.cl-userButtonTrigger {
  height: fit-content !important;
}

.cl-cardBox,
.cl-signIn-start,
.cl-signUp-start,
.cl-footer {
  background: #060d18;
  box-shadow: none;
  padding: 20px;
}

.cl-socialButtonsBlockButton,
.cl-socialButtonsBlockButton:hover {
  height: 40px;
  background-color: #3371ff;
  color: #fff;
}

.cl-internal-2gzuzc {
  filter: brightness(1000%);
}

.cl-logoBox {
  height: 52px;
}

/* ======================== Liveblocks Override */
.lb-root {
  --lb-accent-subtle: #0b1527;
  --lb-radius: 0px;
  --lb-dynamic-background: #1b2840;
}

.lb-comment,
.lb-thread-comments,
.lb-composer,
.lb-comment-reaction {
  background-color: #0f1c34;
  color: #fff;
}

.lb-button {
  --lb-foreground-moderate: #fff;
}

.lb-button:where([data-variant="primary"]) {
  background-color: #161e30;
  color: #b4c6ee;
  padding: 8px;
}

.lb-button:where(
    [data-variant="default"]:not(
        :is(
            :enabled:hover,
            :enabled:focus-visible,
            [aria-expanded="true"],
            [aria-selected="true"]
          )
      )
  ) {
  color: #b4c6ee;
}

.lb-button:where(
    :enabled:hover,
    :enabled:focus-visible,
    [aria-expanded="true"],
    [aria-selected="true"]
  ) {
  --lb-button-background: #161e30;

  color: #b4c6ee;
}

.lb-inbox-notification-list-item:where(:not(:last-of-type)) {
  border-bottom: none;
}

.lb-comment-body,
.lb-dropdown-item,
.lb-dropdown-item-icon,
.lb-composer-editor {
  color: #fff;
}

.lb-composer-action {
  padding: 8px;
}

.lb-comment-content {
  background: #0b1527;
  margin-top: 16px;
  padding: 12px;
  border-radius: 4px;
  font-size: 14px;
}

.lb-comment-date,
.lb-lexical-mention-suggestion-user,
.lb-composer-suggestions-list-item,
.lb-inbox-notification-date,
.lb-comment-author {
  color: #b4c6ee;
}

.data-liveblocks-portal {
  color: #b4c6ee !important;
}

.lb-root:where(:not(.lb-root .lb-root)) {
  --lb-dynamic-background: #1b2840;
  color: #fff;
}

.lb-composer-editor :where([data-placeholder]) {
  color: #b4c6ee;
  font-size: 14px;
}

.lb-lexical-floating-threads-thread:where([data-resolved]) {
  opacity: 40%;
}

.lb-elevation {
  background: #0f1c34;
}
```

</details>

<details>
<summary>🔒<code>.env.local</code></summary>

```env
#Clerk
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=
CLERK_SECRET_KEY=
NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up


LIVEBLOCKS_SECRET_KEY=

SENTRY_AUTH_TOKEN=
```

#### <a name="buildblocks_links">🔗 Links</a>

- Public assets used in the project can be found [here](https://drive.google.com/file/d/1MCQaP-imgDdopwcUn4CN_D-WglDc--Ho/view?usp=sharing)
- [Buildblocks Starter Guide](https://buildblocks.io/docs/get-started/nextjs-lexical)
